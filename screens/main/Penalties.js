import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const Penalties=({navigation})=>{
    const [formName,setFormName]=useState('');
    const [particular,setParticulars]=useState('');
    const [penalty,setPenalty]=useState('');
    const [interest,setInterest]=useState('');
    
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Penalties information</Text>

        <View style={styles.formWrapper}>
        <TextInput label="Form name" mode="flat" style={styles.textField} value={formName} onChangeText={(formName)=>setFormName(formName)}/>
        <View style={styles.padder}/>
        <TextInput label="Particular" mode="flat" style={styles.textField} value={particular} onChangeText={(particular)=>setParticulars(particular)}/>
        <View style={styles.padder}/>
        <TextInput label="Penalty" mode="flat" style={styles.textField} value={penalty} onChangeText={(penalty)=>setPenalty(penalty)}/>
        <View style={styles.padder}/>
        <TextInput label="Interest" mode="flat" style={styles.textField} value={interest} onChangeText={(interest)=>setInterest(interest)}/>
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" style={styles.button} onPress={ _=>{
            validate({formName,particular,penalty,interest},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`penalties/savePenalties`,'POST',{userId,formName,particular,penalty,interest})
                    if(!result.error){
                        navigation.navigate('Updates');                        
                        return Alert.alert('Penalties information added succesfully');
                    }
                    else{
                        navigation.goBack();
                        return Alert.alert(result.error)
                    }
                    
                }catch(err){
                    console.error(err)
                }
               
            });
           
            
            }}>Next</Button>
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
export default Penalties;