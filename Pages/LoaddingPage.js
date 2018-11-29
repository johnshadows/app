import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

export default  class Loadding extends Component {


  render() {
    return (
      <ImageBackground source={require('../image/bg.png')} style={{ width: '100%', height: '100%' }} >
        <View style={styles.container} >
          <Image source={require('../image/Logo.png')}
            style={{
              width: 150,
              height: 150,
              shadowColor: "rgba(0, 0, 0, 0.31)"
            }} />
          <Text 
          style={styles.Text}
          >Forex City Thailand</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    width: 202,
    height: 37,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"

  }
})



