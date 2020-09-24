import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { TextInput, Button, Searchbar } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-community/async-storage';


const height = '5%';

export default function AdminDash({ navigation }) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <View style={styles.MainView}>

                <View style={styles.MainFirstView}>

                    <TouchableOpacity style={styles.FirstViewLeft}
                        onPress={() => navigation.navigate('UserList')}
                    >
                        <FontAwesome5 name="users" size={30} color="green" />
                        <Text style={styles.imgText}>Users</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FirstViewRight}
                    onPress={() => navigation.navigate('AddNews')}      
                    >
                        <Ionicons name="newspaper" size={30} color="green" />
                        <Text style={styles.imgText}>News</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.MainSecondView}>

                    <TouchableOpacity style={styles.SecondViewLeft}
                    onPress={() => navigation.navigate('AddLaw')}
                    >
                        <Octicons name="law" size={30} color="green" />
                        <Text style={styles.imgText}>Law</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.SecondViewRight}
                    onPress={() => navigation.navigate('AddUpdates')}
                    >
                        <FontAwesome5 name="edit" size={30} color="green" />
                        <Text style={styles.imgText}>Updates</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.MainSecondView}>

                    <TouchableOpacity style={styles.SecondViewLeft}
                    onPress={() => navigation.navigate('QAuserList')}
                    >
                        <MaterialIcons name="question-answer" size={30} color="green" />
                        <Text style={styles.imgText}>Q And A</Text>
                    </TouchableOpacity>
                </View>
                {/* <Button mode="contained" style={styles.button} 
             onPress={() =>
             AsyncStorage.clear() 
            }
            >Log Out</Button> */}
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    MainView: {
        height: '50%',
        width: '100%',
        paddingTop: 20
    },
    MainFirstView: {
        width: '95%',
        height: '50%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    FirstViewLeft: {
        width: "42%",
        height: '85%',
        borderRadius: 20,
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FirstViewRight: {
        width: "42%",
        height: '85%',
        borderRadius: 20,
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    MainSecondView: {
        width: '95%',
        height: '50%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    SecondViewLeft: {
        width: "42%",
        height: '85%',
        borderRadius: 20,
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SecondViewRight: {
        width: "42%",
        height: '85%',
        borderRadius: 20,
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgText: {
        fontSize: 25,
        color: '#555'
    },
    imgText2: {
        fontSize: 30,
        color: '#555'
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        padding: 5
    },
})
