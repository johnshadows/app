import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicatorIOS, AsyncStorage, Alert } from 'react-native';

class Login extends Component {

  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  onLoginPressed() {
    const { username, password } = this.state
    Alert.alert(`Username:${username}  password:${password}`)
  }

  onRegisterPressed() {
    Alert.alert(this.state.password)
  }


  render() {
    return (
      <ImageBackground source={require('../image/bg.png')} style={{ width: '100%', height: '100%' }} >
        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
          <View style={styles.container} >
            <Image source={require('../image/logosmall.png')}
              style={{
                width: 72,
                height: 72,
                shadowColor: "rgba(0, 0, 0, 0.2)",
              }} />
            <Text
              style={{
                width: 146,
                height: 37,
                fontSize: 24,
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: 22,
                letterSpacing: 0,
                textAlign: "center",
                color: "#ffffff"
              }}
            >ลงชื่อเข้าใช้งาน</Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ username: text })}
              style={{
                marginTop: 19,
                width: 335,
                height: 37,
                borderRadius: 5,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.3)",
                padding: 10
              }}
              placeholderTextColor='white'
              placeholder="ชื่อผู้ใช้งาน"
            >
            </TextInput>
            <TextInput
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ password: text })}
              style={{
                marginTop: 19,
                width: 335,
                height: 37,
                borderRadius: 5,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.3)",
                padding: 10
              }}
              placeholderTextColor='white'
              placeholder="รหัสผ่าน"
            >
            </TextInput>
            <TouchableOpacity style={styles.buttonlogin} onPress={this.onLoginPressed.bind(this)}>
              <Text
                style={{
                  width: 65,
                  height: 26,
                  fontSize: 16,
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: 27,
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: "#ffffff",
                  marginHorizontal: 136,
                  marginVertical: 8
                }}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonloginfb}>
              <View style={{
                flex: 1, flexDirection: 'row', flex: 1,
                flexDirection: 'row',
                borderRadius: 5,
                padding: 5,
                marginTop: 5,
                marginBottom: 5,
              }}>
                <Image source={require('../image/fa.png')} style={{
                  marginLeft: 62,
                }} />
                <Text style={{
                  width: '100%',
                  height: 26,
                  fontSize: 16,
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: 27,
                  letterSpacing: 0,
                  textAlign: "left",
                  color: "#ffffff",
                  marginLeft: 10,
                }}>เข้าสู่ระบบด้วย Facebook</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonloginrg} onPress={this.onRegisterPressed.bind(this)}>
              <Text style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: 27,
                letterSpacing: 0,
                textAlign: "left",
                color: "#ffffff",
                marginHorizontal: 37,
                marginVertical: 8,
              }}>ยังไม่เคยมีบัญชีใช่ไหม?  สร้างบัญชีตอนนี้</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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

  },
  buttonlogin: {
    width: 335,
    height: 42,
    borderRadius: 100,
    marginTop: 50,
    backgroundColor: "#282e33"
  },
  buttonloginfb: {
    width: 335,
    height: 42,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: "#4464a2"
  },
  buttonloginrg: {
    width: 335,
    height: 42,
    borderRadius: 100,
    marginTop: 62,
    backgroundColor: "#2185d8"

  }
})


export default Login;
