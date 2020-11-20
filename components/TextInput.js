import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

const textInputStyle=StyleSheet.create(
    {
        main:{

        },
        textInputView:{
            backgroundColor:'white',
            paddingTop:hp('.5%'),
            paddingBottom:hp('.5%'),
            paddingLeft:wp('1.5%'),
            paddingRight:wp('1%'),
            elevation:10
        },
        text:{
            fontSize:wp('4.5%'),
        },
        underLine:{
            backgroundColor:'#B81524',
            height:hp('.2%')
        }
    }
)

export default textInput=()=>{
    return(
        <View>
            <View style={textInputStyle.textInputView}>
                <TextInput 
                placeholder='Nabeel'
                style={textInputStyle.text}/>
            </View>
            <View style={textInputStyle.underLine}></View>
        </View>
    )
}