import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLaw from '../AdminScreen/AddLaw';
import AddNews from '../AdminScreen/AddNews';
import AdminDash from '../AdminScreen/AdminDash';
import UserList from '../AdminScreen/UserList'
import HomeWithTabs from '../main/HomeWithTabs';
// import AddUpdates from '../AdminScreen/AddUpdates'
import Updates from '../main/Updates'
import Details from '../AdminScreen/Details'
const Stack = createStackNavigator();

const AdminStack = ({ navigation }) => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Details" component={Details} />
            {/* <Stack.Screen name="AddLaw" component={AddLaw} />
            <Stack.Screen name="AddNews" component={AddNews} />
            <Stack.Screen name="UserList" component={UserList} />
            <Stack.Screen name="Updates" component={Updates} /> */}
        </Stack.Navigator >
    )
}

export default AdminStack;
