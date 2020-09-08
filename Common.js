import { StyleSheet , Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export const greenColor="#26B273";
export const baseUrl='https://completeaccountingsolution.herokuapp.com/v1/'
export const CommonStyles=StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

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
   console.log(data);
    if(method==='POST'){
         return fetch(`${baseUrl}${endpoint}`,{
             method:'POST',
             headers:{
                'Content-Type':'application/json'
             },
             body:JSON.stringify(data)
         }).then((response)=>response.json()).catch((error)=>console.error(error));
    }
    else{
        return fetch(`${baseUrl}${endpoint}`).then((response)=>response.json()).catch((error)=>console.error(error));
    }
}