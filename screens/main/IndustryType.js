import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const IndustryType=({navigation})=>{
    const [name,setName]=useState('');
    
    
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Industry type</Text>

        <View style={styles.formWrapper}>
        <TextInput label="Name" mode="flat" style={styles.textField} value={name} onChangeText={(name)=>setName(name)}/>
        <View style={styles.padder}/>
      </View>
        <View style={styles.padder}/>
        <Button mode="contained" color="#26B273" style={styles.button} onPress={ _=>{
            validate({name},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`industry/saveIndustryType`,'POST',{userId,name})
                    // console.log(result)
                    if(!result.error){
                        navigation.navigate('Penalties');                        
                        return Alert.alert('Industry information added succesfully');
                    }
                    else{
                        navigation.goBack();
                        return Alert.alert(result.error)
                    }
                    
                }catch(err){
                    console.error(err)
                }
               
            });
           
            
            }}> <Text style={{color: 'white'}}>Next</Text></Button>
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
export default IndustryType;