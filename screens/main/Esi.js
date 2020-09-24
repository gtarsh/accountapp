import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const Esi=({navigation})=>{
    const [month,setMonth]=useState('');
    const [esi,setEsi]=useState({dateOfFilling:'',numberOfEmployees:null,employerShare:'',employeeShare:'',totalSalaryPaid:''});
   const [pf,setPf]=useState({dateOfFilling:'',numberOfEmployees:null,employerShare:'',employeeShare:'',totalSalaryPaid:''});
   const [pt,setPt]=useState({dateOfFilling:'',professionalTax:''});
      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>EsiPfPt information</Text>

        <View style={styles.formWrapper}>
        <TextInput label="Month" mode="flat" style={styles.textField} value={month} onChangeText={(month)=>setMonth(month)}/>
        <View style={styles.padder}/>

        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Esi information</Text>
        <View style={styles.padder}/>
        <TextInput label="Date of filling" mode="flat" style={styles.textField} value={esi.dateOfFilling} onChangeText={(dateOfFilling)=>setEsi({...esi,dateOfFilling})}/>
        <View style={styles.padder}/>
        
        <TextInput label="Number of employees" mode="flat" style={styles.textField} value={esi.numberOfEmployees} onChangeText={(numberOfEmployees)=>setEsi({...esi,numberOfEmployees})}/>
        <View style={styles.padder}/>
        <TextInput label="Employee share" mode="flat" style={styles.textField} value={esi.employeeShare} onChangeText={(employeeShare)=>setEsi({...esi,employeeShare})}/>
        <View style={styles.padder}/>
        <TextInput label="Employer share" mode="flat" style={styles.textField} value={esi.employerShare} onChangeText={(employerShare)=>setEsi({...esi,employerShare})}/>
        <View style={styles.padder}/>
        <TextInput label="Total salary paid" mode="flat" style={styles.textField} value={esi.totalSalaryPaid} onChangeText={(totalSalaryPaid)=>setEsi({...esi,totalSalaryPaid})}/>
        </View>
        <View style={styles.padder}/>
        <View style={styles.padder}/>
        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Pf information</Text>
        <View style={styles.padder}/>
        <TextInput label="Date of filling" mode="flat" style={styles.textField} value={pf.dateOfFilling} onChangeText={(dateOfFilling)=>setPf({...pf,dateOfFilling})}/>
        <View style={styles.padder}/>
        
        <TextInput label="Number of employees" mode="flat" style={styles.textField} value={pf.numberOfEmployees} onChangeText={(numberOfEmployees)=>setPf({...pf,numberOfEmployees})}/>
        <View style={styles.padder}/>
        <TextInput label="Employee share" mode="flat" style={styles.textField} value={pf.employeeShare} onChangeText={(employeeShare)=>setPf({...pf,employeeShare})}/>
        <View style={styles.padder}/>
        <TextInput label="Employer share" mode="flat" style={styles.textField} value={pf.employerShare} onChangeText={(employerShare)=>setPf({...pf,employerShare})}/>
        <View style={styles.padder}/>
        <TextInput label="Total salary paid" mode="flat" style={styles.textField} value={pf.totalSalaryPaid} onChangeText={(totalSalaryPaid)=>setPf({...pf,totalSalaryPaid})}/>
        </View>
        
        <View style={styles.padder}/>
        <View style={styles.padder}/>
        <View style={styles.internalForm}>
        <Text style={styles.headingText}>Pt information</Text>
        <View style={styles.padder}/>
        <TextInput label="Date of filling" mode="flat" style={styles.textField} value={pt.dateOfFilling} onChangeText={(dateOfFilling)=>setPt({...pt,dateOfFilling})}/>
        <View style={styles.padder}/>
        <TextInput label="Professional tax" mode="flat" style={styles.textField} value={pt.professionalTax} onChangeText={(professionalTax)=>setPt({...pt,professionalTax})}/>
        </View>
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" color="#26B273" style={styles.button} onPress={ _=>{
            
            validate({month,...esi,...pf,...pt},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`/esiPfPt/saveEsiPfPt`,'POST',{userId,month,esi,pf,pt});
                    if(!result.error){
                        navigation.navigate('Gst');                        
                        return Alert.alert('EsiPfPt information added succesfully');
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
export default Esi;