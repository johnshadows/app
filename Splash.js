import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={require('./image/bg.png')} style={styles.bg} >
        <View>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  bg:{
    width:'100%',
    height:'100%'
  }
})