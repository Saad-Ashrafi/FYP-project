//import liraries
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import GetRequest from './services/API.';

// create a component
const LOGIN = (props) => {
const [ email,setemail]=useState('')
const [ password,setpassword]=useState('')
  const login=async()=>{
    console.log({email,password});
   let data =await GetRequest("login/login?email="+email+"&password="+password)
   console.log(data);
   if(data?.UserType.trim()=='attendent')
   { console.log(11,data?.UserType);
   props.navigation.navigate("Home")
   }else if(data?.UserType.trim()=='faculty')
   {
    console.log(22,data?.UserType);
    props.navigation.navigate("mydarwe")
   }else if (data?.UserType.trim()=='director')
   {
    console.log(33,data?.UserType);
    props.navigation.navigate("mydarwe2")
   }else if (data?.UserType.trim()=='student')
   {
    console.log(44,data?.UserType);
    props.navigation.navigate("mydarwe3")
   }else if (data?.UserType.trim()=='admin')
   {
    props.navigation.navigate("mydarwe4")
   }
   
 console.log(666,data?.UserType);
  }

  return (
    <View style={{flex:1,backgroundColor:'white', borderWidth:1,borderColor:'black'}}>
      <View style={{justifyContent:'flex-end', alignItems:'center'}}>

<Image source={require('./Screens/Home/Images/BIIT.jpeg')} style={{width:130,height:130,borderRadius:20,marginTop:80}}>
</Image>
<View style={{width: 300,
            height: 40,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderWidth:1,borderColor:'black',
            borderWidth:3,
       borderColor:'green',marginTop:30,marginLeft:10,
            borderRadius: 10,
            justifyContent:'center',paddingLeft:10,marginTop:40}}>
<TextInput
onChangeText={eel=>(
setemail(eel)

)}
  placeholder ='Email'
  placeholderTextColor={'black'}
  keyboardType="email-address">
</TextInput>
</View>

<View style={{width: 300,
            height: 40,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderWidth:1,borderColor:'black',
            borderRadius: 10,
            borderWidth:3,
       borderColor:'green',marginTop:30,marginLeft:10,
            justifyContent:'center',paddingLeft:10,marginTop:40}}>
<TextInput
onChangeText={eel=>(
  setpassword(eel))}
  

  placeholder ='password'
  placeholderTextColor={'black'}
  keyboardType="email-address">
</TextInput>


</View>
<TouchableOpacity
onPress={()=>{
  login()
}}
 style={{width: 100,
            height: 35,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderWidth:1,borderColor:'black',
            borderRadius: 10,
            borderWidth:3,
       borderColor:'green',marginTop:30,marginLeft:10,
            justifyContent:'center',paddingLeft:10,marginTop:40}}>
<Text style={{alignItems:'center',alignSelf:'center',color:'black'}}>
  LOGIN
</Text>


</TouchableOpacity>
<TouchableOpacity onPress={()=>{
            props.navigation.navigate('signup')
          }}

style={{width: 100,
            height: 35,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth:1,borderColor:'black',
            borderWidth:3,
       borderColor:'green',marginTop:30,marginLeft:10,
            justifyContent:'center',paddingLeft:10,marginTop:20}}>
<Text style={{alignItems:'center',alignSelf:'center',color:'black'}}>
 SIGN-UP
</Text>


</TouchableOpacity>
      </View>
    
    </View>
  );
};



//make this component available to the app
export default LOGIN;
