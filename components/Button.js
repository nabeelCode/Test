import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

styl=StyleSheet.create(
    {
        main:{
            marginTop:2
        },
        buttonView:{
            backgroundColor:'#B81524',
            paddingTop:hp('1%'),
            paddingBottom:hp('1%'),
            alignItems:'center',
            borderRadius:40,
        },
        buttonText:{
            fontSize:wp('4.5%'),
            fontWeight:'bold',
            color:'white'
        }
    }
)

export default Button=(props)=>{
    return(
        <View style={styl.main}>
            <TouchableOpacity style={styl.buttonView} onPress={props.onPress}>
                <Text style={[styl.buttonText,
            {}]}>{props.title.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}