import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Settings</Text>
        <View style={styles.container2}>
            <Text style={styles.settingsText}>Microphone</Text>
            <Text style={styles.settingsText}>Voice Recongition</Text>
            <Text style={styles.settingsText}>Visual Aid</Text>
            <Text style={styles.settingsText}>Verbal Descriptors</Text>
            <Text style={styles.settingsText}>Emergency Aid</Text>
            <Text style={styles.settingsText}>Notifications</Text>
            <Text style={styles.settingsText}>Help</Text>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Log Out</Text>
            </TouchableOpacity>
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
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    settingsText:{
        fontSize:20,
        marginBottom:10
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
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
      marginBottom:10,
      marginLeft:50
    },
    loginText:{
      color:"white"
    }
});