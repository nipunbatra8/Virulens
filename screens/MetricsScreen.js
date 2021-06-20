import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Metrics Display</Text>
        <View style={styles.inputView}>
          <Text style={{fontSize:20}}>Heart Rate</Text>
          <Text style={styles.inputText}>95</Text>
          <Text style={{fontSize:15}}>bpm</Text>
        </View>
        <View style={styles.inputView}>
          <Text style={{fontSize:20}}>Blood Oxygen</Text>
          <Text style={styles.inputText}>95%</Text>
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
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:100,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    alignItems:'center'
  },
  inputText:{
    fontSize:40,
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