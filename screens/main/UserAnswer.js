import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { backend, validate, getUserId, greenColor } from '../../Common'; import Foundation from 'react-native-vector-icons/Foundation';
import Loader from '../AdminScreen/Loader'
const UserAnswer = ({ navigation }) => {

    useFocusEffect(
        React.useCallback(() => {
            fetchUsers()
        }, [])
    );


    // useEffect(() => {
    //     fetchUsers()
    // }, []);
    // const isFocused = useIsFocused();
    const [Data, setToData] = useState('');
    const [Data2, setToData2] = useState('');
    const [Question, setToQuestion] = useState('');
    const [Answer, setToAnswer] = useState([]);
    const [loader, updateLoader] = useState(false);

    async function fetchUsers() {
        try {
            updateLoader(true);
            const userId = await getUserId();
            const result = await backend(`user/${userId}`, {})
            let response = result.data.questions
            // console.log(response)
            setToData(response)
            updateLoader(false);
        } catch (err) {
            // console.error(err)
            return Alert.alert(err)
        }
    }



    return (
        <View style={styles.container}>
            <View><Text style={styles.heading}>Answer To Your Question</Text></View>

            <ScrollView>
                {(Data.length > 0) ? (
                    Data.map((v, m) => {
                        return (
                            <View key={m}>
                                <View style={styles.padder}></View>
                                <View style={styles.padder}></View>
                                <View style={styles.padder}></View>
                                <View style={styles.TextContainer}>
                                    <View>
                                        <View style={styles.textField}><Text style={{ fontSize: 18, color: 'red' }}>{`Question ${v.question}`}</Text></View>
                                    </View>
                                    <View style={styles.formWrapper}>
                                        <View style={styles.textField}>

                                            <Text style={{ fontSize: 18, color: 'green' }}>{v.answer}</Text>

                                        </View>

                                    </View>
                                </View>
                                {/* <View style={styles.padder} />

                                <Loader loader={loader} />
                                <View style={styles.padder} /> */}
                            </View>
                        )
                    }
                    )
                ) : (
                        <View style={styles.WaitingView}>
                            <Text style={{ fontSize: 30, color: 'green' }}>Send Your Question</Text>
                        </View>
                    )
                }
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
        fontWeight: 'bold',
        // backgroundColor: 'red'
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
        fontWeight: 'bold',
        color: '#555'
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
        height: 30,
        // backgroundColor: "green"
    },


});
export default UserAnswer;