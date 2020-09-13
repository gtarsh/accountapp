import React,{useState} from 'react';
import { View , Text , StyleSheet , TouchableOpacity , ScrollView , Alert} from 'react-native';
import Logo from '../../components/Logo';
import {greenColor , validate , backend} from '../../Common';
import {TextInput,Button} from 'react-native-paper';
import ProfilePhoto from '../../components/ProfilePhoto';
const ProfileEdit = ({navigation})=>{
    const [name,setName]=useState('');
    const [panno,setPanno]=useState('');
    const [email,setEmail]=useState('');
    const [mobileno,setMobileNo]=useState('');
    const [password,setPassword]=useState('');
    const [uri,setUri]=useState('');
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.logoContainer}>
             <TouchableOpacity>
                <ProfilePhoto getUri={(uri)=>{setUri(uri)}}/>
             </TouchableOpacity>
            
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.fieldsContainer}>
                <TextInput mode="outlined" label="Name" style={styles.textField} onChangeText={(name)=>setName(name)} value={name}/>
                <TextInput mode="outlined" label="Panno" style={styles.textField} onChangeText={(panno)=>setPanno(panno)} value={panno}/>

                <TextInput mode="outlined" label="Email" style={styles.textField} onChangeText={(email)=>setEmail(email)} value={email}/>
                <TextInput mode="outlined" label="Mobile No." style={styles.textField} onChangeText={(mobileno)=>setMobileNo(mobileno)} value={mobileno}/>
                <TextInput mode="outlined" label="Password" style={styles.textField} onChangeText={(password)=>setPassword(password)} value={password}/>
                    </View>
                    <Button style={styles.submitButton} mode="contained" onPress={() =>
                    {
                        validate({name,panno,email,mobileno,password},async ()=>{
                            if(!uri==''){
                                const result=await backend('user/editUser/5f5712ac086ca30024d398c8','PUT',{name,panno,email,phoneNumber:mobileno,password,image:uri});
                                console.log(`result with uri ${result.image}`);
                                if(result.response===false){
                                    if(result.error){
                                        return Alert.alert(result.error);
                                    }
                                    else{
                                        return Alert.alert(result.response.msg);
                                    }
                                
                                }
                                else if(result.response===true){
                                    return Alert.alert(result.message);
                                }
                            }else{
                                const result=await backend('user/editUser/5f5712ac086ca30024d398c8','PUT',{name,panno,email,phoneNumber:mobileno,password});
                                    console.log(uri);
                                 console.log(`result without uri ${result}`)
                                if(result.response===false){
                                    if(result.error){
                                        return Alert.alert(result.error);
                                    }
                                    else{
                                        return Alert.alert(result.response.msg);
                                    }
                                    }
                                    else if(result.response===true){
                                        return Alert.alert(result.message);
                                    }
                            }
                                
                        })
                    }}>
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