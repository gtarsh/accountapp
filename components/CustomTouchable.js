import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import {greenColor} from '../Common';
const CustomTouchable=({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{width:'70%',height:'10%'}}>
            <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:greenColor,
        width:'100%',
        marginTop:20,
    
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50

        
    },
    text:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:0.5
    }
})

export default CustomTouchable;