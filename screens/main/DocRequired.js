import React,{useState} from 'react';
import { View , Text ,StyleSheet , Image , ScrollView , Alert , TouchableOpacity} from 'react-native';
import { TextInput , Button} from 'react-native-paper';
import  { backend , validate ,getUserId} from '../../Common';
import Entypo from 'react-native-vector-icons/Entypo';
import {PERMISSIONS,RESULTS,checkMultiple,requestMultiple} from 'react-native-permissions';
import ImagePicker from 'react-native-image-picker';
import { StackActions } from '@react-navigation/native';
const DocRequired=({navigation})=>{
      const [uri,setImage]=useState('');
      const [ImageUri,setImageUri]=useState('');
      const [onOrBefore,setOnOrBefore]=useState('');
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
                      setImage2(response.data);
                    
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
                      setImageUri(response.data);
                   
                  }
            })

            
           }catch(err){
               console.error(err);
           }

        }
           }
    return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.heading}>File Your Tax Return</Text>
        <Text style={styles.headingText}>Document upload</Text>
        <View style={styles.padder}/>
        <TouchableOpacity style={styles.documentContainer} onPress={()=>selectPhoto()}>
            {
           (uri)?<Image source={{uri}} style={styles.image}/>:(
            <View style={styles.imgAlt}>
            <Entypo name="image" size={30}/>
            <Text style={styles.imgText}>select document pic</Text>     
            </View>
                )
            }
        </TouchableOpacity>

        <TextInput label="On or Before" mode="flat" style={styles.textField} value={onOrBefore} onChangeText={(onOrBefore)=>setOnOrBefore(onOrBefore)}/>       
        <View style={styles.padder}/>
        <Button mode="contained" color="#26B273" style={styles.button} onPress={async _=>{
            if(uri===''){
                return Alert.alert('Select an image to upload')
            }
                try{
                    navigation.push('Loading')
                    const userId=await getUserId();
                    const ImageDetails = {
                        userId: userId,
                        document: ImageUri,
                        onOrBefore :onOrBefore,
                    } 
                    
                    const result= await fetch('https://completeaccountingsolution.herokuapp.com/v1/document/saveDocument',{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                         },
                        body:JSON.stringify(ImageDetails)
                    });
                    // console.log(`result is ${JSON.stringify(result)}`);
                    // console.log(ImageDetails)
                    // console.log(result)
                    if(!result.error){
                        navigation.dispatch(StackActions.popToTop());                                                
                        return Alert.alert('Document uploaded succesfully');
                    }
                    else{
                        // navigation.goBack();
                        return Alert.alert(result.error)
                        console.log(result.error)
                    }
                    
                }catch(err){
                    console.error(err)
                }
               
            
           
            
            }}>
             <Text style={{color: 'white'}}>Upload Doc</Text></Button>
        <View style={styles.padder}/>
        <View style={styles.padder}/>
        <View style={styles.padder}/>
        </ScrollView>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    heading:{
        fontSize:30,
        paddingLeft:20,
        paddingTop:30,
        fontWeight:'bold'
    },
    headingText:{
        fontSize:20,
        paddingLeft:20,
        paddingTop:30,
        fontWeight:'bold'
    },
    formWrapper:{
        marginTop:30
    },  
    textField:{
        width:'90%',
        alignSelf:'center'
    },
    padder:{
        padding:10
    },
    button:{
        width:'90%',
        alignSelf:'center',
        padding:5
    },
    documentContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40
    },
    imgAlt:{
        width:'90%',
        justifyContent: 'center',
        alignItems:'center',
        height:300,
        backgroundColor:'#e2e2e2'
    },
    imgText:{
        fontSize:20
    },
    image:{
        width:'100%',
        height:300,
        resizeMode:'contain'
    }

});
export default DocRequired;