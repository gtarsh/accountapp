import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { CommonStyles } from '../../Common';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen=({navigation})=>{
    
    return(
        <View style={CommonStyles.center}>
            <Text>hi this is HomeScreen</Text>
            <Button mode="contained" style={styles.button} 
             onPress={() =>
                //  navigation.navigate('Login') ||
             AsyncStorage.clear()}
            >Log Out</Button>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        padding: 5
    },
})
export default HomeScreen;