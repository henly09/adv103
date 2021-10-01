import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  TouchableNativeFeedback, 
  Image,  
  SafeAreaView, 
  ImageBackground,
  Alert,
} from 'react-native';
// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import husocom from '../assets/dept/husocom.png';
import bg from '../assets/school.png';

export default function husocomScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={bg}/>

<Text style={{
        fontSize: 25,
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
      }}> College of Humanities Social Sciences & Communication </Text>
 
     <Image
     style={styles.imagebgsecond}
     source={husocom}/>

     <Text style={styles.textimagebgsecond2}>
     Bachelor of Arts in Political Science{'\n'}
     Bachelor of Arts in Communication Specializing in Journalism and Broadcasting{'\n'}
     Bachelor of Arts in Communication Specializing in New Media Studies{'\n'}
     Bachelor of Arts in Communication Specializing in Social Communications{'\n'}
     Bachelor of Arts in Economics{'\n'}
     Bachelor of Arts in History{'\n'}
     Bachelor of Arts in Philosophy{'\n'}
     Bachelor of Science in Psychology{'\n'}
     Bachelor of Science in Social Work{'\n'}
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