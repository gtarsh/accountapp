import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import Profile from './Profile';
import DateInfo from './DateInfo'
import UserUpdates from './UserUpdates';
import FileTax from './FileTax'
import LawScreen from './LawScreen'
import { greenColor } from '../../Common';

const Tabs=createMaterialBottomTabNavigator();
const HomeWithTabs=({navigation})=>{
    return(
        <Tabs.Navigator barStyle={{backgroundColor:greenColor}} activeColor="white" inactiveColor="#e2e2e2">
            <Tabs.Screen  name="FileTax" component={FileTax} options={{title:'Home',tabBarIcon:({focused,color})=><MaterialIcons name="home" size={27} color={color}/>}}/>
            <Tabs.Screen  name="NewsScreen" component={NewsScreen} options={{title:'News',tabBarIcon:({focused,color})=><MaterialCommunityIcons name="newspaper" size={24} color={color}/>}}/>
            <Tabs.Screen  name="LawScreen" component={LawScreen} options={{title:'Laws',tabBarIcon:({focused,color})=><Octicons name="law" size={24} color={color}/>}}/>
            <Tabs.Screen name="Updates" component={UserUpdates} options={{tabBarIcon:({focused,color})=><FontAwesome5 name="edit" size={24} color={color}/>}}/>
            <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon:({focused,color})=><FontAwesome5 name="user-alt" color={color} size={24}/>}}/>
        </Tabs.Navigator>
    )
}

export default HomeWithTabs;