//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import { useEffect } from 'react';
import { useState } from 'react';

// create a component
const Welcome = () => {
    let[data,setData]=useState([])
    const GetResult=async()=>{
        console.log(2);
        await fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(result => {
console.log(result);
        setData(result?.results)
        })
        .catch(error => {
          console.log(error);
        });
    }
    useEffect(()=>{
        GetResult()
    },[])
    return (
        <View style={{flex:1,backgroundColor:`#cd853f`,}}>
            <View style={{justifyContent:'flex-end', alignItems:'center'}}>
        <FlatList
        data={data}
        renderItem={({item})=>{
            return(
               <View style= {{backgroundColor:`#cd853f`, 
               flexDirection:'row',justifyContent:'space-between',alignItems:'center',
               marginLeft:20,marginRight:20}}>
                
                 <Text style={{fontSize:25,fontStyle:'italic',color:'black'}}>
                  {item?.login?.username}

                </Text>
                <Image source={{uri:item?.picture?.large}} style={{width:100,height:100,
                    borderRadius:40,paddingLeft:40,marginTop:20}}/>
                </View>

            )
        }}
        />
        </View>
         </View>

    );
};



//make this component available to the app
export default 
Welcome;
