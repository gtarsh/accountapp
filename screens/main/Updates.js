import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';
import { StackActions } from '@react-navigation/native';
const Updates=({navigation})=>{
      const [update,setUpdate]=useState('');
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Updates information</Text>

        <View style={styles.formWrapper}>
        <TextInput label="Update" mode="flat" style={styles.textField} value={update} onChangeText={(update)=>setUpdate(update)}/>       
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" style={styles.button} onPress={ _=>{
            validate({update},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`updates/saveUpdates/${userId}`,'POST',{userId,update})
                    if(!result.error){
                        navigation.navigate('DocRequired')
                        return Alert.alert('Updates information added succesfully');
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
export default Updates;