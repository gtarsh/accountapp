import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLaw from '../AdminScreen/AddLaw';
import AddNews from '../AdminScreen/AddNews';
import AdminDash from '../AdminScreen/AdminDash';
import UserList from '../AdminScreen/UserList'
import Updates from './Updates';
import Details from '../AdminScreen/Details'

const Stack = createStackNavigator();


const MiddleStack = ({ navigation, identification }) => {


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AdminDash" component={AdminDash} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="AddLaw" component={AddLaw} />
            <Stack.Screen name="AddNews" component={AddNews} />
            <Stack.Screen name="UserList" component={UserList} />
            <Stack.Screen name="Updates" component={Updates} />

        </Stack.Navigator >
    )
}

export default MiddleStack;