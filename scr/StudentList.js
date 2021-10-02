import React, { Component } from 'react';
import school from '../assets/school.png';
import { Image,Button,StyleSheet, FlatList, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
import hcdclogo from '../assets/hcdclogo.png';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import busman from '../assets/thumbnails/busman.png';
import cetso from '../assets/thumbnails/cetso.png'; 
import crim from '../assets/thumbnails/crim.png'; 
import educ from '../assets/thumbnails/educ.png'; 
import hotouman from '../assets/thumbnails/hotouman.png'; 
import husocom from '../assets/thumbnails/husocom.png'; 
import maritime from '../assets/thumbnails/maritime.png'; 

export default class StudentList extends Component {

    constructor()
    {
      super();
      this.state = { 
      isLoading: true,
      dataSource:[],
      isFetching:false
    }
    }

    componentDidMount() {
        return fetch('http://10.0.2.2:80/Final_Proj/displayall.php')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson
            })  
          });
      }

      onRefresh() {
        this.setState({isFetching: true,},() => {this.componentDidMount();});
        this.setState({ isFetching: false })
    }
    
     _renderItem = ({ item }) => {

      thumbnail = item.student_course;
     
      const dept = [
       busman,
       cetso,
       crim,
       educ,
       hotouman,
       husocom,
       maritime];
     
     var e;
     var thumbnail;
     
     if ( thumbnail == 'Bachelor of Science in Criminology(BSC)'){e=2;}

     if ( 
     thumbnail == 'Bachelor of Library and Information Science(BLIS)'|| 
     thumbnail == 'Bachelor of Science in Computer Engineering(BSCE)'||
     thumbnail == 'Bachelor of Science in Electronics Engineering(BSEE)'||
     thumbnail == 'Bachelor of Science in Information Technology(BSIT)'){e=1;}

     if ( 
     thumbnail == 'Bachelor of Science in Hospitality Management(BSHM)'||
     thumbnail == 'Bachelor of Science in Tourism Management(BSTM)'){e=4;}

     if ( 
     thumbnail == 'Bachelor of Arts in Communication Specializing in Journalism and Broadcasting(BACS(JB))'||
     thumbnail == 'Bachelor of Arts in Communication Specializing in New Media Studies(BACS(NMS))'||
     thumbnail == 'Bachelor of Arts in Communication Specializing in Social Communications(BACS(SC))'||
     thumbnail == 'Bachelor of Arts in Economics(BAE)'||
     thumbnail == 'Bachelor of Arts in History(BAP)'||
     thumbnail == 'Bachelor of Arts in Philosophy(BSP)'||
     thumbnail == 'Bachelor of Science in Psychology(BSSW)'){e=5;}

     if ( thumbnail == 'Bachelor of Science in Marine Transportation(BSMT)'){e=6;}

     if ( 
      thumbnail == 'Bachelor of Science in Accountancy(BSA)'||
      thumbnail == 'Bachelor of Science in Business Administration Major in Financial Management(BSBA(FM))'||
      thumbnail == 'Bachelor of Science in Business Administration Major in Human Resource Management(BSBA(HRM))'||
      thumbnail == 'Bachelor of Science in Business Administration Major in Marketing Management(BSBA(MM))'||
      thumbnail == 'Bachelor of Science in Customs Administration(BSCA)'||
      thumbnail == 'Bachelor of Science in Management Accounting(BSMA)'||
      thumbnail == 'Bachelor of Science in Real Estate Management(BSREM)'){e=0;}

      if ( 
        thumbnail == 'Bachelor of Elementary Education(BEE)'||
        thumbnail == 'Bachelor of Physical Education(BPE)'||
        thumbnail == 'Bachelor of Secondary Education Major in English(BSE(E))'||
        thumbnail == 'Bachelor of Secondary Education Major in Filipino(BSE(F))'||
        thumbnail == 'Bachelor of Secondary Education Major in Mathematics(BSE(M))'||
        thumbnail == 'Bachelor of Secondary Education Major in Science(BSE(S))'||
        thumbnail == 'Bachelor of Secondary Education Major in Social Studies(BSE(SS))'||
        thumbnail == 'Bachelor of Secondary Education Major in Values Education with Catechetics(BSE(ValEd/wC))'||
        thumbnail == 'Bachelor of Special Needs Education Generalist(BSNEG)'){e=3;}

      return(
        <TouchableOpacity onPress={() => alert(item.body)}>
          <View>
            <View style={styles.item}>
                <Text style={styles.text}>StudentID#:{item.StudentID}, Name:{item.student_name}, {'\n'}Course:{item.student_course}</Text>
            </View>
          <Image style= {styles.thumbnail}source={dept[e]}/>
          </View>
        </TouchableOpacity>
     );}

        render() {
 
            if (this.state.isLoading) {
              return (
                <View style={styles.container}>
                  <ActivityIndicator size="large" animating/>
                </View>
              )
            }
            else {
     
            return (
              <View>
                        <ImageBackground
                   opacity={0.5}
                   style={styles.imagebackground}
                   source={school}/>

          <Image 
         source= {hcdclogo}
         style={{ 
         height: 100,
         width: 100,
         position: 'absolute',
         alignSelf:'flex-end',
         right: 40,
         top: 65,
         resizeMode: 'center',
         }}/>

        <Text style={{
        fontSize: 50,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 70,
        left: 6.5,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> STUDENT </Text>         

        <Text style={{
        fontSize: 30,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 120,
        left: 10,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE </Text>
                <View style={styles.container}>     
                       <FlatList
                          style={{padding: 5, width: '100%'}}
                          data={ this.state.dataSource }  
                          onRefresh={() => this.onRefresh()}
                          refreshing={this.state.isFetching}         
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => index.toString()}
                        />                
                </View>
                <View style={{
  width: 100,
  height: 50,
  position: 'absolute',
  top: 670,
  left: 150,
}}>

      
</View>

                </View>
                            
                    );
                  }
                }
                }
                 
                const styles = StyleSheet.create({
                 
                  container :{
                    alignItems:'center',
                    backgroundColor: '#F5FCFF',
                    textAlign: 'center',
                    top:180,
                    height: '82%',
                    width: '90%',
                    left: '5%',
                    padding: 10

                    },
                   
                item:{
                  borderBottomWidth:3,
                  borderBottomColor: '#eee',
                  width: '90%',
                  padding :10,
                  left: 50
                    },
                    
                text:{
                  fontSize: 15,
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  fontStyle: "italic",
                    },

                thumbnail:{
                      resizeMode: 'center',
                      position: 'absolute',
                      height: 50, 
                      width: 50, 
                      top: 15,
                      backgroundColor:'#630513',
                   },
                   imagebackground: {
                    height: 755,
                    width: 500,
                    backgroundColor: 'black',
                    position: 'absolute',
                  },
                });