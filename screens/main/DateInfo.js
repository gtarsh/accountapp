import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const DateInfo=({navigation})=>{
    const [dueDate,setDueDate]=useState('');
    const [act,setAct]=useState('');
    const [particulars,setParticulars]=useState('');
    const [formToBeFilled,setFormToBeFilled]=useState('');
    const [link,setLink]=useState('');
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Date information</Text>

        <View style={styles.formWrapper}>
        <TextInput label="Due date" mode="flat" style={styles.textField} value={dueDate} onChangeText={(dueDate)=>setDueDate(dueDate)}/>
        <View style={styles.padder}/>
        <TextInput label="Act" mode="flat" style={styles.textField} value={act} onChangeText={(act)=>setAct(act)}/>
        <View style={styles.padder}/>
        <TextInput label="Particulars" mode="flat" style={styles.textField} value={particulars} onChangeText={(particulars)=>setParticulars(particulars)}/>
        <View style={styles.padder}/>
        <TextInput label="Form to be filled" mode="flat" style={styles.textField} value={formToBeFilled} onChangeText={(formToBeFilled)=>setFormToBeFilled(formToBeFilled)}/>
        <View style={styles.padder}/>
        <TextInput label="Link" mode="flat" style={styles.textField} value={link} onChangeText={(link)=>setLink(link)}/>
       
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" color="#26B273" style={styles.button} onPress={ _=>{
            validate({dueDate,act,particulars,formToBeFilled,link},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`accounting/saveAccounting/${userId}`,'POST',{dueDate,act,particulars,formToBeFilled,link})
                    // console.log(result)
                    if(!result.error){
                        navigation.navigate('Esi');                        
                        return Alert.alert('Date information added succesfully');
                    }
                    else{
                        navigation.goBack();
                        return Alert.alert(result.error)
                    }
                    
                }catch(err){
                    console.error(err)
                }
               
            });
           
            
            }}>
                <Text style={{color: 'white'}}>Next</Text></Button>
        <View style={styles.padder}/>
        <View style={styles.padder}/>
        <View style={styles.padder}/>
        </ScrollView>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    heading:{
        fontSize:30,
        paddingLeft:20,
        paddingTop:30,
        fontWeight:'bold'
    },
    headingText:{
        fontSize:20,
        paddingLeft:20,
        paddingTop:30,
        fontWeight:'bold'
    },
    formWrapper:{
        marginTop:30
    },  
    textField:{
        width:'90%',
        alignSelf:'center'
    },
    padder:{
        padding:10
    },
    button:{
        width:'90%',
        alignSelf:'center',
        padding:5
    }

});
export default DateInfo;