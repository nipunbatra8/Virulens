import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.logo}>Profile</Text>
        </View>
        <View>
            <Avatar
                rounded
                source={{
                uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
                size="large"
            />

            <Badge
                status="success"
                containerStyle={{ position: 'absolute', bottom: -0.2, right: -0.2 }}
                value="+"
            />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.placeholder}>Name</Text>
          <TextInput  
            style={styles.inputText}
            >John Doe</TextInput>
        </View>
        <View style={styles.inputView}>
            <Text style={styles.placeholder}>Location</Text>
          <TextInput  
            style={styles.inputText}
            >Los Angles, CA</TextInput>
        </View>
        <View style={styles.inputView}>
            <Text style={styles.placeholder}>COVID Vaccine Verification</Text>
          <TextInput  
            style={styles.inputText}
            >Upload</TextInput>
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
      marginBottom:20
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:70,
      justifyContent:"center",
      padding:20,
      marginTop:40
    },
    inputText:{
      height:50,
      color:"white"
    },
    placeholder:{
        color:"#8588a8",
        marginBottom:-10
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