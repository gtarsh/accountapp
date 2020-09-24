// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
// import { backend, validate, getUserId } from '../../Common';
// import Loader from './Loader'

// export default function AllUserDetails() {

//     useEffect(() => {
//         fetchUsers()
//     }, []);

//     const [Data, setToData] = useState('');
//     const [Account, setToAccount] = useState('');
//     const [GST, setToGST] = useState('');
//     const [Penaltie, setToPenaltie] = useState('');
//     const [loader, updateLoader] = useState(false);
//     // const [searchQuery, setSearchQuery] = React.useState('');
//     // const onChangeSearch = query => setSearchQuery(query);

//     async function fetchUsers() {
//         try {
//             updateLoader(true);
//             const result = await backend('user', {})
//             let response = result.data

//             // let data2 = response.accounting
//             // let accountingdata = data2[data2.length - 1]


//             let account = response.map(res => {
//                 return res.accounting;
//             });
//             let account2= account.map(res => {
//                 return res.stockPurchases;
//             });
//             // let data2 = bat[bat.length - 3]
//             // let gsts = response.map(res => {
//             //     return res.gst;
//             // });
//             // let penaltie = response.map(res => {
//             //     return res.penalties;
//             // });
            
//             // setToPenaltie(penaltie)
//             // setToGST(gsts);
//             // setToAccount(account);
            
//             setToData(response);
//             console.log(account2)
//             updateLoader(false);
//         } catch (err) {
//             console.error(err)
//             // return Alert.alert(err)
//         }
//     }

//     return (
//         <View style={styles.Container}>
//              {/* <Loader loader={loader} /> */}
//             <ScrollView showsVerticalScrollIndicator={false}>
           
//                 <View style={styles.padder} />
//                 {(Data.length > 0) ? (
//                     Data.map((v, k) => {
//                         return (
//                             <View
//                                 key={k}
//                                 style={styles.MainView}>
//                                 <View style={styles.padder} />
//                                 <View style={styles.NameView}>
//                                     <View style={styles.LeftView}>
//                                         <Text style={styles.Text0}>Name</Text>
//                                     </View>
//                                     <View style={styles.RightView}>
//                                         <Text style={styles.Text1}>
//                                             {v.name}
//                                             {/* dvdfsvs */}
//                                             </Text>
//                                     </View>
//                                 </View>
//                                 <View style={styles.padder} />
//                                 <View style={styles.CompanyView}>
//                                     <View style={styles.LeftView}>
//                                         <Text style={styles.Text0}>Company </Text>
//                                     </View>
//                                     <View style={styles.RightView}>
//                                         <Text style={styles.Text1}>
//                                             {v.companyName}
//                                             {/* asfdsfdawf */}
//                                             </Text>
//                                     </View>
//                                 </View>
//                                 <View style={styles.padder} />
//                                 <View style={styles.AccountingView}>
//                                     <View style={styles.TopView}>
//                                         <Text style={styles.Text0}>Accounting</Text>
//                                     </View>
//                                     <View style={styles.BottomView}>
//                                         <View style={styles.BottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Stock Purchases</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {v.accounting.stockPurchases}
//                                               {/* afdsfdawfd   */}
//                                               </Text></View>
//                                         </View>
//                                         <View style={styles.BottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Expenses</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {v.accounting.expenses}
//                                                 {/* asdfasdf */}
//                                                 </Text></View>
//                                         </View>
//                                         <View style={styles.BottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Gross Profit</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {accountingdata.grossProfit} */}
//                                                 dsafasdf</Text></View>
//                                         </View>
//                                         <View style={styles.BottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Net Profit</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {accountingdata.netProfit} */}
//                                               fdsafdsaf  </Text></View>
//                                         </View>
//                                         <View style={styles.BottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Cash Balance</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {accountingdata.cashBalance} */}
//                                                 asdfdasfa</Text></View>
//                                         </View>
//                                         <View style={styles.BottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Bank Balance</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {accountingdata.bankBalance} */}
//                                                 asfdsf</Text></View>
//                                         </View>
//                                     </View>
//                                 </View>



                                
//                                 <View style={styles.padder} />
//                                 <View style={styles.GSTView}>
//                                     <Text style={styles.Text0}>GST</Text>
//                                 </View>
//                                 <View style={styles.padder} />

