import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loader from '../AdminScreen/Loader'
import { backend, validate, getUserId, greenColor } from '../../Common';


const UserUpdates = ({ navigation }) => {

    useEffect(() => {
        fetchUsers()
    }, []);

    const [Data, setToData] = useState('');
    const [loader, updateLoader] = useState(false);

    async function fetchUsers() {
        try {
            updateLoader(true);
            const result = await backend('updates', {})
            let res2 = result.data
            setToData(res2)
            // console.log(Data)
            updateLoader(false);
        } catch (err) {
            console.error(err)
            // return Alert.alert(err)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {(Data.length > 0) ? (
                    Data.map((v, k) => {
                        return (
                            <View 
                            key={k}
                             style={styles.notificationContainer}>
                               <View style={styles.LeftContainer}>
                               
                               <View style={styles.notificationCircle}>
                                    <AntDesign name="notification" color={'#ffffff'} size={30} />
                                </View>
                               
                                
                               </View>
                               <View style={styles.RightContainer}>
                               <View style={styles.notificationData}>
                                    <View style={styles.headingContainer}>
                                        <Text style={styles.notificationheading}>New Update</Text>
                                    </View>
                                    <Text style={styles.notificationTime}>
                                        {v.createdAt}
                                    </Text>
                                    <Text style={styles.notificationDescription}>
                                        {v.update}
                                    </Text>
                                    
                                </View>
                               </View>
                            </View>
                        );
                    })

                ) : (
                        <View style={styles.LoaderView}>
                            <Loader loader={loader} />
                        </View>

                    )}


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    LoaderView: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: 300
    },
    notificationContainer: {
        flexDirection: 'row',
        padding: 20,
        paddingVertical: 30,
        borderRadius: 5,
        width: '90%',
        marginVertical: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderLeftColor: greenColor,
        borderLeftWidth: 3
    },
    LeftContainer:{
        width: '20%',
        // height: 20,
        // backgroundColor: 'blue'
    },
    RightContainer: {
        width: '80%',
        // backgroundColor: 'red'
    },
    notificationCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    notificationData: {
        marginLeft: 15
    },
    headingContainer: {
        width: '80%',
        // backgroundColor: 'red'
    },
    notificationheading: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%'
    },
    notificationDescription: {
        fontSize: 18,
        opacity: 0.6,
        marginVertical: 5,
        width: '90%'

    },
    notificationTime: {
        opacity: 0.4,
        fontSize: 16
    }

})

export default UserUpdates;