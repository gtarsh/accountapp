/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './screens/Login';
import Signup from './screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
const AuthStack=createStackNavigator();
const App = () => {
   return (
     
       <NavigationContainer>
         <AuthStack.Navigator initialRouteName="Login">
           <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
           <AuthStack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
         </AuthStack.Navigator>
       </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
 
});

export default App;
