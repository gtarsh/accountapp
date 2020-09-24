import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { backend, validate, getUserId, greenColor } from '../../Common';
import { StackActions } from '@react-navigation/native';
import Loader from '../AdminScreen/Loader'
const AnserTo = ({ route, navigation }) => {

    const { v } = route.params;
    let userId = v._id
    let data = v.questions;


    let get = data.map(cont => {
        return cont.question;
    });
    let ques = get[get.length - 1]
    console.log(ques)

    let ObjectId = data.map(cont => {
        return cont._id;
    });
    let LastObject = ObjectId[ObjectId.length - 1]
    console.log(LastObject)

    const [answer, setAnswer] = useState('');
    const [loader, updateLoader] = useState(false);
    return (
        <View style={styles.container}>
            <ScrollView>
                {(get.length > 0) ? (
                    <View>
                        <Text style={styles.heading}>Answers Questions</Text>
                                <View style={styles.TextContainer}>
                                    <Text style={styles.headingText}>{`Question`}</Text>
                                    <View style={styles.formWrapper}>
                                        <View style={styles.textField}><Text style={{ fontSize: 18, }}>{ques}</Text></View>
                                    </View>
                                    <View style={styles.formWrapper}>
                                        <TextInput label="Answer" mode="flat" style={styles.textField} onBlur={(answer) => setAnswer(answer)} />
                                    </View>
                                </View>
                        <View style={styles.padder} />
                        <Button mode="contained" color="#26B273" style={styles.button} onPress={_ => {
                            validate({ answer }, async () => {
                                try {
                                    updateLoader(true)
                                    const result = await backend(`answer/saveAnswer`, 'POST', { answer: answer,question: LastObject })
                                    console.log(result)
                                    if (!result.error) {
                                        updateLoader(false)
                                        return Alert.alert('Answer Sent Succesfully');
                                    }
                                    else {
                                        return Alert.alert(result.error)
                                    }

                                } catch (err) {
                                    console.error(err)
                                    updateLoader(false)
                                }

                            });


                        }}><Text style={{ color: 'white' }}>Save Your Question</Text></Button>
                        <Loader loader={loader} />
                        <View style={styles.padder} />
                    </View>
                ) : (
                        <View style={styles.WaitingView}>
                            <Text style={{ fontSize: 30, color: 'green' }}>No Question Ask</Text>
                        </View>
                    )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    LoadingView: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: 300
    },
    heading: {
        fontSize: 30,
        paddingLeft: 20,
        paddingTop: 30,
        fontWeight: 'bold'
    },
    WaitingView: {
        // backgroundColor: 'red',
        height: 300,
        width: 400,
        alignSelf: 'center',
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 30,
        fontWeight: 'bold'
    },
    formWrapper: {
        marginTop: 25
    },
    textField: {
        width: '90%',
        alignSelf: 'center'
    },
    padder: {
        padding: 10
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        padding: 5
    },
    TextContainer: {
        width: "100%",
        height: 200,
        // backgroundColor: "green"
    },


});
export default AnserTo;

// {
//     <View style={styles.TextContainer}>
//         <View style={styles.formWrapper}>
//         <TextInput label="Question" mode="flat" style={styles.textField} value={update} onChangeText={(update)=>setUpdate(update)}/>       
//         </View>
//         <View style={styles.formWrapper}>
//         <TextInput label="Answer" mode="flat" style={styles.textField} value={update} onChangeText={(update)=>setUpdate(update)}/>       
//         </View>
//         </View>
// }



// {

//     <Text style={styles.heading}>Ask Questions</Text>
//     <Text style={styles.headingText}>Questions</Text>



//     <View style={styles.TextContainer}>
//     <View style={styles.formWrapper}>
//     <TextInput label="Question" mode="flat" style={styles.textField} value={update} onChangeText={(update)=>setUpdate(update)}/>       
//     </View>
//     <View style={styles.formWrapper}>
//     <TextInput label="Answer" mode="flat" style={styles.textField} value={update} onChangeText={(update)=>setUpdate(update)}/>       
//     </View>
//     </View>



//     <View style={styles.padder}/>
//     <Button mode="contained" color="#26B273" style={styles.button} onPress={ _=>{
//         validate({update},async ()=>{
//             try{
//                 updateLoader(true)
//                 const userId=await getUserId();
//                 const result= await backend(`question/saveQuestion`,'POST',{userId,question:update})
//                 // console.log(result)
//                 if(!result.error){
//                     updateLoader(false)
//                     return Alert.alert('Updates information added succesfully');
//                 }
//                 else{
//                     return Alert.alert(result.error)
//                 }

//             }catch(err){
//                 console.error(err)
//             }

//         });


//         }}><Text style={{color: 'white'}}>Save Your Question</Text></Button>
//         <Loader loader={loader} />
//     <View style={styles.padder}/>
// }