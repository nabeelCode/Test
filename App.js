import React,{useState} from 'react'
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CustomTextInput from './components/textInput.js'
import Button from './components/Button.js'

const styl=StyleSheet.create(
    {
        main:{
            padding:10
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

export default app=()=>{
    const [text,onChangeText]=useState('')
    const [isValidate,validateField]=useState(false)
    return(
        <View style={styl.main}>
            <CustomTextInput
                text={text}
                onChangeText={(item)=>{onChangeText(item)}}
                placeholder='Name'
            /> 
            
            <View style={[styl.errorTextView,]}>
                <Text style={[styl.errorText,{
                    height:isValidate ? null:0
                }]}>Please enter valid text</Text>
            </View>
            <Button title='check' onPress={()=>{
                    text.length<6 && text==='' ? validateField(true):validateField(false)
                }}
            />  

        </View>
    )
}