// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, TextInput, ImageBackground, StyleSheet,ToastAndroid,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu-updated';

import StudentInsert from './scr/StudentInsert.js';
import StudentSearch from './scr/StudentSearch.js';
import StudentDelete from './scr/StudentDelete.js';
import StudentList from './scr/StudentList.js';
import StudentCourses from './scr/StudentCourses.js';

import hcdclogo from './assets/hcdclogo.png';
import school from './assets/school.png';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';
import about from './assets/about.png';
import download from './assets/download.jpg';
import schoolgif from './assets/schoolgif.gif';
import schoolloop from './assets/schoolloop.gif';

import fb from './assets/fb.png';
import google from './assets/google.png';
import insta from './assets/insta.png';
import twitter from './assets/twitter.png';


function HomeScreen({ navigation }) {

  return (
    <View>
     <ImageBackground 
     source={school} 
     resizeMode="cover" 
     style={{
       height: '100%',
       width: '100%'
     }}>

      <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'center',
        top: 300,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center'
      }}> HOLY CROSS OF {"\n"} DAVAO COLLEGE </Text>

        <Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'center',
        top: 395,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center'
      }}> Database Student Management™ </Text>

        <Image 
         source= {hcdclogo}
         style={{ 
         height: 180,
         width: 180,
         position: 'absolute',
         alignSelf:'center',
         top: 100,
         resizeMode: 'center',
         }}/>

      <View style={{ 
        flexDirection: 'row', 
        top: '115%', 
        justifyContent: 'space-evenly',
        }}>

      <Button
        title={"Insert"}
        onPress={() => navigation.navigate('Insert')}
      />

      <Button
        title={"Courses"}
        onPress={() => navigation.navigate('About')}
      />

      <Button
        title={"Search"}
        onPress={() => navigation.navigate('Search')}
       
      />

      <Button
        title={"Delete"}
        onPress={() => navigation.navigate('Delete')}
      />

      <Button
        title={"List"}
        onPress={() => navigation.navigate('List')}
      />

      </View>
      </ImageBackground>
        </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
  <SideMenu 
    openMenuOffset={180} 
    menu={<SideMenuBar/>} 
    bounceBackOnOverdraw={false}
    isOpen={false}
    allowOverlayPressPropagation={true}>
      <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#008ce0',
          borderRadius: 10,
          height: 65,
          width: "98%",
          left: 5,
          bottom: 5
        },
        tabBarShowLabel: false,
        showElevation: true
      }}>

      <Tab.Screen name="HomeScreen" 
      component={HomeScreen}  
      options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={home}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#849daf' : 'white',
                }}
                />
              </View>
            ),
        }} />


      <Tab.Screen name="Insert" component={StudentInsert}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              
              <View>
                <Image
                source={insert}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#849daf' : 'white'
                }}
                />
              </View>
            ),
        }}/>

<Tab.Screen name="About" component={StudentCourses}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={about}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#849daf' : 'white'
                }}
                />
              </View>
            ),
              
        }}/>

      <Tab.Screen name="Search" component={StudentSearch}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={search}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#849daf' : 'white'
                }}
                />
              </View>
            ),
        }}/>
      <Tab.Screen name="Delete" component={StudentDelete}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={deleted}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#849daf' : 'white'
                }}
                />
              </View>
            ),
        }}/>

    
      <Tab.Screen name="List" component={StudentList}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={list}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#849daf' : 'white'
                }}
                />
              </View>
            ),
              
        }}/>
        
    </Tab.Navigator>
    </SideMenu>
    
  );
}

function SideMenuBar(){
  const navigation = useNavigation();
  return(
<View>
<ImageBackground
                source={schoolgif} 
                resizeMode='cover' 
                style={{
                height: '100%',
                width: '100%'
     }}> 
     <ImageBackground
                opacity={0.88} 
                source={download} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
     }}>

