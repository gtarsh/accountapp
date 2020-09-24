import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate , getUserId,greenColor} from '../../Common';
import { StackActions } from '@react-navigation/native';
import Loader from '../AdminScreen/Loader'
const QandA=({navigation})=>{
    const [update,setUpdate]=useState('');
    const [loader, updateLoader] = useState(false);
    return(
      <View style={styles.container}>
          <ScrollView>
          
        <Text style={styles.heading}>Ask Questions</Text>
        <Text style={styles.headingText}>Questions</Text>

        <View style={styles.formWrapper}>
        <TextInput label="Question" mode="flat" style={styles.textField} value={update} onChangeText={(update)=>setUpdate(update)}/>       
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" color="#26B273" style={styles.button} onPress={ _=>{
            validate({update},async ()=>{
                try{
                    updateLoader(true)
                    const userId=await getUserId();
                    const result= await backend(`question/saveQuestion`,'POST',{userId,question:update})
                    // console.log(result)
                    if(!result.error){
                        updateLoader(false)
                        return Alert.alert('Updates information added succesfully');
                    }
                    else{
                        return Alert.alert(result.error)
                    }
                    
                }catch(err){
                    console.error(err)
                }
               
            });
           
            
            }}><Text style={{color: 'white'}}>Save Your Question</Text></Button>
            <Loader loader={loader} />
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
export default QandA;