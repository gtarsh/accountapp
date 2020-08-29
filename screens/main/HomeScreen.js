import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { CommonStyles } from '../../Common';
const HomeScreen=({navigation})=>{
    return(
        <View style={CommonStyles.center}>
            <Text>hi this is HomeScreen</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
export default HomeScreen;