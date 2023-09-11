import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from './Login';
import Signup from './signup';
import Welcome from './Welcome';
import Home from './Screens/Home/Home';
import Detail from './Screens/Home/Class Detail/Detail';
import TimeOut from './Screens/Home/TimeOut';
import NotHeld from './Screens/NotHeld/NotHeld';
import AlreadyTaken from './Screens/AlreadyTaken/AlreadyTaken';
import TeachersReport from './Screens/TeachersReport/TeachersReport';
import DawnloadeReports from './Screens/DawnloadeReports/DawnloadeReports';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Statistics from './Screens/Statistics/statistics';
import directorReports from './Screens/Director site/directorReports';
import Reports from './Screens/Director site/Reports';
import ReportDawnloade from './Screens/TeacherDawnloade/ReportDawnloade';
import TeacherAlert from './Reshedule/TeacherAlert';
import Challenge from './Reshedule/Challenge';
import Alerts from './Reshedule/Admin/Alerts';
import FormResshadule from './Reshedule/Admin/FormReshadule';
import Trends from './Screens/Director site/Trends';
import StudentAlerts from './Screens/student login/StudentAlerts';


// create a component
const App = (props) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}
    drawerContent={props=>{
      return(
        <View style={{backgroundColor:'white',flex:1}}>
<Image source={require('../fyp/Screens/Home/Images/39.jpg')} 
style={{width:100,height:100,borderRadius:100,alignSelf:'center',marginTop:80}}/>
<Text style={{alignSelf:'center',color:'black',marginTop:20,fontSize:20,fontWeight:'bold'}}>
  Amir Rasheed
</Text>
<Text style={{alignSelf:'center',color:'black',marginTop:10}}>
  amirrasheed123@gmail.com
</Text>

<TouchableOpacity onPress={()=>{
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Home
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                     props.navigation.navigate('TeachersReport')   
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Reports
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                               props.navigation.navigate('DawnloadeRepots')   

                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
               marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       TimeTable
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('Statistics') 
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Statistics
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('TeacherAlert') 
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
      Reshedule
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('Challenge') 
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
     Challenge
        </Text>
        
        
        </TouchableOpacity>











        </View>
      )
    }}
    > 
 
  
      <Drawer.Screen name="DawnloadeRepots" component={DawnloadeReports} />
      <Drawer.Screen name="TeachersReport" component={TeachersReport} />
      <Drawer.Screen name="Statistics" component={Statistics} />
    </Drawer.Navigator>
  );
}
function MyDrawer2() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}
    drawerContent={props=>{
      return(
        <View style={{backgroundColor:'white',flex:1}}>
<Image source={require('../fyp/Screens//Home/Images/abc.png')} 
style={{width:100,height:100,borderRadius:100,alignSelf:'center',marginTop:80}}/>
<Text style={{alignSelf:'center',color:'black',marginTop:20,fontSize:20,fontWeight:'bold'}}>
  Dr Jamil Sawar
</Text>
<Text style={{alignSelf:'center',color:'black',marginTop:10}}>
  Jamilsawar@gmail.com
</Text>

<TouchableOpacity onPress={()=>{
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Home
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                     props.navigation.navigate(' directorReports') 
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Reports
        </Text>
       
        
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('Statistics') 
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Statistics
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          
          props.navigation.navigate('Trends') 

        }}

style={{width: 100,
          height: 35,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth:1,borderColor:'grey',
          borderWidth:3,
     marginTop:30,marginLeft:10,
     height: heightPercentageToDP(7),
     width:widthPercentageToDP(60),
          justifyContent:'center',paddingLeft:10,marginTop:20}}>
<Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
Trends
</Text>


</TouchableOpacity>













        </View>
      )
    }}
    > 
 
  
 <Stack.Screen name="DirectorReports" component={directorReports} />
      <Drawer.Screen name="TeachersReport" component={TeachersReport} />
      <Drawer.Screen name="Statistics" component={Statistics} />
    </Drawer.Navigator>
  );
}
function MyDrawer3() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}
    drawerContent={props=>{
      return(
        <View style={{backgroundColor:'white',flex:1}}>
<Image source={require('../fyp/Screens//Home/Images/abc.png')} 
style={{width:100,height:100,borderRadius:100,alignSelf:'center',marginTop:80}}/>
<Text style={{alignSelf:'center',color:'black',marginTop:20,fontSize:20,fontWeight:'bold'}}>
  Saad Ashrafi
</Text>
<Text style={{alignSelf:'center',color:'black',marginTop:10}}>
  saasashrafi417@gmail.com
</Text>

<TouchableOpacity onPress={()=>{
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Home
        </Text>
       
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                              props.navigation.navigate('StudentAlerts') 

                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
     Reshadule Alerts
        </Text>
       
        
        
        </TouchableOpacity>
        </View>
      )
    }}
    > 
 
  
 <Stack.Screen name="DirectorReports" component={directorReports} />
      <Drawer.Screen name="TeachersReport" component={TeachersReport} />
      <Drawer.Screen name="Statistics" component={Statistics} />
    </Drawer.Navigator>
  );
}
function MyDrawer4() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}
    drawerContent={props=>{
      return(
        <View style={{backgroundColor:'white',flex:1}}>
<Image source={require('../fyp/Screens//Home/Images/abc.png')} 
style={{width:100,height:100,borderRadius:100,alignSelf:'center',marginTop:80}}/>
<Text style={{alignSelf:'center',color:'black',marginTop:20,fontSize:20,fontWeight:'bold'}}>
  Nadia
</Text>
<Text style={{alignSelf:'center',color:'black',marginTop:10}}>
  nadia123@gmail.com
</Text>

<TouchableOpacity onPress={()=>{
                    
                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Home
        </Text>
        
        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                                         props.navigation.navigate('Alerts')   

                  }}
        
        style={{width: 100,
                    height: 35,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderWidth:1,borderColor:'grey',
                    borderWidth:3,
              marginTop:30,marginLeft:10,
               height: heightPercentageToDP(7),
               width:widthPercentageToDP(60),
                    justifyContent:'center',paddingLeft:10,marginTop:20}}>
        <Text style={{alignItems:'center',alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
       Reshedule Request
        </Text>
        
        
        </TouchableOpacity>
       
       













        </View>
      )
    }}
    > 
 
  
 <Stack.Screen name="DirectorReports" component={directorReports} />
      <Drawer.Screen name="TeachersReport" component={TeachersReport} />
      <Drawer.Screen name="Statistics" component={Statistics} />
    </Drawer.Navigator>
  );
}
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LOGIN} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="TimeOut" component={ TimeOut} />
      <Stack.Screen name="NotHeld" component={ NotHeld} />
      <Stack.Screen name="AlreadyTaken" component={ AlreadyTaken} />
      <Stack.Screen name="Statistics" component={ Statistics} />
      <Stack.Screen name="TeachersReport" component={ TeachersReport} />
      <Stack.Screen name="DawnloadeRepots" component={ DawnloadeReports} />
      <Stack.Screen name="ReportDawnloade" component={ReportDawnloade} />
      <Stack.Screen name="DirectorReports" component={directorReports} />
      <Stack.Screen name="TeacherAlert" component={TeacherAlert} />
      <Stack.Screen name="Challenge" component={Challenge} />
      <Stack.Screen name="Alerts" component={Alerts} />
      <Stack.Screen name="FormResshadule" component={FormResshadule} />
      <Stack.Screen name="Trends" component={Trends} />
      <Stack.Screen name="StudentAlerts" component={StudentAlerts} />

      <Stack.Screen name="Reports" component={Reports} />
    <Stack.Screen name='mydarwe' component={MyDrawer}/>
    <Stack.Screen name='mydarwe2' component={MyDrawer2}/>
    <Stack.Screen name='mydarwe3' component={MyDrawer3}/>
    <Stack.Screen name='mydarwe4' component={MyDrawer4}/>


    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;