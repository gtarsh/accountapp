import React,{useState} from 'react';
import { View , Text , StyleSheet , ScrollView } from 'react-native';
import {greenColor} from '../../Common';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Notifications= ({navigation})=>{
    const [data,setData]=useState({read:true});
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.notificationContainer}>
                <View style={styles.notificationCircle}>
                <AntDesign name="notification" color={'#ffffff'}  size={30}/>
                </View>
                <View style={styles.notificationData}>
                    <View style={styles.headingContainer}>
                    <Text style={styles.notificationheading}>This is notification title</Text>
                    </View>
                    <Text style={styles.notificationDescription}>
                        this is description of the notification
                    </Text>
                    <Text style={styles.notificationTime}>
                        1 day ago
                    </Text>    
                </View>

                 <View style={styles.notificationData}>
                    <Text style={styles.notificationheading}>This is notification title</Text>
                    <Text style={styles.notificationDescription}>
                        this is description of the notification
                    </Text>
                    <Text style={styles.notificationTime}>
                        1 day ago
                    </Text>    
                </View>
                
            </View>

            <View style={[styles.notificationContainer,{borderLeftColor:(data.read?'#ffffff':greenColor)}]}>
                <View style={styles.notificationCircle}>
                <AntDesign name="notification" color={'#ffffff'}  size={30}/>
                </View>
                <View style={styles.notificationData}>
                    <Text style={styles.notificationheading}>This is notification title</Text>
                    <Text style={styles.notificationDescription}>
                        this is description of the notification
                    </Text>
                    <Text style={styles.notificationTime}>
                        1 day ago
                    </Text>    
                </View>

                 <View style={styles.notificationData}>
                    <Text style={styles.notificationheading}>This is notification title</Text>
                    <Text style={styles.notificationDescription}>
                        this is description of the notification
                    </Text>
                    <Text style={styles.notificationTime}>
                        1 day ago
                    </Text>    
                </View>
                
            </View>

            <View style={styles.notificationContainer}>
                <View style={styles.notificationCircle}>
                <AntDesign name="notification" color={'#ffffff'}  size={30}/>
                </View>
                <View style={styles.notificationData}>
                    <Text style={styles.notificationheading}>This is notification title</Text>
                    <Text style={styles.notificationDescription}>
                        this is description of the notification
                    </Text>
                    <Text style={styles.notificationTime}>
                        1 day ago
                    </Text>    
                </View>

                 <View style={styles.notificationData}>
                    <Text style={styles.notificationheading}>This is notification title</Text>
                    <Text style={styles.notificationDescription}>
                        this is description of the notification
                    </Text>
                    <Text style={styles.notificationTime}>
                        1 day ago
                    </Text>    
                </View>
                
            </View>

            
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    notificationContainer:{
        flexDirection:'row',
        padding:20,
        paddingVertical:30,
        borderRadius:5,
        width:'90%',
        marginVertical:20,
        alignSelf:'center',
        backgroundColor:'#ffffff',
        borderLeftColor:greenColor,
        borderLeftWidth:3
    },
    notificationCircle:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:'#e5e5e5',
        justifyContent:'center',
        alignItems:'center'
    },
    notificationData:{
        marginLeft:15
    },
    headingContainer:{
        
        width:'90%'
    },
    notificationheading:{
        fontSize:20,
        fontWeight:'bold',
        
        width:'100%'
    },
    notificationDescription:{
        fontSize:18,
        opacity:0.6,
        marginVertical:5,
        width:'90%'
    },
    notificationTime:{
        opacity:0.4,
        fontSize:16
    }

})

export default Notifications;