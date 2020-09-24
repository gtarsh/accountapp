import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
export default function Details({ route, navigation }) {

    const { v } = route.params;
    let data = v.accounting;
    console.log(data)
    let accountingdata = data[data.length - 1]
    let gstdata = v.gst
    let datagst = gstdata[gstdata.length - 1]
    let penaltie = v.penalties
    let datapenaltie = penaltie[penaltie.length - 1]

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.padder} />
                <View style={styles.MainView}>
                    {(data.length > 0) ? (
                        // data.map(() => {
                        //     return (
                                (gstdata.length > 0) ? (
                                    // gstdata.map((v, l) => {
                                    //     return (
                                            (penaltie.length > 0) ? (
                                                // penaltie.map((v,m ) => {
                                                //     return (
                                                        <View key={l} style={styles.MainView}>
                                                            <View style={styles.padder} />
                                                            <View style={styles.NameView}>
                                                                <View style={styles.LeftView}>
                                                                    <Text style={styles.Text0}>Name</Text>
                                                                </View>
                                                                <View style={styles.RightView}>
                                                                    <Text style={styles.Text1}>{v.name}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.CompanyView}>
                                                                <View style={styles.LeftView}>
                                                                    <Text style={styles.Text0}>Company </Text>
                                                                </View>
                                                                <View style={styles.RightView}>
                                                                    <Text style={styles.Text1}>{v.companyName}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.AccountingView}>
                                                                <View style={styles.TopView}>
                                                                    <Text style={styles.Text0}>Accounting</Text>
                                                                </View>
                                                                <View style={styles.BottomView}>
                                                                    <View style={styles.BottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Stock Purchases</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{accountingdata.stockPurchases}</Text></View>
                                                                    </View>
                                                                    <View style={styles.BottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Expenses</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{accountingdata.expenses}</Text></View>
                                                                    </View>
                                                                    <View style={styles.BottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Gross Profit</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{accountingdata.grossProfit}</Text></View>
                                                                    </View>
                                                                    <View style={styles.BottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Net Profit</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{accountingdata.netProfit}</Text></View>
                                                                    </View>
                                                                    <View style={styles.BottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Cash Balance</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{accountingdata.cashBalance}</Text></View>
                                                                    </View>
                                                                    <View style={styles.BottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Bank Balance</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{accountingdata.bankBalance}</Text></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.GSTView}>
                                                                <Text style={styles.Text0}>GST</Text>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.GstSalesView}>
                                                                <View style={styles.GstSalesTopView}>
                                                                    <Text style={styles.Text0}>GST Sales Roported</Text>
                                                                </View >
                                                                <View style={styles.GstSalesBottomView}>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.salesReported.igst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.salesReported.cgst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.salesReported.sgst}</Text></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.GstSalesView}>
                                                                <View style={styles.GstSalesTopView}>
                                                                    <Text style={styles.Text0}>GST Purchases</Text>
                                                                </View >
                                                                <View style={styles.GstSalesBottomView}>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.purchases.igst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.purchases.cgst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.purchases.sgst}</Text></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.GstSalesView}>
                                                                <View style={styles.GstSalesTopView}>
                                                                    <Text style={styles.Text0}>GST Electronic Cash Ledger</Text>
                                                                </View >
                                                                <View style={styles.GstSalesBottomView}>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.electronicCashLedger.igst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.electronicCashLedger.cgst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.electronicCashLedger.sgst}</Text></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.GstSalesView}>
                                                                <View style={styles.GstSalesTopView}>
                                                                    <Text style={styles.Text0}>GST Electronic Credit Ledger</Text>
                                                                </View >
                                                                <View style={styles.GstSalesBottomView}>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.electronicCreditLedger.igst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.electronicCreditLedger.cgst}</Text></View>
                                                                    </View>
                                                                    <View style={styles.GstSalesBottomMainView}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text2}>{datagst.electronicCreditLedger.sgst}</Text></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.padder} />
                                                            <View style={styles.PenaltieView}>
                                                                <View style={styles.PenaltieTopView}>
                                                                    <Text style={styles.Text0}>Penalties</Text>
                                                                </View>
                                                                <View style={styles.PenaltieBottomView}>
                                                                    <View style={styles.PenaltieBottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Form Name</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{datapenaltie.formName}</Text></View>
                                                                    </View>
                                                                    <View style={styles.PenaltieBottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Particular</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{datapenaltie.particular}</Text></View>
                                                                    </View>
                                                                    <View style={styles.PenaltieBottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>Penalty</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{datapenaltie.penalty}</Text></View>
                                                                    </View>
                                                                    <View style={styles.PenaltieBottomMain}>
                                                                        <View style={styles.BottomLeft}><Text style={styles.Text0}>interest</Text></View>
                                                                        <View style={styles.BottomRight}><Text style={styles.Text1}>{datapenaltie.interest}</Text></View>
                                                                    </View>
                                                                </View>
                                                            </View>
            
                                                        </View>
            
                                                //     );
                                                // }
                                                // )
                                            ) : (
                                                    <View style={styles.WaitingView}>
                                                        <Text style={{ fontSize: 30, color: 'green' }}>No Data / User Need To Fill Complete Form</Text>
                                                        {/* <Image source={require('../../assets/nodata.jpg')} style={{ width: '100%', height: '200%',resizeMode: 'contain' }} /> */}
                                                    </View>
                                    //             )
                                    //     );

                                        
                                    // }
                                    )
                                ) : (
                                        <View style={styles.WaitingView}>
                                            <Text style={{ fontSize: 30, color: 'green' }}>No Data / User Need To Fill Complete Form</Text>
                                        </View>
                        //             )
                        //     );
                        // }
                        )
                    ) : (
                            <View style={styles.WaitingView}>
                                <Text style={{ fontSize: 30, color: 'green' }}>No Data / User Need To Fill Complete Form</Text>
                                {/* <Image source={require('../../assets/nodata.jpg')} style={{ width: '100%', height: '100%' }} /> */}
                            </View>
                        )
                    }
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    MainView: {
        width: '95%',
        height: 1400,
        alignSelf: 'center',
        alignItems: 'center',
    },
    WaitingView: {
        // backgroundColor: 'red',
        height: 300,
        width: 400,
        alignSelf: 'center',
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ErrorView3: {
        // backgroundColor: 'red',
        // height: 300,
        width: 412,
        // alignSelf: 'center',
        // marginTop: 200,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    NameView: {
        width: '95%',
        height: 50,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'green'

    },
    LeftView: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    RightView: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },

    CompanyView: {
        width: '95%',
        height: 50,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'green'
    },
    AccountingView: {
        width: '95%',
        height: 250,
        borderWidth: 1,
        borderColor: 'green'
    },
    TopView: {
        width: '100%',
        height: "20%",
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    BottomView: {
        width: '100%',
        height: "80%",
    },
    BottomMain: {
        flexDirection: 'row',
        width: '100%',
        height: '16%',

    },
    BottomLeft: {
        width: '60%',
        height: "100%",
        justifyContent: 'center',
        paddingLeft: 15,
    },
    BottomRight: {
        width: '40%',
        height: "100%",
    },
    GSTView: {
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'


    },

    GstSalesView: {
        width: '95%',
        height: '10%',
        borderWidth: 1,
        borderColor: 'green'
    },
    GstSalesTopView: {
        paddingLeft: 20,
        width: '100%',
        height: '25%',
        justifyContent: 'center'
    },
    GstSalesBottomView: {
        width: '100%',
        height: '75%',
        borderTopWidth: 1,
        borderColor: 'green',
        justifyContent: 'center'

    },
    GstSalesBottomMainView: {
        flexDirection: 'row',
        width: '100%',
        height: '32%',
    },
    PenaltieView: {
        width: '95%',
        height: 200,
        borderWidth: 1,
        borderColor: 'green'
    },
    PenaltieTopView: {
        width: '100%',
        height: "20%",
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PenaltieBottomView: {
        width: '100%',
        height: "80%",
    },
    PenaltieBottomMain: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',

    },
    IncomeTextView: {
        width: '95%',
        height: 100,
        backgroundColor: 'red'
    },
    padder: {
        padding: 10
    },
    Text0: {
        fontSize: 20,
        color: 'green'
    },
    Text1: {
        fontSize: 20,
        color: '#555',
        paddingTop: 5,
    },
    Text2: {
        paddingTop: 5,
        fontSize: 20,
        color: '#555'
    }
});