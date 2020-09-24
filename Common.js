import { StyleSheet , Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export const greenColor="#26B273";
export let userId='';
export const baseUrl='https://completeaccountingsolution.herokuapp.com/v1/'
export const CommonStyles=StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export const setUserId=async id=>await AsyncStorage.setItem('userId',id);
export const getUserId=async id=>await AsyncStorage.getItem('userId');
export const checkToken=async ()=>{
   try{
     const token=await AsyncStorage.getItem('userToken');
     if(token){
        return 1;
    }
    else{
        return -1
    }
   }catch(error){
       console.error(error);
   }
}

export const saveToken= async (token)=>{
    try{
        await AsyncStorage.setItem('userToken',token);
    } catch(error){
        console.error(error);
    }
    
}

export const backend=(endpoint,method,data)=>{
    if(method==='POST'){
         return fetch(`${baseUrl}${endpoint}`,{
             method:'POST',
             headers:{
                'Content-Type':'application/json'
             },
             body:JSON.stringify(data)
         }).then((response)=>response.json(console.log(`${baseUrl}${endpoint}`))).catch((error)=>console.error(error));
    }
    if(method==='POST2'){
        return fetch(`${baseUrl}${endpoint}`,{
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((response)=>response.json(console.log(`${baseUrl}${endpoint}`))).catch((error)=>console.error(error));
   }
    if(method==='PUT'){
        return fetch(`${baseUrl}${endpoint}`,{
            method:'PUT',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((response)=>response.json()).catch((error)=>console.error(error));
   }
    else{
        return fetch(`${baseUrl}${endpoint}`).then((response)=>response.json(console.log(`${baseUrl}${endpoint}`))).catch((error)=>console.error(error));
    }
}

export const validate=(data,callback)=>{
    const emailexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for(const field in data){
        if(data[field]==='' || data[field]===null){
            return Alert.alert(`All fields should be filled`);
        }
    }
    if(data.email){
        if(!emailexp.test(data.email)){
            
            return Alert.alert('invalid email')
     }
    }
    return callback();
}
