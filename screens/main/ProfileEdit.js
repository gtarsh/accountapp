import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity , ScrollView } from 'react-native';
import Logo from '../../components/Logo';
import {greenColor} from '../../Common';
import {TextInput,Button} from 'react-native-paper';
const ProfileEdit = ({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.logoContainer}>
             <Logo/>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.fieldsContainer}>
                <TextInput mode="outlined" label="Full Name" style={styles.textField}/>
                <TextInput mode="outlined" label="Email" style={styles.textField}/>
                <TextInput mode="outlined" label="Mobile No." style={styles.textField}/>
                <TextInput mode="outlined" label="Address" style={styles.textField}/>
                    </View>
                    <Button style={styles.submitButton} mode="contained" onPress={() => console.log('Pressed')}>
                         Submit
                    </Button>
               
                    <View style={styles.padder}>
                 </View>
                 
                </View>
            </ScrollView>
        </View>
    )
} 

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    logoContainer:{
        justifyContent:'center',
        width:'100%',
        paddingTop:'23%',
        paddingBottom:'23%',
        backgroundColor:greenColor
    },
    mainContainer:{   
        alignItems:'center',
        paddingTop:50,    
        backgroundColor:'#ffffff',
        width:'90%',
        alignSelf:'center',
        position:'relative',
        bottom:25,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%'   
    },
    padder:{
    backgroundColor:'#ffffff',
    paddingVertical:50,
    width:'90%'
    },
    fieldsContainer:{
     width:'80%'
    },
    textField:{
        width:'100%',
        marginBottom:30
    },
    submitButton:{
        marginTop:10,
       
        width:'80%'
    }
})
export default ProfileEdit;