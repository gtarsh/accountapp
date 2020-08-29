/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';

import Login from './screens/Login';
import Signup from './screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomeWithTabs from './screens/main/HomeWithTabs';
import {greenColor} from './Common';
import ProfileStackScreen from './screens/main/ProfileStackScreen';
const AuthStack=createStackNavigator();
const Drawer=createDrawerNavigator();

const DrawerHome=({navigation})=>{
  const MainStack=createStackNavigator();
  return(
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeWithTabs}  options={{headerTitle:({children})=><Fontisto name="sentry" size={30} color={greenColor}/>,headerLeft:()=><TouchableWithoutFeedback onPress={()=>navigation.openDrawer()}><View style={{paddingLeft:20}}><AntDesign name="menufold" color="#000000" size={30} /></View></TouchableWithoutFeedback>}}/>
      <MainStack.Screen name="ProfileStackScreen" component={ProfileStackScreen} options={{headerShown:false}}/>
    </MainStack.Navigator>
  )
}
const App = () => {
  const [isSignedIn,setIsSignedIn]=useState(true);
   return (
     
       <NavigationContainer>
         {
            isSignedIn?(
              <>
              <Drawer.Navigator>
                <Drawer.Screen name="Home" component={DrawerHome}/>
              </Drawer.Navigator>
             
              </>
            ):(
                <>
          <AuthStack.Navigator initialRouteName="Login">
           <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
           <AuthStack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
         </AuthStack.Navigator>
          
                </>
              )
         }
         
       </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
 
});

export default App;