//                                 <View style={styles.GstSalesView}>
//                                     <View style={styles.GstSalesTopView}>
//                                         <Text style={styles.Text0}>GST Sales Roported</Text>
//                                     </View >
//                                     <View style={styles.GstSalesBottomView}>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.salesReported.igst} */}
//                                                 afdf</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.salesReported.cgst} */}
//                                                 afdf</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.salesReported.sgst} */}
//                                                 afdf</Text></View>
//                                         </View>
//                                     </View>
//                                 </View>

//                                 <View style={styles.padder} />

//                                 <View style={styles.GstSalesView}>
//                                     <View style={styles.GstSalesTopView}>
//                                         <Text style={styles.Text0}>GST Purchases</Text>
//                                     </View >
//                                     <View style={styles.GstSalesBottomView}>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.purchases.igst} */}
//                                                 afdf</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.purchases.cgst} */}
//                                                 afdf</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.purchases.sgst} */}
//                                                 afdf</Text></View>
//                                         </View>
//                                     </View>
//                                 </View>

//                                 <View style={styles.padder} />

//                                 <View style={styles.GstSalesView}>
//                                     <View style={styles.GstSalesTopView}>
//                                         <Text style={styles.Text0}>GST Electronic Cash Ledger</Text>
//                                     </View >
//                                     <View style={styles.GstSalesBottomView}>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.electronicCashLedger.igst} */}
//                                                 afd</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.electronicCashLedger.cgst} */}
//                                                 afd</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.electronicCashLedger.sgst} */}
//                                                 afd</Text></View>
//                                         </View>
//                                     </View>
//                                 </View>

//                                 <View style={styles.padder} />

//                                 <View style={styles.GstSalesView}>
//                                     <View style={styles.GstSalesTopView}>
//                                         <Text style={styles.Text0}>GST Electronic Credit Ledger</Text>
//                                     </View >
//                                     <View style={styles.GstSalesBottomView}>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>IGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.electronicCreditLedger.igst} */}
//                                                 adfs</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>CGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.electronicCreditLedger.cgst} */}
//                                                 adfs</Text></View>
//                                         </View>
//                                         <View style={styles.GstSalesBottomMainView}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>SGST</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text2}>
//                                                 {/* {datagst.electronicCreditLedger.sgst} */}
//                                                 adfs</Text></View>
//                                         </View>
//                                     </View>
//                                 </View>

//                                 <View style={styles.padder} />


//                                 <View style={styles.PenaltieView}>
//                                     <View style={styles.PenaltieTopView}>
//                                         <Text style={styles.Text0}>Penalties</Text>
//                                     </View>
//                                     <View style={styles.PenaltieBottomView}>
//                                         <View style={styles.PenaltieBottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Form Name</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {datapenaltie.formName} */}afd
//                                                 </Text></View>
//                                         </View>
//                                         <View style={styles.PenaltieBottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Particular</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {datapenaltie.particular} */}asdf
//                                                 </Text></View>
//                                         </View>
//                                         <View style={styles.PenaltieBottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>Penalty</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {datapenaltie.penalty} */}afsd
//                                                 </Text></View>
//                                         </View>
//                                         <View style={styles.PenaltieBottomMain}>
//                                             <View style={styles.BottomLeft}><Text style={styles.Text0}>interest</Text></View>
//                                             <View style={styles.BottomRight}><Text style={styles.Text1}>
//                                                 {/* {datapenaltie.interest} */}adf
//                                                 </Text></View>
//                                         </View>
//                                     </View>
//                                 </View>
//                                 {/* <View style={styles.padder} />
//                                 <View style={styles.padder} />
//                                 <View style={styles.padder} />
//                                 <View style={styles.padder} />
//                                 <View style={styles.padder} /> */}
//                             </View>
//                      );
//                     })

