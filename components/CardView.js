import React,{useState} from 'react'
import {View,Text,Image,StyleSheet,Modal,Pressable,FlatList} from 'react-native'

style=StyleSheet.create(
    {
        main:{  
            flex:1
        },
        cardMain:{
            backgroundColor:'white',
            padding:10,
            marginBottom:10,
            borderRadius:5,
            elevation:5
        },
        menuView:{
            padding:4,
            flexDirection:'row'
        },
        textWithIcons:{
            flex:5
        },
        icons:{
            flex:1,
            flexDirection:'row',
            justifyContent:'flex-end'
        },
        textView:{
            padding:4
        },
        optionsView:{
            marginRight:15
        },
        menuModal:{
            justifyContent:'flex-end',
            flex:1,
            backgroundColor:'rgba(0, 104, 111, 0.1)'
        },menu:{
            backgroundColor:'white',
            marginRight:15,
            marginLeft:15,
            padding:10,
            borderRadius:4,
            elevation:5
        },
        menuText:{
            margin:10
        },
        line:{
            backgroundColor:'#00686F',
            height:1,
            borderRadius:10,
            elevation:5,
        },
        flatView:{
            flex:1
        }
    }
)

export default CardView=(props)=>{
    const [optionsMenu,setOptionsMenu]=useState(false)
    const renderItem = ({ item }) => (
        <View style={style.cardMain}>
            <View style={style.menuView}>
                    <View style={style.textWithIcons}>
                        <Text>Name: {item.name} </Text>
                    </View>
                    <Pressable style={style.icons} onPress={()=>{setOptionsMenu(true)}}>
                        <Image source={require('../images/menu.png')}/>
                    </Pressable>
            </View>
            <View style={style.textView}>
                <Text>Place: {item.place}</Text>
            </View>
            <View style={style.textView}>
                <Text>Panchayath: {item.panchayath}</Text>
            </View>
            <View style={style.menuView}>
                <View style={style.textWithIcons}>
                    <Text>Last Donated: {item.lastDonated}</Text>
                </View>
                <View style={style.icons}>
                    <View style={style.optionsView}>
                        <Image source={require('../images/tick.png')}/>
                    </View>
                    <View>
                        <Image source={require('../images/phone-call.png')}/>
                    </View>
                </View>
            </View>
        </View>
      );
    return(
        <View style={style.main}>
            <View style={style.flatView}>
                <FlatList
                    data={props.cardData}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                />
            </View>
            <Modal
                visible={optionsMenu}
                transparent={true}
            >
                <Pressable style={style.menuModal} onPress={()=>{setOptionsMenu(false)}}>
                    <View style={style.menu}>
                        <Text style={style.menuText}>Report as False Data</Text>
                        <View style={style.line}></View>
                        <Text style={style.menuText}>Mark as Donated</Text>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}