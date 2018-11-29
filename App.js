import React, { Component } from 'react';
import { View, Text , ImageBackground, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Login from './Pages/Login'
import Register from './Pages/Register'


const RootStack = createStackNavigator({
    Login:{
      screen : Login
    },
    Register:{
    screen: Register
    }
},{initialRouteName:'Register'} )


export default class App extends Component {

  render() {
    return (
       <RootStack/>
    );
  }
}



