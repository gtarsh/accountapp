import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity , ScrollView} from 'react-native';
import {CommonStyles,greenColor} from '../Common';
import {TextInput} from 'react-native-paper';
import CustomTouchable from '../components/CustomTouchable';
import Logo from '../components/Logo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const height='4%';

const Login=({navigation})=>{
    return(
        <View style={styles.container}>
        <ScrollView>
           
            <View style={styles.logoContainer}>
            <Logo/>
            </View>
           
            <View style={styles.loginTextContainer}>
            <Text style={styles.headingText}>Create New Account</Text>
            <View style={styles.actualContainer}>
                <View style={{height:'3%'}}/>
                <TextInput mode="outlined" label="Name" placeholder="Enter your email" style={styles.textInput}/>
                <View style={{height:height}}/>
                <TextInput mode="outlined" label="Email" placeholder="Enter your email" style={styles.textInput}/>
                <View style={{height:height}}/>
                <TextInput mode="outlined" label="Password" placeholder="Enter your password" secureTextEntry={true} style={styles.textInput}/>
                <View style={{height:height}}/>
                <TouchableOpacity onPress={()=>console.log('like i')} style={{width:'70%',height:'10%'}}>
            <View style={styles.button}>
            <Text style={styles.text}>REGISTER</Text>
            </View>
        </TouchableOpacity>
                <View style={styles.signupLinkContainer}>
                    <Text style={{color:'grey'}}>Already have an account? </Text>
                <TouchableOpacity style={styles.signupLink} onPress={()=>navigation.goBack()}>
                    <Text style={{color:greenColor,fontWeight:'bold'}}>Login here</Text>
                    </TouchableOpacity>
                 </View>
                <View style={{height:350}}>
                </View>
            </View>
            </View>
        
            </ScrollView>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <AntDesign name="arrowleft" size={30} color="#ffffff"/>
            </TouchableOpacity>
            </View>
       
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:greenColor
    },
    backButton:{
    
    position:'absolute',
    top:15,
    left:20
    },  
    logoContainer:{
        width:'100%',
        paddingVertical:100,
      justifyContent:'center'
    },
    loginTextContainer:{
        backgroundColor:'#F6F8F6',
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
             
            width:'70%',
            justifyContent:'space-between'
        },
        button:{
            backgroundColor:greenColor,
            borderRadius:50,
            alignItems:'center',
            padding:15
                },
        text:{
            color:'#ffffff',
            fontWeight:'bold',
            fontSize:18
            
        }


})
export default Login;