import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'
import BackButton from '../Includes/BackButton'
import Logo from '../../../assets/logo.png'

export default class LoginComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:""
        };
        console.log('Login mounted');
    }
    
    goToSignup = ()=>{
        this.props.navigation.navigate('Signup');
    }

    goToForgotPassword = ()=>{
        this.props.navigation.navigate('Forgot');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContent}>
                    <View style={styles.logoContent}>
                        <Image style={styles.logo} source={Logo} />
                        <Text style={[{fontSize: 44}, styles.LogoText]}>FastFood</Text>
                    </View>
                    <View style={styles.loginForm}>
                        <View style={{width:'100%',marginBottom:5}}>
                            <TextInput
                                style={styles.loginInputs}
                                textContentType="emailAddress"
                                underlineColorAndroid="transparent"
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                                placeholder="Email or phone"
                            />
                        </View>
                        <View style={{width:'100%',marginBottom:5}}>
                            <TextInput
                                style={styles.loginInputs}
                                underlineColorAndroid="transparent"
                                onChangeText={(email) => this.setState({email})}
                                secureTextEntry={true}
                                value={this.state.email}
                                placeholder="Password"
                            />
                        </View>
                        <View style={{width:'100%',display:'flex',alignItems:'center',marginTop:30}}>
                            <LinearGradient
                            colors={['#FF504A', '#FF3E60', '#FF3866']}
                            style={{ alignItems: 'center', borderRadius: 5, width:'60%', height:39 }}>
                                <TouchableOpacity  style={styles.loginButton} onPress={()=>{}}>
                                    <Text style={{color:"#fff",fontSize:14,textAlign:'center'}}> Login </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <BackButton to={()=>this.props.navigation.goBack()} />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{fontSize:16,color:'#FF3F5F'}} onPress={this.goToForgotPassword}>
                            Forgot your password?
                        </Text>
                        <Text style={{fontSize:16,color:'#B6B6B6'}}>
                            Don`t have accound? <Text style={{fontWeight:'bold',color:"#FF3F5F"}} onPress={this.goToSignup}>Create one</Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginContent: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
    },
    logoContent: {
        flex: 3,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height:100,
        width: 95
    },
    LogoText:{
        fontFamily: 'dupree',
        color:"#FF3D47"
    },
    loginForm: {
        flex: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    loginInputs: {
        height: 48, 
        borderColor: 'gray', 
        borderRadius: 15,
        borderWidth: 1,
        fontSize: 21,
        paddingHorizontal: 5,
        padding: 3,
    },
    loginButton:{  
        height:33,
        backgroundColor:'transparent',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width:'100%'
    },
    footer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    }
});