<Text
    style={{
      fontSize: 30,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color:'white',
      left: 5,
      top: 100
    }}
    > MENU</Text>

  <View style={{
    top: 100,
    alignSelf: 'center',
    width: '100%',
    left: 15,
    paddingTop: 10
  }}>

    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> 
    <Text style={styles.sidemenunav}>HOME</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Insert')}> 
    <Text style={styles.sidemenunav}>INSERT</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search')}> 
    <Text style={styles.sidemenunav}>SEARCH</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Delete')}>
    <Text style={styles.sidemenunav}>DELETE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('List')}>
    <Text style={styles.sidemenunav}>DATABASE LIST</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('About')}>
    <Text style={styles.sidemenunav}>ABOUT</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => alert('Page not available!')}>
    <Text style={styles.sidemenunav}>CONTACT</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => alert('Page not available!')}>
    <Text style={styles.sidemenunav}>SERVICES</Text>
    </TouchableOpacity>

  </View>

    
 <View style={{position: 'absolute',top: '74%'}}>        
         <Image 
         source= {hcdclogo}
         style={{ 
         height: 100,
         width: 100,
         left: 30,
         top:45,
         resizeMode: 'center',
         position: 'absolute'
         }}/>

    <Text style={{
      fontSize: 10,
      fontFamily: 'sans-serif',
      fontWeight:'normal',
      fontStyle: "italic",
      top: 150,
      left: 40,
      color: 'white',
      textShadowColor:'#0c0d0e',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:15,
      textAlign: 'center',
    }}>
      HCDC™ SYSTEM{'\n'}SOLUTIONS
    </Text>
</View>
     </ImageBackground>
     </ImageBackground>
   </View>
);
}

export default function Main() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={LoginScreen}/>
          <Stack.Screen name="HomeSecond" component={App}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({navigation}) {
  
  const user = 'henly09';
  const pass = '09108076145145';
  
  const [loginuser, setLoginuser] = useState('');
  const [loginpass, setLoginpass] = useState('');

  onLogin = async() => {
    if (user == loginuser && pass == loginpass){
      ToastAndroid.show("Login Successfully!",ToastAndroid.SHORT);
      console.log("user: "+loginuser +" "+"pass: "+loginpass);
      navigation.navigate("HomeSecond");
    }
    else{
      ToastAndroid.show("Username or Password is Invalid!",ToastAndroid.SHORT);
      console.log("user: "+loginuser +" "+"pass: "+loginpass);
    }
  }
    return (
      <View style={{position: 'absolute', height: '100%',width: '100%'}}>  
          <ImageBackground
                  source={schoolloop} 
                  resizeMode='cover' 
                  style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
       }}/> 
      
        <Text style={styles.bakerytext}> HOLY CROSS OF {"\n"} DAVAO COLLEGE </Text>
  
          <Text style={styles.sysdat}> System Database for Student Management™ </Text>
  
          <Image 
           source= {hcdclogo}
           style={styles.logo}/>
  
           <View style={{alignSelf: 'center', justifyContent: 'center', top: 400,justifyContent: 'space-evenly' }}>
  
           <TextInput
                      placeholder={"Username:"}
                      placeholderTextColor={"white"}
                      style={styles.txtStyle}
                      onChangeText={loginuser=>setLoginuser(loginuser)}
                  />
  
            <TextInput
                      placeholder={"Password:"}
                      placeholderTextColor={"white"}
                      style={styles.txtStyle}
                      secureTextEntry={true}
                      onChangeText={loginpass=>setLoginpass(loginpass)}
                  />
  
           </View>
  
           <View style={{alignSelf: 'center', top: 420}}> 
        
           <TouchableOpacity onPress={onLogin}>
             <Text style={styles.loginbutton}>LOGIN</Text>
           </TouchableOpacity>
           </View> 
  
           <View style={{ 
          flexDirection: 'row', 
          top: '110%', 
          justifyContent: 'space-evenly',
          }}>
  
          <Image source= {fb} style={styles.loginwith}/>
  
          <Image source= {google} style={styles.loginwith}/>
  
          <Image source= {insta} style={styles.loginwith}/>
  
          <Image source= {twitter} style={styles.loginwith}/>
  
          </View>
  
     
        </View>
    );
  }

const styles = StyleSheet.create({
  
  sidemenunav: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color:'white',
    width: '80%',
    paddingTop: 20
  },

  logo: { 
    height: 180,
    width: 180,
    position: 'absolute',
    alignSelf:'center',
    top: 50,
    resizeMode: 'center',
    },

  sysdat: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    position: 'absolute',
    alignSelf:'center',
    top: 325,
    color: 'white',
    textShadowColor:'#0c0d0e',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:15,
    textAlign: 'center'
  },

  bakerytext: {
    fontSize: 35,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    position: 'absolute',
    alignSelf:'center',
    top: 235,
    color: 'white',
    textShadowColor:'#0c0d0e',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:15,
    textAlign: 'center',
  },
  
  txtStyle: {
    fontSize: 14,
    backgroundColor: '#44a8f6',
    height: 45,
    padding: 10,
    width: 280,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderRadius: 10,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white'
  },

  loginbutton: {
    fontSize: 14,
    backgroundColor: '#970f12',
    height: 45,
    padding: 10,
    width: 280,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderRadius: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  loginwith: {
    height: 55,
    width: 55
  }
  
  })