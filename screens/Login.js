import React,{useState} from 'react';
import { View , Text , StyleSheet , TouchableOpacity , Alert } from 'react-native';
import { CommonStyles , greenColor , saveToken , backend , validate , setUserId} from '../Common';
import {TextInput} from 'react-native-paper';
import CustomTouchable from '../components/CustomTouchable';
import Logo from '../components/Logo';
import { isTSCallSignatureDeclaration } from '@babel/types';
import AsyncStorage from '@react-native-community/async-storage';

const height='5%';

const Login=({navigation,loading,signedIn,signedIn1,signedIn2})=>{
    const [panno,setPanno] = useState('');
    const [password,setPassword]=useState('');

    return(
        <View style={styles.container}>
         
            <View style={styles.logoContainer}>
            <Logo/>
            </View>
           
            <View style={styles.loginTextContainer}>
            <Text style={styles.headingText}>Login to your account</Text>
            <View style={styles.actualContainer}>
                <View style={{height:'10%'}}/>
                <TextInput mode="outlined" label="Panno" placeholder="Enter your panno." style={styles.textInput} onChangeText={(panno)=>{setPanno(panno)}} value={panno}/>
                <View style={{height:height}}/>
                <TextInput mode="outlined" label="Password" placeholder="Enter your password" secureTextEntry={true} style={styles.textInput} onChangeText={(password)=>{setPassword(password)}} value={password} />
               
                <View style={{height:height}}/>
        
                    
                 <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={{fontSize:16,color:greenColor,}}>
                        Forgot Password?
                        </Text>

                    </TouchableOpacity>
                <CustomTouchable title="LOGIN" onPress={()=>{
                    validate({password},async ()=>{
                        if (panno === 'admin@gmail.com'){
                            try{
                                loading(true);
                            const result = await backend('admin/login','POST',{email:panno,password});
                            loading(false);
                             if(!result.error){
                                if(result.data.token){
                                    setUserId(result.data._id);
                                     saveToken(result.data.token);
                                     signedIn();
                                     signedIn1();
                                     }
                             }
                             else {
                                Alert.alert(result.error); 
                                 loading(false);
                             }
                            
                            }catch(err){
                                console.error(err);
                                Alert.alert('problem connecting to backend');
                            }
                        }
                        else{
                            try{
                                loading(true);
                            const result = await backend('user/login','POST',{panno,password});
                            loading(false);
                             if(!result.error){
                                if(result.data.token){
                                    setUserId(result.data._id);
                                     saveToken(result.data.token);
                                     signedIn();
                                     signedIn2();
                                     }
                             }
                             else {
                                Alert.alert(result.error); 
                                 loading(false);
                             }
                            
                            }catch(err){
                                console.error(err);
                                Alert.alert('problem connecting to backend');
                            }
                        }
                        
                    });
                   }}/>
                <View style={styles.signupLinkContainer}>
                    <Text style={{color:'grey'}}>Don't have an account? </Text>
                <TouchableOpacity style={styles.signupLink} onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{color:greenColor,fontWeight:'bold'}}>  Register here</Text>
                    </TouchableOpacity>
                 </View>
               
            </View>

            </View>
        </View>
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

export default React.memo(Login);