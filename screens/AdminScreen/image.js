import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function image({ route, navigation }) {

    const { v } = route.params;
    let data = v.accounting;
    console.log(v)
    let accountingdata = data[data.length - 1]
    let gstdata = v.gst
    let datagst = gstdata[gstdata.length - 1]
    let penaltie = v.penalties
    let datapenaltie = penaltie[penaltie.length - 1]
    let vat = v.documentRequired
    console.log(vat)

    // let Image = v.documentRequired

    if (vat.length > 0) {
        // let Image = v.documentRequired
        let oneImage = vat[vat.length - 1]
        let ImageOnly = oneImage.document.split('./')
        let ImageLink = ImageOnly[ImageOnly.length - 1]
        console.log(ImageLink)
    }
    else {
        return (
            <View style={{width: '95%',justifyContent: 'center',alignItems:'center'}}>
                {/* <Text style={{ fontSize: 30, color: 'green' }}>No Data / User Need To Fill Complete Form</Text> */}
                <Image
                style={{height: "100%",width: "100%",resizeMode: 'contain'}}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <View style={{width: '95%',justifyContent: 'center',alignItems:'center'}}> 
            <Image
                style={{height: "100%",width: "100%",resizeMode: 'contain'}}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        // backgroundColor: 'blue'
        justifyContent: 'center',
        alignItems: 'center'
    }
})