//                 ) : (
//                         <View style={styles.MainView2}>
//                             <Loader loader={loader} />
//                         </View>

//                     )}




//                 {/* <View style={styles.padder} />
//                 <View style={styles.padder} />
//                 <View style={styles.padder} /> */}
//             </ScrollView>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     Container: {
//         // backgroundColor: 'blue',
//         flex: 1,
//     },
//     MainView2:{
//         // backgroundColor: 'blue',
//         // flex: 1,
//         height: 100,
//         width: 100,
//         alignSelf: 'center',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         marginTop: 300
//     },
//     LoaderView: {
//         height: '100%',
//         width: '100%',
//         alignSelf: 'center',
//     },
//     MainView: {
//         width: '95%',
//         height: 1350,
//         alignSelf: 'center',
//         alignItems: 'center',


//     },
//     NameView: {
//         width: '95%',
//         height: 50,
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: 'green'

//     },
//     LeftView: {
//         width: '30%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     RightView: {
//         width: '70%',
//         height: '100%',
//         justifyContent: 'center',
//     },

//     CompanyView: {
//         width: '95%',
//         height: 50,
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: 'green'
//     },
//     AccountingView: {
//         width: '95%',
//         height: 250,
//         borderWidth: 1,
//         borderColor: 'green'
//     },
//     TopView: {
//         width: '100%',
//         height: "20%",
//         borderBottomWidth: 1,
//         borderBottomColor: 'green',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     BottomView: {
//         width: '100%',
//         height: "80%",
//     },
//     BottomMain: {
//         flexDirection: 'row',
//         width: '100%',
//         height: '16%',

//     },
//     BottomLeft: {
//         width: '60%',
//         height: "100%",
//         justifyContent: 'center',
//         paddingLeft: 15,
//     },
//     BottomRight: {
//         width: '40%',
//         height: "100%",
//     },
//     GSTView: {
//         width: '95%',
//         height: 40,
//         borderWidth: 1,
//         borderColor: 'green',
//         justifyContent: 'center',
//         alignItems: 'center'


//     },

//     GstSalesView: {
//         width: '95%',
//         height: '10%',
//         borderWidth: 1,
//         borderColor: 'green'
//     },
//     GstSalesTopView: {
//         paddingLeft: 20,
//         width: '100%',
//         height: '25%',
//         justifyContent: 'center'
//     },
//     GstSalesBottomView: {
//         width: '100%',
//         height: '75%',
//         borderTopWidth: 1,
//         borderColor: 'green',
//         justifyContent: 'center'

//     },
//     GstSalesBottomMainView: {
//         flexDirection: 'row',
//         width: '100%',
//         height: '32%',
//     },
//     PenaltieView: {
//         width: '95%',
//         height: 200,
//         borderWidth: 1,
//         borderColor: 'green'
//     },
//     PenaltieTopView: {
//         width: '100%',
//         height: "20%",
//         borderBottomWidth: 1,
//         borderBottomColor: 'green',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     PenaltieBottomView: {
//         width: '100%',
//         height: "80%",
//     },
//     PenaltieBottomMain: {
//         flexDirection: 'row',
//         width: '100%',
//         height: '25%',

//     },
//     IncomeTextView: {
//         width: '95%',
//         height: 100,
//         backgroundColor: 'red'
//     },
//     padder: {
//         padding: 10
//     },
//     Text0: {
//         fontSize: 20,
//         color: 'green'
//     },
//     Text1: {
//         fontSize: 20,
//         color: '#555',
//         paddingTop: 5,
//     },
//     Text2: {
//         paddingTop: 5,
//         fontSize: 20,
//         color: '#555'
//     }
// })
