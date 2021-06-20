import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Data</Text>
        <View style={styles.inputView}>
          <Text style={{fontSize:20}}>Risk</Text>
          <Text style={styles.logo2}>95%</Text>
        </View>
        <View style={styles.container2}>
            <View style={styles.inputView2}>
                <Text style={{fontSize:20}}>COVID Tracing Status</Text>
            </View>
            <View style={styles.inputView2}>
                <Text style={styles.logo3}>95%</Text>
                <Text>of people are vaccinated in your area</Text>
            </View>
        </View>
        <View style={styles.container2}>
            <View style={styles.inputView2}>
                <Text style={{fontSize:20}}>Outbreak Areas</Text>
            </View>
            <View style={styles.inputView2}>
                <Text style={{fontSize:19}}>Log of Symptoms</Text>
                <Text style={{color:"#8588a8"}}>(from the past 5 days)</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:25
    },
    logo2:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
    },
    logo3:{
        fontWeight:"bold",
        fontSize:30,
        color:"#fb5b5a",
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:120,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      alignItems:'center'
    },
    inputView2:{
        width:"35%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:120,
        marginBottom:20,
        marginRight:20,
        marginLeft:20,
        justifyContent:"center",
        padding:20,
        alignItems:'center'
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
});