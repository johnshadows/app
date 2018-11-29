import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import axios from 'axios'
class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    }
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            conpassword: ""
        }
    }
    onPressedRegister = () => {


        fetch('http://192.168.64.2/server/user_registeration.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.username,
                email: this.state.email,
                password: this.state.password,
                conpassword: this.state.conpassword
            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            })
            .catch((error) => {
                console.error(error);
            });


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
                        >ลงทะเบียน</Text>
                        <TextInput
                            onChangeText={username => { this.setState({ username }) }}
                            autoCapitalize='none'
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
                            onChangeText={email => { this.setState({ email }) }}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            spellCheck={false}
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
                            placeholder="อีเมล"
                        >
                        </TextInput>
                        <TextInput
                            onChangeText={password => { this.setState({password }) }}
                            autoCapitalize='none'
                            secureTextEntry={true}
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
                        <TextInput
                            onChangeText={conpassword => { this.setState({ conpassword:conpassword }) }}
                            autoCapitalize='none'
                            secureTextEntry={true}
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
                            placeholder="ยืนยันรหัสผ่าน"
                        >
                        </TextInput>
                        <Image source={require('../image/li.png')} style={{
                            marginTop: 48,
                            width: 335,
                            height: 0,
                            backgroundColor: "#557687",
                            borderWidth: 0.5,
                            borderColor: "rgba(255, 255, 255, 0.3)"
                        }} />
                        <TouchableOpacity onPress={this.onPressedRegister} style={{ marginTop: 31 }}>
                            <Image
                                source={require('../image/buttonRRG.png')}
                            />
                            <Text style={{
                                position: 'absolute',
                                marginHorizontal: 133,
                                marginTop: 12,
                                fontSize: 18,
                                fontWeight: "600",
                                fontStyle: "normal",
                                lineHeight: 27,
                                letterSpacing: 0,
                                color: "#ffffff"
                            }}>ลงทะเบียน</Text>
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

})


export default Register;
