import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MetricsScreen from './MetricsScreen'
import Settings from './Settings'
import ProfileScreen from './ProfileScreen'
import DataScreen from './DataScreen'

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  render() {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Home Screen</Text>
        // </View>
        <Tab.Navigator
            tabBarOptions={{
            labelPosition: "beside-icon",
            style: {backgroundColor: "black",},
            labelStyle: {
                fontSize: 15,
            },
            tabStyle: {
                fontSize: 10,
            },
        }}>
            <Tab.Screen name="Metrics" component={MetricsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Data" component={DataScreen} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
  }
}