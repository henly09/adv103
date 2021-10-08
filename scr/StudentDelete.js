import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import { 
    Text,
    View,  
    ActivityIndicator, 
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image
} from 'react-native';
import hcdclogo from '../assets/hcdclogo.png';
import school from '../assets/school.png';
import busman from '../assets/thumbnails/busman.png';
import cetso from '../assets/thumbnails/cetso.png'; 
import crim from '../assets/thumbnails/crim.png'; 
import educ from '../assets/thumbnails/educ.png'; 
import hotouman from '../assets/thumbnails/hotouman.png'; 
import husocom from '../assets/thumbnails/husocom.png'; 
import maritime from '../assets/thumbnails/maritime.png'; 
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class StudentDelete extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            StudentID:''
        }
        this.state = { 
            isLoading: true,
            dataSource:[],
            isFetching:false
          }
    }

/*------------------------------------------------------------------------------*/
    DeleteRecord=()=>
    {
        var StudentID=this.state.StudentID;

        if(StudentID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/Final_Proj/delete.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                StudentID:StudentID
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                    this.componentDidMount();
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })

        }
    }
/*------------------------------------------------------------------------------*/

componentDidMount = async() => {
    this.setState({ isLoading: true });
    try {  
     const responseJson = await fetch('http://10.0.2.2:80/Final_Proj/displayall.php')
     const json = await responseJson.json();
        this.setState({
          isLoading: false,
          dataSource: json
        })  
    } catch(error) { 
        console.log(error);
        this.setState({ isLoading: false });
    }
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
   );
 }

/*------------------------------------------------------------------------------*/
    render()
    {
        if (this.state.isLoading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator size="large" animating/>
              </View>
            )
          }
          else{
    return (
        <View>
        <ImageBackground
                   opacity={0.5}
                   style={styles.imagebackground}
                   source={school}/>
        
        <Image 
         source= {hcdclogo}
         style={{ 
         height: 95,
         width: 95,
         position: 'absolute',
         alignSelf:'center',
         top: 40,
         resizeMode: 'center',
         }}/>


        <View style={styles.viewStyle}>

        <View style= {{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
            <TextInput
                placeholder={"Enter Student ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle3}
                onChangeText={StudentID=>this.setState({StudentID})}
            />

    <TouchableOpacity
                    onPress={() => this.DeleteRecord()}>
                    <Text style={styles.button}>DELETE</Text>
    </TouchableOpacity>
    </View>

            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{padding: 10, width: '100%',borderRadius: 5}}
                      data={ this.state.dataSource }
                      onRefresh={() => this.onRefresh()}
                      refreshing={this.state.isFetching}        
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />                
            </SafeAreaView>
        </View>
        </View>
    );
    }
}
}

const styles=StyleSheet.create({

    viewStyle:
    {
        padding:20,
        top: '22%',
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'black',
        backgroundColor: 'white',
        padding: 10,
    },
      
    container :{
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        height: 485,
        width: '100%'
        },

    item:{
        borderBottomWidth:3,
        borderBottomColor: '#eee',
        width: '100%',
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
            backgroundColor:'#630513'
    },
    imagebackground: {
        height: 800,
        width: 500,
        backgroundColor: 'black',
        position: 'absolute',
      },
    txtStyle3:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 245,
        marginRight: 5
    },
    button:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
        backgroundColor: '#048ce4',
        fontSize: 14,
        height: 48,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 3,
        paddingTop:14
    },



});

