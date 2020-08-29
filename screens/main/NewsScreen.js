import React,{useState} from 'react';
import { View , Text , StyleSheet , ScrollView , TouchableHighlight , Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const NewsScreen=({navigation})=>{
    const [data,setData]=useState([1,2,3,4])
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                data.map((value,index)=>(
                    <View style={styles.newsWrapper} key={index}>
                 <View style={styles.header}>
                 <View style={styles.circle}>
                    <MaterialCommunityIcons name="newspaper" size={30} color="#ffffff"/>
                 </View>
                 <View style={styles.titleContainer}>
                     <View style={styles.titleTextContainer}>
                     <Text style={styles.title}>Working from home may prove 'taxing':Here's Why</Text>
                         </View>
                    
                    <Text style={styles.newsOwner}>ABC News</Text>
                    <Text style={styles.time}>1 day ago</Text>
                 </View>
                 </View>
                <View style={styles.body}>
                    <View style={styles.description}>
                     <Text>As professionals work from home, salary components such as conveyance allowance can no longer be tax-free, in the given pandemic situation.</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <View style={styles.image}>
                         <Image source={require('../../assets/tax.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                    </View>
                </View>

            </View>
                ))
            } 
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    newsWrapper:{
       backgroundColor:'white',
       width:'90%',
       marginVertical:25,
       alignSelf:'center',
       borderRadius:5,
       paddingBottom:30,
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        
    },
    header:{
        flexDirection:'row',
        paddingTop:20,
        paddingLeft:15,
                
    },
    circle:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:'#e2e2e2',
        marginRight:20,
        justifyContent:'center',
        alignItems:'center'
    }, 
    titleTextContainer:{
           
            width:'85%'
    },
    title:{
        fontSize:18,
    
       
       
    },
    newsOwner:{
        opacity:0.6
    },
    time:{
        opacity:0.5
    },
    description:{
        fontSize:18,
        marginTop:20,
        
        
        width:'90%',
        alignSelf:'center'
    },
    image:{
        height:200,
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'#e2e2e2',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default NewsScreen;
