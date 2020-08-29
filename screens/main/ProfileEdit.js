import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';
const ProfileEdit = ({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Sample')}>
            <Text>
                profile edit page
            </Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default ProfileEdit;