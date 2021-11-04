import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';
// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import maritime from '../assets/dept/maritime.png';
import bg from '../assets/school.png';

export default function maritimeScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={bg}/>

<Text style={{
        fontSize: 30,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'flex-start',
        top:90,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center',
      }}> College of Maritime Education </Text>
 
     <Image
     style={styles.imagebgsecond}
     source={maritime}/>
     <Text style={styles.textimagebgsecond2}>
     Bachelor of Science in Marine Transportation
    </Text>

   </View>
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  
    imagebackground: {
        height: 800,
        width: 420,
        backgroundColor: 'black',
        position: 'absolute',
      },
      
      imagebgsecond: {
          borderWidth: 5,
          borderRadius: 13,
          height: 215,
          width: 290,
          alignSelf: 'center',
          resizeMode: 'stretch',
          top: 180
        },
      
      textimagebgsecond2: {
          position: 'absolute',
          textAlign: 'justify', 
          color: 'white', 
          top: 420,
          fontSize: 15,
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          fontStyle: 'italic',
          margin: 5,
          fontWeight: 'bold'
      },
})