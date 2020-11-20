import React from 'react'
import {View,Text,TextInput,Button,StyleSheet} from 'react-native'

const styles=StyleSheet.create(
    {
        main:{padding:10,flex:1,backgroundColor:'#006A7A',justifyContent:'center'},
        signupview:{alignItems:'flex-start'},
        centerview:{padding:10},
        textinputstyle:{padding:10,fontSize:18,marginBottom:15,backgroundColor:'white'},
        buttonstyle:{backgroundColor:'#0084BF'},
        signupstyle:{fontSize:40,fontStyle:'italic',color:'white'},
        textstyle:{color:'white',fontStyle:'italic',paddingBottom:5}
    
    }
)
const Signup=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.signupview}>
                <Text color='black' style={styles.signupstyle}>Signup</Text>
            </View>
            <View style={styles.centerview}>
                <Text style={styles.textstyle}>Name</Text>
                <TextInput placeholderTextColor='black' style={styles.textinputstyle}></TextInput>
                <Text style={styles.textstyle}>Username</Text>
                <TextInput placeholderTextColor='black' style={styles.textinputstyle}></TextInput>
                <Text style={styles.textstyle} color='white'>Password</Text>
                <TextInput placeholderTextColor='black' style={styles.textinputstyle}></TextInput>  
                <Text style={styles.textstyle} color='white'>Confirm Password</Text>
                <TextInput placeholderTextColor='black' style={styles.textinputstyle}></TextInput>  
            
                <Button color='#0084BF' title="Register" style={styles.buttonstyle}>

                </Button>
            </View>
        </View> 
    )
}

export default Signup