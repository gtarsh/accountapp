import React from 'react';
import { View, StyleSheet, Modal, Dimensions, ActivityIndicator, Button, Image } from 'react-native';
import { BallIndicator } from 'react-native-indicators';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

const Loader = (props) => {
    if (props.loader === true) {
        return (
            <View style={styles.overlay} >
                < BallIndicator color='#26B273' />
            </View>
        )
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    overlay: {
        width: "100%",
        height: "100%",
        marginTop: 20,
        // borderRadius: 20,
        // backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'absolute',  
        // backgroundColor: 'red',      
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Loader;