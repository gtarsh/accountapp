import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { TextInput, Button, Searchbar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { backend, validate, getUserId } from '../../Common';
import Loader from './Loader'
const UserList = ({ navigation }) => {

    useEffect(() => {
        fetchUsers()
    }, []);

    const [Data, setToData] = useState('');
    const [loader, updateLoader] = useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    async function fetchUsers() {
        try {
            updateLoader(true);
            const result = await backend('user', {})
            let response = result.data
            console.log(response)
            setToData(response)
            updateLoader(false);
        } catch (err) {
            console.error(err)
            return Alert.alert(err)
        }
    }

    return (
        <View style={styles.container}>
            {/* <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {(Data.length > 0) ? (
                    Data.map((v, k) => {
                        return (
                            <TouchableOpacity key={k} style={styles.MainView}
                                onPress={() => navigation.navigate('Details',{v})}
                            >
                                <View style={styles.UserBox}>
                                    <View style={styles.header}>
                                        <View style={styles.circle}>
                                            <FontAwesome name="user-circle" size={50} color="green" />
                                        </View>

                                        <View style={styles.titleTextContainer}>
                                            <View style={styles.titleTextLeftContainer}>
                                                <Text style={styles.Text0}>User Id:</Text>
                                            </View>
                                            <View style={styles.titleTextRightContainer}>
                                                <Text style={styles.Text}>{v._id}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.BodyContainer}>
                                        <View style={styles.BodyLeftContainer}>
                                            <View style={styles.IdViewLeft}>
                                                <Text style={styles.Text1}>User Name</Text></View>
                                        </View>
                                        <View style={styles.BodyRightContainer}>
                                            <View style={styles.PanViewRight}>
                                                <Text style={styles.Text}>{v.name}</Text></View>
                                        </View>
                                    </View>
                                    <View style={styles.BodyContainer}>
                                        <View style={styles.BodyLeftContainer}>
                                            <View style={styles.PanViewLeft}>
                                                <Text style={styles.Text1}>Pan No</Text></View>

                                        </View>
                                        <View style={styles.BodyRightContainer}>
                                            <View style={styles.EmailViewRight}>
                                                <Text style={styles.Text}>{v.panno}</Text></View>
                                        </View>
                                    </View>
                                    <View style={styles.BodyContainer}>
                                        <View style={styles.BodyLeftContainer}>
                                            <View style={styles.PanViewLeft}>
                                                <Text style={styles.Text1}>Phone No</Text></View>
                                        </View>
                                        <View style={styles.BodyRightContainer}>
                                            <View style={styles.PanViewRight}>
                                                <Text style={styles.Text}>{v.phoneNumber}</Text></View>
                                        </View>
                                    </View>
                                    <View style={styles.BodyContainer2}>
                                        <View style={styles.BodyLeftContainer}>
                                            <View style={styles.EmailViewLeft}>
                                                <Text style={styles.Text1}>Email </Text></View>
                                        </View>
                                        <View style={styles.BodyRightContainer}>
                                            <View style={styles.IdViewRight}>
                                                <Text style={styles.Text}>{v.email}</Text></View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })

                ) : (
                        <View style={styles.MainView}>
                            <Loader loader={loader} />
                        </View>

                    )}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    LoaderView: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    MainView: {
        marginTop: 50,
        height: 220,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    UserBox: {
        backgroundColor: 'white',
        width: '95%',
        height: 200,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    header: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingLeft: 20,
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTextContainer: {
        width: '80%',
        flexDirection: 'row',
    },
    titleTextLeftContainer: {

    },
    titleTextRightContainer: {
        width: '60%'
    },
    Text0: {
        fontSize: 18,
        color: 'green',
        paddingLeft: 30,
    },
    Text1: {
        fontSize: 18,
        color: 'green',
        paddingLeft: 10
    },
    BodyContainer: {
        width: '100%',
        height: '17%',
        flexDirection: 'row',
        
    },
    BodyContainer2: {
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
    },
    BodyLeftContainer: {
        width: '30%',
    },
    BodyRightContainer: {
        width: '70%',
    },
    Text: {
        fontSize: 18,
        color: '#777',
        paddingLeft: 10
    },
})
export default UserList;
