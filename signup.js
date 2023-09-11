//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput ,TouchableOpacity} from 'react-native';
import PostRequest from './services/Post';
// create a component
const Signup = (props) => {
    const [ email,setemail]=useState('')
const [ password,setpassword]=useState('')
const[ name,setname]=useState('')
    const signup=async()=>{
        var data=
            {
                "Email":email,
                "Pasword":password,
                "Name":name,
               
            }
            PostRequest('login/Signup',data)
            props.navigation.navigate("Login")
    }
    return (
        <View style={{flex:1,backgroundColor:'white'}}>

            <View style={{ justifyContent:'flex-end',alignItems:'center' }}>
            <View style={{ 
               width: 300,
                height: 40,
                backgroundColor: 'white',
                borderWidth:1,borderColor:'black',
                alignSelf: 'center',
                borderRadius: 10,
                borderColor:'green',marginTop:30,marginLeft:20,
                borderWidth: 2,
                justifyContent:'center',paddingLeft:10,marginTop:80}}>

            <TextInput 
            onChangeText={eel=>(
                setemail(eel)
            )}
             placeholder ='Email'
             placeholderTextColor = {'black'}>
            </TextInput>
</View>
            </View>
            <View style={{ justifyContent:'flex-end',alignItems:'center' }}>
            <View style={{ 
               width: 300,
                height: 40,
                backgroundColor: 'white',
                borderWidth:1,borderColor:'black',
                alignSelf: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor:'green',marginTop:30,marginLeft:10,
                justifyContent:'center',paddingLeft:10,marginTop:40}}>

            <TextInput 
            onChangeText={eel=>(
                setname(eel)
            )}
            placeholder ='Name'
             placeholderTextColor = {'black'}>
            </TextInput>
</View>
            </View>
            <View style={{ justifyContent:'flex-end',alignItems:'center' }}>
            <View style={{ 
               width: 300,
                height: 40,
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 10,
            
                borderWidth:1,borderColor:'black',
                borderColor:'green',marginTop:30,marginLeft:10,
                borderWidth: 2,
                justifyContent:'center',paddingLeft:10,marginTop:40}}>

            <TextInput 
            onChangeText={eel=>(
                setpassword(eel)
            )}
            placeholder ='password'
             placeholderTextColor = {'black'}>
            </TextInput>
</View>
            </View>

            <View style={{ justifyContent:'flex-end',alignItems:'center' }}>
            <View style={{ 
               width: 300,
                height: 40,
                backgroundColor: 'white',
                alignSelf: 'center',
                borderWidth:1,borderColor:'black',
                borderRadius: 10,
                borderColor:'green',marginTop:30,marginLeft:10,
                borderWidth: 2,
                justifyContent:'center',paddingLeft:10,marginTop:40}}>

            <TextInput  placeholder ='Re=Password'
             placeholderTextColor = {'black'}>
            </TextInput>
           
    
</View>
            </View>

            <TouchableOpacity onPress={()=>{
            signup()
          }}

style={{width: 100,
            height: 35,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderWidth:1,borderColor:'black',
            borderRadius: 10,
            borderWidth:3,
            borderColor:'green',marginTop:30,marginLeft:10,
            justifyContent:'center',paddingLeft:10,marginTop:60}}>
<Text style={{alignItems:'center',alignSelf:'center',color:'black'}}>
 SIGN-UP
</Text>


</TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Signup;
