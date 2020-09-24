import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const Gst=({navigation})=>{
    const [dateOfFilling,setDateOfFilling]=useState('');
    const [salesReported,setSalesReported]=useState({igst:null,cgst:null,sgst:null});
   const [purchases,setPurchases]=useState({igst:null,cgst:null,sgst:null});
   const [electronicCashLedger,setElectronicCashLedger]=useState({igst:null,cgst:null,sgst:null});
   const [electronicCreditLedger,setElectronicCreditLedger]=useState({igst:null,cgst:null,sgst:null})
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Gst information</Text>

        <View style={styles.formWrapper}>
        <View style={styles.padder}/>
        <TextInput label="Date of filling" mode="flat" style={styles.textField} value={dateOfFilling} onChangeText={(dateOfFilling)=>setDateOfFilling(dateOfFilling)}/>
        <View style={styles.padder}/>
        
        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Sales reported information</Text>
        <View style={styles.padder}/>
        
        <TextInput keyboardType="decimal-pad" label="igst" mode="flat" style={styles.textField} value={salesReported.igst} onChangeText={(igst)=>setSalesReported({...salesReported,igst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="cgst" mode="flat" style={styles.textField} value={salesReported.cgst} onChangeText={(cgst)=>setSalesReported({...salesReported,cgst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="sgst" mode="flat" style={styles.textField} value={salesReported.sgst} onChangeText={(sgst)=>setSalesReported({...salesReported,sgst})}/>
        
        </View>
        <View style={styles.padder}/>
        <View style={styles.padder}/>

        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Purchases information</Text>
        <View style={styles.padder}/>
        
        <TextInput keyboardType="decimal-pad" label="igst" mode="flat" style={styles.textField} value={purchases.igst} onChangeText={(igst)=>setPurchases({...purchases,igst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="cgst" mode="flat" style={styles.textField} value={purchases.cgst} onChangeText={(cgst)=>setPurchases({...purchases,cgst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="sgst" mode="flat" style={styles.textField} value={purchases.sgst} onChangeText={(sgst)=>setPurchases({...purchases,sgst})}/>
        
        </View>
        <View style={styles.padder}/>

        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Electronic Cash Ledger</Text>
        <View style={styles.padder}/>
        
        <TextInput keyboardType="decimal-pad" label="igst" mode="flat" style={styles.textField} value={electronicCashLedger.igst} onChangeText={(igst)=>setElectronicCashLedger({...electronicCashLedger,igst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="cgst" mode="flat" style={styles.textField} value={electronicCashLedger.cgst} onChangeText={(cgst)=>setElectronicCashLedger({...electronicCashLedger,cgst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="sgst" mode="flat" style={styles.textField} value={electronicCashLedger.sgst} onChangeText={(sgst)=>setElectronicCashLedger({...electronicCashLedger,sgst})}/>
        
        </View>
        <View style={styles.padder}/>

        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Electronic Credit Ledger</Text>
        <View style={styles.padder}/>
        
        <TextInput keyboardType="decimal-pad" label="igst" mode="flat" style={styles.textField} value={electronicCreditLedger.igst} onChangeText={(igst)=>setElectronicCreditLedger({...electronicCreditLedger,igst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="cgst" mode="flat" style={styles.textField} value={electronicCreditLedger.cgst} onChangeText={(cgst)=>setElectronicCreditLedger({...electronicCreditLedger,cgst})}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="sgst" mode="flat" style={styles.textField} value={electronicCreditLedger.sgst} onChangeText={(sgst)=>setElectronicCreditLedger({...electronicCreditLedger,sgst})}/>
        
        </View>
        <View style={styles.padder}/>
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" color="#26B273" style={styles.button} onPress={ _=>{
            console.log(purchases);
            validate({dateOfFilling,...salesReported,...purchases,...electronicCashLedger,...electronicCreditLedger},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`gst/saveGst`,'POST',{userId,salesReported,purchases,electronicCashLedger,electronicCreditLedger});
                    if(!result.error){
                        navigation.navigate('IncomeTax');                        
                        return Alert.alert('Gst information added succesfully');
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
    internalForm:{
        backgroundColor:'#ffffff',
        padding:10,
        paddingVertical:30,
        width:'90%',
        alignSelf:'center',
        borderRadius:10
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
export default Gst;