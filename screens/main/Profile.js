import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { backend, validate, getUserId, greenColor } from '../../Common'; import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import Loader from '../AdminScreen/Loader';

const Profile = ({ navigation }) => {
    useEffect(() => {
        fetchUsers()
    }, []);

    const [Data, setToData] = useState('');
    const [loader, updateLoader] = useState(false);

    async function fetchUsers() {
        try {
            updateLoader(true);
            const userId=await getUserId();
            const result = await backend(`user/${userId}`, {})
            let res2 = result.data
            // console.log(result)
            setToData(res2)
            updateLoader(false);
        } catch (err) {
            // console.error(err)
            return Alert.alert(err)
        }
    }

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={styles.container}>
                    <View style={styles.ProfileContentWrapper}>

                        <View style={styles.profileCircle}>
                            <AntDesign name="user" color="#ffffff" size={55}></AntDesign>
                        </View>
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.headingText}>
                                {Data.name}
                                            </Text>
                            <Text>
                                {Data.phoneNumber}
                                        </Text>
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
                                {Data.name}
                    </Text>
                            </View>
                            <View style={styles.listItem}>
                                <Text style={styles.subHeading}>
                                    Email
                    </Text>
                                <Text style={styles.text}>
                                {Data.email}
                    </Text>
                            </View>
                            <View style={styles.listItem}>
                                <Text style={styles.subHeading}>
                                    Mobile No.
                    </Text>
                                <Text style={styles.text}>
                                {Data.phoneNumber}
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
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.floatingActionButton} onPress={() => navigation.navigate('ProfileStackScreen')}>
                <View>
                    <Foundation name="pencil" color="#ffffff" size={30}></Foundation>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingActionButton: {
        position: 'absolute',
        bottom: 55,
        right: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: greenColor,
        zIndex: 100
    },

    ProfileContentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 55,
        paddingTop: '15%',
        borderBottomWidth: 2,
        paddingBottom: 50,
        borderColor: '#dddddd',
        // backgroundColor: "red"
    },
    profileCircle: {
        backgroundColor: greenColor,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    profileTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 29,
        fontWeight: 'bold'
    },
    profileOverviewWrapper: {
        alignItems: 'center',
        paddingTop: 30
    },
    textFieldsContainer: {
        width: '80%',
        paddingTop: 40
    },
    subHeading: {
        opacity: 0.5,
        fontSize: 25
    },
    listItem: {
        borderBottomWidth: 1,
        borderColor: '#dddddd',
        marginBottom: 20
    },
    text: {

        fontSize: 20,
        marginVertical: 20
    }
});
export default Profile;