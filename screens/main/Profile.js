import React from 'react';
import { View , Text , StyleSheet, TouchableOpacity , ScrollView} from 'react-native';
import {greenColor} from '../../Common';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
const Profile = ({navigation})=>{
    return(
        <View style={styles.container}>    
            <TouchableOpacity style={styles.floatingActionButton}>
           <View>
            <Foundation name="pencil" color="#ffffff" size={30}></Foundation>
           </View>
           </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
            
        <View style={styles.ProfileContentWrapper}>
            <View style={styles.profileCircle}>
                <AntDesign name="user" color="#ffffff" size={55}></AntDesign>
            </View> 
            <View style={styles.profileTextContainer}>
                <Text style={styles.headingText}>John Doe</Text>
                <Text>+918976527679</Text>
            </View>
           
        </View>
        <View style={styles.profileOverviewWrapper}>
                <Text style={styles.headingText}>Profile Overview</Text>
                <View style={styles.textFieldsContainer}>
               <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                        Full Name
                    </Text>
                    <Text style={styles.text}>
                       John Doe
                    </Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                        Email 
                    </Text>
                    <Text style={styles.text}>
                      johndoe@gmail.com
                    </Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                       Mobile No.
                    </Text>
                    <Text style={styles.text}>
                    +918976527679
                    </Text>
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                    Address
                    </Text>
                    <Text style={styles.text}>
                    Warsaw
                    </Text>
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                       Mobile No.
                    </Text>
                    <Text style={styles.text}>
                    +918976527679
                    </Text>
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                       Mobile No.
                    </Text>
                    <Text style={styles.text}>
                    +918976527679
                    </Text>
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.subHeading}>
                       Mobile No.
                    </Text>
                    <Text style={styles.text}>
                    +918976527679
                    </Text>
                </View>
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
    floatingActionButton:{
        position:'absolute',
        bottom:55,
        right:45,
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:greenColor,
        zIndex:10
    },

    ProfileContentWrapper:{
     flexDirection:'row',
     justifyContent:'space-between',
     paddingHorizontal:55,
     paddingTop:'15%',
     borderBottomWidth:2,
     paddingBottom:50,
     borderColor:'#dddddd'
    },
    profileCircle:{
        backgroundColor:greenColor,
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    profileTextContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    headingText:{
        fontSize:29,
        fontWeight:'bold'
    },
    profileOverviewWrapper:{
        alignItems:'center',
        paddingTop:30
    },
    textFieldsContainer:{
        width:'80%',
        paddingTop:40
    },
   subHeading:{
       opacity:0.5,
        fontSize:25
    },
    listItem:{
        borderBottomWidth:1,
        borderColor:'#dddddd',
        marginBottom:20
    },
    text:{
       
        fontSize:20,
        marginVertical:20
    }
});
export default Profile;