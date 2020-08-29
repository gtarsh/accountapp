import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity , ScrollView} from 'react-native';
import {CommonStyles,greenColor} from '../Common';
import {TextInput} from 'react-native-paper';
import CustomTouchable from '../components/CustomTouchable';
import Logo from '../components/Logo';
const height='5%';

const Login=({navigation})=>{
    return(
        <ScrollView contentContainerStyle={[{height:'100%'},styles.container]} >
            
            <View style={styles.logoContainer}>
            <Logo/>
            </View>

            <View style={styles.loginTextContainer}>
            <Text style={styles.headingText}>Create New Account</Text>
            <View style={styles.actualContainer}>
                <View style={{height:'5%'}}/>
                <TextInput mode="outlined" label="Name" placeholder="Enter your email" style={styles.textInput}/>
                <View style={{height:height}}/>
                <TextInput mode="outlined" label="Email" placeholder="Enter your email" style={styles.textInput}/>
                <View style={{height:height}}/>
                <TextInput mode="outlined" label="Password" placeholder="Enter your password" secureTextEntry={true} style={styles.textInput}/>
                <View style={{height:height}}/>
                <CustomTouchable title="REGISTER" onPress={()=>console.log('Register button pressed')}/>
                <View style={styles.signupLinkContainer}>
                    <Text style={{color:'grey'}}>Already have an account? </Text>
                <TouchableOpacity style={styles.signupLink} onPress={()=>navigation.goBack()}>
                    <Text style={{color:greenColor,fontWeight:'bold'}}>Login here</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            </View>
        
            </ScrollView>
       
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:greenColor
    },
    logoContainer:{
        width:'100%',
        height:'30%',
      justifyContent:'center'
    },
    loginTextContainer:{
        backgroundColor:'#F6F8F6',
        position:'absolute',
        bottom:0,
        height:'65%',
        width:'100%',
        borderTopLeftRadius:60,
        borderTopRightRadius:60
    },
    headingText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        letterSpacing:1,
        marginTop:20,
        marginBottom:20,
        color:'#4B4E5A'
        },
        actualContainer:{
            backgroundColor:'#ffffff',
            height:'100%',
            borderTopLeftRadius:60,
            borderTopRightRadius:60,
            alignItems:'center'
        },
        textInput:{
            width:'70%'
        },
        forgotPassword:{
           
            width:'70%',
            alignItems:'flex-end',

        },
        signupLinkContainer:{
           
            flexDirection:'row',
            position:'relative',
            top:'10%',
            width:'70%',
            justifyContent:'space-between'
        }


})
export default Login;