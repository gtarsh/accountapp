import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const TaxFilingStart=({navigation})=>{
      const [update,setUpdate]=useState('');
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>Filing Your Tax Return</Text>
        <Text style={styles.headingText}>when you start you will be taken through set of pages for fulfilling information like: gst,EsiPfPt
        
        </Text>
        <Text style={styles.headingText}>click next after entering details on each page and at last you will be navigated again to this start page.
        </Text>
        <Button onPress={()=>{navigation.navigate('FileTaxScreen')}} mode="contained" style={styles.button}>Start</Button>
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
        padding:5,
        marginTop:50
    }

});
export default TaxFilingStart;