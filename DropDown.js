/*
---------DropDown component props-----------
        items : drop down items,object array,object keys: key & label
        itemTextColor : drop down item color
        defaultValue : default selector item value
        selectorTextColor : selector item color
        dropDownBackground : drop down modal background color
        headerText : header text of drop down modal
        headerTextColor : header text color of drop down
*/
import React,{useState} from 'react'
import {View,Image,Text,StyleSheet,Modal,ScrollView} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
style=StyleSheet.create(
    {
        main:{
        },
        text:{
            color:'white',
            fontWeight:'bold'
        },
        modal:{
            flex:1,
            backgroundColor:'rgba(255, 255, 255, .4)',
            justifyContent:'center',
            alignItems:'center',
            padding:20,
        },
        insidemodal:{   
            padding: 15,
            elevation: 5,
            borderRadius:5.,
            height:'80%',
            justifyContent:'center'
        },
        bloodgroup:{
            flexDirection:'row',
            padding:10,
            elevation:5,
            backgroundColor:'white'
        },
        dropTextView:{
            flex:5,
            alignSelf:'flex-start'
        },
        bloodGroupImage:{
            flexDirection:'row-reverse',
            flex:1,
            padding:10  
        },
        dropDownSelectorText:{
            fontSize:20,
            padding:5
        },
        dropDownText:{
            fontSize:20,
            padding:15
        },
        dropDownHeaderText:{
            fontWeight:'bold',
            fontSize:25,
            paddingTop:20,
            paddingBottom:20,
            paddingRight:50
        }
    }
)

export const DropDown=(props)=>{
    /*Drop Down Props:
    */
    const headerTextColor=props.headerTextColor ? props.headerTextColor:'#e53939'
    const itemTextColor=props.itemTextColor ? props.itemTextColor:'black'
    const selectorTextColor=props.selectorTextColor ? props.selectorTextColor:'black'
    const dropDownBackground=props.dropDownBackground ? props.dropDownBackground:'white'
    const defaultValue = props.defaultValue ? props.defaultValue:'Choose an Item'
    const headerText = props.headerText ? props.headerText:'Choose Item'
    const pressableItem = props.items.map(
        (a,index)=>(
            <Pressable key={index} onPress={
                ()=>{
                    setDefaultDropListValue(a)
                    setModal(false)
                }
            }>
                <Text key={index} style={[
                    style.dropDownText,
                    {   
                        color:itemTextColor
                    }]}>{a}</Text>
            </Pressable>
        )
    )

    const [modalstatus,setModal]=useState(false)
    const [defaultDropListValue,setDefaultDropListValue]=useState(defaultValue)
    return(
        <View style={style.main}>
            <Pressable style={style.bloodgroup} onPress={()=>{
                    setModal(true)
                }}>
                    <View style={style.dropTextView}>
                        <Text style={[
                            style.dropDownSelectorText,
                            {
                                color:selectorTextColor
                            }
                        ]}>{defaultDropListValue}</Text>
                    </View>
                    <View style={style.bloodGroupImage}>
                       <Image  source={require('./images/down-arrow.png')}/>
                    </View>
            </Pressable>
            <Modal
                visible={modalstatus}
                transparent={true}
            >
                <Pressable style={style.modal} onPress={()=>{setModal(false)}}>
                    <View  style={[
                        style.insidemodal,
                        {
                            backgroundColor:dropDownBackground,
                        }]}>
                        <Text style={[
                            style.dropDownHeaderText,
                            {
                                color:headerTextColor
                            }
                        ]}>{headerText}</Text>
                        <ScrollView>
                            {pressableItem}
                        </ScrollView>
                    </View>
                </Pressable>
                
            </Modal>
        </View>
    )
}