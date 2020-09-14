import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';

const IncomeTax=({navigation})=>{
    const [incomeFromSalary,setIncomeFromSalary]=useState(null);
    const [incomeFromHouseProperty,setIncomeFromHouseProperty]=useState(null);
    const [capitalGains,setCapitalGains]=useState(null);
    const [incomeFromBusiness,setIncomeFromBusiness]=useState(null);
    const [incomeFromOtherSources,setIncomeFromOtherSources]=useState(null);
    const [totalIncome,setTotalIncome]=useState(null);
    const [deductions,setDeductions]=useState(null);
    const [valuefor80c,setValueFor80c]=useState(null);
    const [valuefor80d,setValueFor80d]=useState(null);
    const [otherDeductions,setOtherDeductions]=useState(null);
    const [netTaxableIncome,setNetTaxableIncome]=useState(null);
    const [taxPayable,setTaxPayable] = useState(null);
    const [advanceTax,setAdvanceTax]=useState(null);
    const [tds,setTds]=useState(null);

      return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Income tax information</Text>

        <View style={styles.formWrapper}>
        <TextInput keyboardType="decimal-pad" label="Income from salary" mode="flat" style={styles.textField} value={incomeFromSalary} onChangeText={(incomeFromSalary)=>setIncomeFromSalary(incomeFromSalary)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Income from house property" mode="flat" style={styles.textField} value={incomeFromHouseProperty} onChangeText={(incomeFromHouseProperty)=>setIncomeFromHouseProperty(incomeFromHouseProperty)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Capital gains" mode="flat" style={styles.textField} value={capitalGains} onChangeText={(capitalGains)=>setCapitalGains(capitalGains)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Income from busines" mode="flat" style={styles.textField} value={incomeFromBusiness} onChangeText={(incomeFromBusiness)=>setIncomeFromBusiness(incomeFromBusiness)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Income from other sources" mode="flat" style={styles.textField} value={incomeFromOtherSources} onChangeText={(incomeFromOtherSources)=>setIncomeFromOtherSources(incomeFromOtherSources)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Total income" mode="flat" style={styles.textField} value={totalIncome} onChangeText={(totalIncome)=>setTotalIncome(totalIncome)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Deductions" mode="flat" style={styles.textField} value={deductions} onChangeText={(deductions)=>setDeductions(deductions)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Value for 80c" mode="flat" style={styles.textField} value={valuefor80c} onChangeText={(valuefor80c)=>setValueFor80c(valuefor80c)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Value for 80d" mode="flat" style={styles.textField} value={valuefor80d} onChangeText={(valuefor80d)=>setValueFor80d(valuefor80d)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Other deductions" mode="flat" style={styles.textField} value={otherDeductions} onChangeText={(otherDeductions)=>setOtherDeductions(otherDeductions)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Net Taxable Income" mode="flat" style={styles.textField} value={netTaxableIncome} onChangeText={(netTaxableIncome)=>setNetTaxableIncome(netTaxableIncome)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Tax Payable" mode="flat" style={styles.textField} value={taxPayable} onChangeText={(taxPayable)=>setTaxPayable(taxPayable)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Advance Tax" mode="flat" style={styles.textField} value={advanceTax} onChangeText={(advanceTax)=>setAdvanceTax(advanceTax)}/>
        <View style={styles.padder}/>
        <TextInput keyboardType="decimal-pad" label="Tds" mode="flat" style={styles.textField} value={tds} onChangeText={(tds)=>setTds(tds)}/>
       
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" style={styles.button} onPress={ _=>{
            validate({incomeFromSalary,incomeFromHouseProperty,capitalGains,incomeFromBusiness,incomeFromOtherSources,totalIncome,deductions,valuefor80c,valuefor80d,otherDeductions,netTaxableIncome,taxPayable,advanceTax,tds},async ()=>{
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const result= await backend(`incomeTax/saveIncomeTax/`,'POST',{userId,incomeFromSalary,incomeFromHouseProperty,capitalGains,incomeFromBusiness,incomeFromOtherSources,totalIncome,deductions,valuefor80c,valuefor80d,otherDeductions,netTaxableIncome,taxPayable,advanceTax,tds})
                    if(!result.error){
                        navigation.navigate('IndustryType');                        
                        return Alert.alert('Income Tax information added succesfully');
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
export default IncomeTax;