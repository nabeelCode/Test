import React from 'react'
import {Text,Button,View,StyleSheet} from 'react-native'

const styles=StyleSheet.create(
    {
        mainstyle:{padding:10,flex:1,justifyContent:'center',backgroundColor:'#006A7A'},
        textstyle:{fontSize:40,color:'white',fontStyle:'italic'},
        userstyle:{flex:2,justifyContent:'center'},
        logoutstyle:{flex:1}
    }
)
const app=()=>{
    return(
        <View style={styles.mainstyle}>
            <View style={styles.userstyle}>
                <Text style={styles.textstyle}>Hi User</Text>
            </View>
            <View style={styles.logoutstyle}>
               <Button title='Logout'></Button>
            </View>
            
        </View>
    )
}

export default app