import React,{useState} from 'react';
import { View , Text , StyleSheet , TouchableOpacity , Image ,Platform , Alert} from 'react-native';
import {greenColor} from '../Common';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ImagePicker from 'react-native-image-picker';
import {PERMISSIONS,RESULTS,checkMultiple,requestMultiple} from 'react-native-permissions';
const ProfilePhoto=({getUri})=>{
    const [image,setImage]=useState('');
   async function selectPhoto(){
        if(Platform.OS==='ios'){
            try{
                const result= await checkMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.PHOTO_LIBRARY]);
                for(const permission in result){
                    if(permission===RESULTS.BLOCKED){
                        return Alert.alert('Permission blocked','please allow permissions for camera and photo library from settings to take picture & pick one from photos and try again');
                    }
                }
                const status=await requestMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.PHOTO_LIBRARY]);
            for(const permission in status){
                if(status[permission]===RESULTS.BLOCKED){
                    return Alert.alert('Permission blocked','please allow permissions for camera and files from settings to take picture and upload photo from gallery and try again');
                }
                if(status[permission]===RESULTS.DENIED){
                    return Alert.alert('Permission denied','please allow permissions for camera and files from settings to take picture and upload photo from gallery and try again');
                }
            }     
            
            const options={
                title:'select a profile picture',
                storageOptions:{
                 skipBackup:true,
                }
            }
    
            ImagePicker.showImagePicker(options,(response)=>{
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    Alert.alert('Error',response.error);
                  } 
                  else{
                      setImage(response.uri);
                      getUri(response.uri);
                  }
            })

           
            }catch(err){
                console.error(err);
            }
        }
        if(Platform.OS==='android'){
           try{
            const result = await checkMultiple([PERMISSIONS.ANDROID.CAMERA,PERMISSIONS.ANDROID.PHOTO_LIBRARY]);     
            for(const permission in result){
                if(result[permission]===RESULTS.BLOCKED){
                    return Alert.alert('Permission blocked','please allow permissions for camera and files from settings to take picture and upload photo from gallery and try again');
                }
            }
            const status=await requestMultiple([PERMISSIONS.ANDROID.CAMERA,PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
            for(const permission in status){
                if(status[permission]===RESULTS.BLOCKED){
                    return Alert.alert('Permission blocked','please allow permissions for camera and files from settings to take picture and upload photo from gallery and try again');
                }
                if(status[permission]===RESULTS.DENIED){
                    return Alert.alert('Permission denied','please allow permissions for camera and files from settings to take picture and upload photo from gallery and try again');
                }
            }
          
            const options={
                title:'select a profile picture',
                storageOptions:{
                 skipBackup:true,
                }
            }
    
            ImagePicker.showImagePicker(options,(response)=>{
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    Alert.alert('Error',response.error);
                  } 
                  else{
                      setImage(response.uri);
                      getUri(response.uri);
                  }
            })

            
           }catch(err){
               console.error(err);
           }

        }
           }
    return( 
        <TouchableOpacity onPress={()=>selectPhoto()}>
            <View style={styles.container}>
            {
                (image!=='')?(
                <Image source={{uri:image}} style={styles.image}/>):(
                <>
                <Fontisto name="sentry" size={55} color="#ffffff"/>
                <Text style={styles.text}>upload an image</Text>
                </>)
            }    
            </View>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        width:150,
        height:150,
        alignSelf:'center',
        borderRadius:150/2,
        backgroundColor:greenColor,
        borderWidth:10,
        borderColor:'#ffffff'
    },
    text:{
        color:'#ffffff',
        marginTop:5,
        fontSize:12,
        fontWeight:'bold'
    },
    image:{
        width:140,
        height:140,
        borderRadius:140/2,
    }
})

export default ProfilePhoto;