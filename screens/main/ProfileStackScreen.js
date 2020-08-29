import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileEdit from './ProfileEdit';
const ProfileStack = createStackNavigator();
const ProfileStackScreen = ()=>{
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Edit Profile" component={ProfileEdit}/>
        </ProfileStack.Navigator>
    )
} 

export default ProfileStackScreen;