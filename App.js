/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import FileTax from './screens/main/FileTax';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomeWithTabs from './screens/main/HomeWithTabs';
import { greenColor } from './Common';
import ProfileStackScreen from './screens/main/ProfileStackScreen';
import LoadingScreen from './screens/LoadingScreen';
import { checkToken } from './Common';
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

import MiddleStack from './screens/main/MiddleStack'

const DrawerHome = ({ navigation }) => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeWithTabs} options={{ headerTitle: ({ children }) => <Fontisto name="sentry" size={30} color={greenColor} />, headerLeft: () => <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}><View style={{ paddingLeft: 20 }}><AntDesign name="menufold" color="#000000" size={30} /></View></TouchableWithoutFeedback> }} />
      <MainStack.Screen name="ProfileStackScreen" component={ProfileStackScreen} options={{ headerShown: false }} />
    </MainStack.Navigator>
  )
}









const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isSignedIn2, setIsSignedIn2] = useState(true);

  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
    checkToken().then(result => {
      if (result === 1) {
        console.log(result)
        setIsSignedIn(true);
        setIsLoading(false);
      }
      else if (result === -1) {
        setIsLoading(false);
      }
    })
  }, [])


  if (isLoading === true) {
    return <LoadingScreen />
  }
  return (

    <NavigationContainer>
      {
        isSignedIn ? (
          <NavigationContainer independent={true}>
            {isSignedIn2 ? (
              <>
                <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={MiddleStack} />
                  {/* <Drawer.Screen name="TaxReturn" component={FileTax} options={{ title: 'Tax Return' }} /> */}
                </Drawer.Navigator>

              </>

            ) : (
                <>
                  <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={DrawerHome} />
                    <Drawer.Screen name="TaxReturn" component={FileTax} options={{ title: 'Tax Return' }} />
                  </Drawer.Navigator>
                </>
              )}
          </NavigationContainer>
        ) : (
            <>
              <AuthStack.Navigator initialRouteName="Login">
                <AuthStack.Screen name="Login" options={{ headerShown: false }}>
                  {props => <Login {...props} loading={(status) => setIsLoading(status)}
                    signedIn={() => setIsSignedIn(true)}
                    signedIn1={() => setIsSignedIn2(true)}
                    signedIn2={() => setIsSignedIn2(false)}
                  />}
                </AuthStack.Screen>
                <AuthStack.Screen name="Signup" options={{ headerShown: false }}>
                  {props => <Signup {...props} loading={(status) => setIsLoading(status)} />}
                </AuthStack.Screen>
              </AuthStack.Navigator>
            </>
          )
      }

    </NavigationContainer>

  );
};


export default App;