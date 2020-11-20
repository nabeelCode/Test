import React,{useState} from 'react'
import {View,StyleSheet,Text,TouchableOpacity,TextInput,Button} from 'react-native'
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
        },
        errorTextView:{
            alignItems:'flex-end'
        },
        errorText:{
            color:'#B81524',

            fontStyle:'italic'
        }
    }
)

export default CustomTextInput=()=>{
    const [isValidate,validateField]=useState(false)
    const [text,onChangeText]=useState('')
    return(
        <View style={textInputStyle.main}>
            <View style={textInputStyle.textInputView}>
                <TextInput 
                    placeholder='Name'
                    style={textInputStyle.text}
                    onChangeText={(text)=>{onChangeText(text)}}
                    defaultValue={text}
                />
            </View>
            <View style={textInputStyle.underLine}></View>
            <View style={[textInputStyle.errorTextView,{
                height:isValidate ? null:0
            }]}>
                <Text style={textInputStyle.errorText}>Please enter valid text</Text>
            </View>
            <Button title='check' onPress={()=>{
                    text.length<6 && text==='' ? validateField(true):validateField(false)
                }}
            />
        </View>
    )
}