// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import * as React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModalDropdown from 'react-native-modal-dropdown';

import StudentInsert from './scr/StudentInsert.js';
import StudentSearch from './scr/StudentSearch.js';
import StudentDelete from './scr/StudentDelete.js';
import StudentList from './scr/StudentList.js';
import dash from './assets/dash.png';
import hcdclogo from './assets/hcdclogo.png';
import school from './assets/school.png';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';


function HomeScreen({ navigation }) {

  const pages = ['Insert', 'Search','Delete', 'StudentList'];

  return (
    <View>
     <ImageBackground 
     source={school} 
     resizeMode="cover" 
     style={{
       height: '100%',
       width: '100%'
     }}>
    
    
      <ModalDropdown 
        style={{
        top: 35,
        width: 100,
        right: 10,
        position: 'relative',
      }}
        options={['Insert', 'Search','Delete', 'Student List']}
        animated
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        dropdownStyle={{
          height: 190,
          width: 130,
          marginBottom: 100,
          marginLeft: 20,
          marginTop: -80,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}

        dropdownTextStyle={{
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: 'sans-serif',
          fontWeight: 'bold'
        }}
        onSelect = {(e)=> navigation.navigate(pages[e])}>

         <Image 
         source= {dash}
         style={{ 
         height: 80,
         width: 80,
         }}/>

        </ModalDropdown>


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
        top: '100%', 
        justifyContent: 'space-evenly',
        }}>

      <Button
        title={"Insert"}
        onPress={() => navigation.navigate('Insert')}
       
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
        title={"Student List"}
        onPress={() => navigation.navigate('StudentList')}
      />

      </View>
      </ImageBackground>
        </View>
  );
}

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#008ce0',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          height: 60,
          width: "100%"
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
                }}
                />
              </View>
            ),
        }}/>

    
      <Tab.Screen name="StudentList" component={StudentList}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={list}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
              
        }}/>
        
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

