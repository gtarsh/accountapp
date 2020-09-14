import React,{useState} from 'react';
import { View , Text ,StyleSheet , ScrollView , Alert } from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate , getUserId} from '../../Common';

const FileTaxScreen=({navigation})=>{
    const [fromDate,setFromDate]=useState('');
    const [toDate,setToDate]=useState('');
    const [saleOfGoods,setSaleOfGoods]=useState(null);
    const [stockPurchases,setStockPurchases]=useState(null);
    const [expenses,setExpenses]=useState(null);
    const [grossProfit,setGrossProfit]=useState(null);
    const [netProfit,setNetProfit]=useState(null);
    const [cashBalance,setCashBalance]=useState(null);
    const [bankBalance,setBankBalance]=useState(null);

    return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Accounting information</Text>

        <View style={styles.formWrapper}>
        <TextInput label="From Date" mode="flat" style={styles.textField} value={fromDate} onChangeText={(fromDate)=>setFromDate(fromDate)}/>
        <View style={styles.padder}/>
        <TextInput label="To Date" mode="flat" style={styles.textField} value={toDate} onChangeText={(toDate)=>setToDate(toDate)}/>
        <View style={styles.padder}/>
        <TextInput label="Sale of Goods" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={saleOfGoods} onChangeText={(saleOfGoods)=>setSaleOfGoods(saleOfGoods)}/>
        <View style={styles.padder}/>
        <TextInput label="Stock Purchases" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={stockPurchases} onChangeText={(stockPurchases)=>setStockPurchases(stockPurchases)}/>
        <View style={styles.padder}/>
        <TextInput label="Expenses" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={expenses} onChangeText={(expenses)=>setExpenses(expenses)}/>
        <View style={styles.padder}/>
        <TextInput label="Gross Profit" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={grossProfit} onChangeText={(grossProfit)=>setGrossProfit(grossProfit)}/>
        <View style={styles.padder}/>
        <TextInput label="Net Profit" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={netProfit} onChangeText={(netProfit)=>setNetProfit(netProfit)}/>
        <View style={styles.padder}/>
        <TextInput label="Cash Balance" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={cashBalance} onChangeText={(cashBalance)=>setCashBalance(cashBalance)}/>
        <View style={styles.padder}/>
        <TextInput label="Bank Balance" keyboardType="decimal-pad" mode="flat" style={styles.textField} value={bankBalance} onChangeText={(bankBalance)=>setBankBalance(bankBalance)}/>
        </View>
        <View style={styles.padder}/>
        <Button mode="contained" style={styles.button} onPress={ _=>{
            validate({fromDate,toDate,saleOfGoods,stockPurchases,expenses,grossProfit,netProfit,cashBalance,bankBalance},async ()=>{
                try{
                    navigation.navigate('Loading')
                    const userId=await getUserId();
                    const result= await backend('accounting/saveAccounting','POST',{userId,fromDate,toDate,saleOfGoods,stockPurchases,expenses,grossProfit,netProfit,cashBalance,bankBalance})
                    if(!result.error){
                        navigation.navigate('DateInfo');                        
                        return Alert.alert('Accounting information added succesfully');
                        
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
export default FileTaxScreen;