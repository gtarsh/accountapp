import React from 'react';
import { View ,TouchableWithoutFeedback } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {greenColor} from '../../Common';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FileTaxScreen from './FileTaxScreen';
import LoadingScreen from '../LoadingScreen';
import DateInfo from './DateInfo';
import Esi from './Esi';
import Gst from './Gst';
import IncomeTax from './IncomeTax';
import IndustryType from './IndustryType';
import Penalties from './Penalties';
import Updates from './Updates';
import DocRequired from './DocRequired';
import TaxFilingStart from './TaxFilingStart';
const Stack=createStackNavigator();
const FileTax=({navigation})=>{
    return(
        <Stack.Navigator initialRouteName={'DocRequired'} screenOptions={{headerTitle:({children})=><Fontisto name="sentry" size={30} color={greenColor}/>,headerLeft:()=><TouchableWithoutFeedback onPress={()=>navigation.openDrawer()}><View style={{paddingLeft:20}}><AntDesign name="menufold" color="#000000" size={30} /></View></TouchableWithoutFeedback>}}>
            <Stack.Screen name="TaxFilingStart" component={TaxFilingStart}/>
            <Stack.Screen name="FileTaxScreen" component={FileTaxScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}}/>
            <Stack.Screen name="DateInfo" component={DateInfo} />
            <Stack.Screen name="Esi" component={Esi}/>
            <Stack.Screen name="Gst" component={Gst}/>
            <Stack.Screen name="IncomeTax" component={IncomeTax}/>
            <Stack.Screen name="IndustryType" component={IndustryType}/>
            <Stack.Screen name="Penalties" component={Penalties}/>
            <Stack.Screen name="Updates" component={Updates}/>
            <Stack.Screen name="DocRequired" component={DocRequired}/>
        </Stack.Navigator>        
    )
}


export default FileTax;