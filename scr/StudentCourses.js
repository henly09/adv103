// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { View,Text, TouchableNativeFeedback, Image, ImageBackground,StyleSheet,SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import busmanScreen from './busman.js';
import cetsoScreen from './cetso.js';
import crimScreen from './crim.js';
import educScreen from './educ.js';
import husocomScreen from './husocom.js';
import maritimeScreen from './maritime.js';
import hotoumanScreen from './hotouman.js';

import busman from '../assets/thumbnails/busman.png';
import cetso from '../assets/thumbnails/cetso.png';
import crim from '../assets/thumbnails/crim.png';
import educ from '../assets/thumbnails/educ.png';
import husocom from '../assets/thumbnails/husocom.png';
import maritime from '../assets/thumbnails/maritime.png';
import hotouman from '../assets/thumbnails/hotouman.png';
import bg from '../assets/school.png';


function CourseScreen({ navigation }) {
    return (
       <SafeAreaView>
        <View>
        <ImageBackground
                   opacity={0.5}
                   style={styles.imagebackground}
                   source={bg}/>
       </View>

       <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'flex-start',
        top:60,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center',
        left: 20
      }}> DEPARTMENTS  </Text>

       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('busman')}>    
           <Image 
           style={styles.studentlogo1}
           source={busman}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.navigate('cetso')}>
           <Image 
          style={styles.studentlogo2}
           source={cetso}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('crim')}> 
           <Image 
           style={styles.studentlogo1}
           source={crim}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.navigate('educ')}> 
           <Image 
           style={styles.studentlogo2}
           source={educ}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('husocom')}>
           <Image 
            style={styles.studentlogo1}
           source={husocom}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.navigate('maritime')}>
           <Image style={styles.studentlogo2}
           source={maritime}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('hotouman')}>
           <Image 
           style={styles.studentlogo1}
           source={hotouman}/>
       </TouchableNativeFeedback>
       </View>
       </SafeAreaView>
     );
   }

const Stack = createNativeStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Course" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Course" component={CourseScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="busman" component={busmanScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="cetso" component={cetsoScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="crim" component={crimScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="educ" component={educScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="husocom" component={husocomScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="maritime" component={maritimeScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="hotouman" component={hotoumanScreen} options={{ cardStyleInterpolator: forFade }}/>  
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  
  studentlogo1: {
    height: 135, 
    width: 145,
    marginRight: 13,
    margin: 2, 
    borderRadius: 15, 
    resizeMode: 'contain',
  }, 
  
  studentlogo2: {
    height: 135, 
    width: 145,
    marginLeft: 13,
    margin: 2, 
    borderRadius: 15, 
    resizeMode:'contain',
  },
  
  arrangement: {
    flexDirection: 'row', 
    justifyContent: 'center',
    top: 130,
  },
  
  imagebackground: {
    height: 800,
    width: 500,
    backgroundColor: 'black',
    position: 'absolute',
  },
  
  })
