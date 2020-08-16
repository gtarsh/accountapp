import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import {greenColor} from '../Common';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Logo=()=>{
    return(
            <View style={styles.container}>
           <Fontisto name="sentry" size={55} color="#ffffff"/>
            </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        width:150,
        height:150,
        alignSelf:'center',
        borderRadius:150/2,
        backgroundColor:greenColor,
        borderWidth:10,
        borderColor:'#ffffff'
    }
})

export default Logo;