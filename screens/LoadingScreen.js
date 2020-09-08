import React from 'react';
import { View , Text , StyleSheet , ActivityIndicator} from 'react-native';

const LoadingScreen = ()=>{
return <View style={styles.container}>
        <ActivityIndicator size={80} color="#00ff00"/>
        </View>
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LoadingScreen;