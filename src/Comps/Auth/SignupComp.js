import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { Font, LinearGradient } from 'expo'
import BackButton from '../Includes/BackButton'
import Logo from '../../../assets/logo.png'

export default class SignupComp extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.logoContent}>
					<Image style={styles.logo} source={Logo} />
					<Text style={[{fontSize: 28}, styles.LogoText]}>FastFood</Text>
				</View>
				<View style={styles.loginForm}>
					<View style={{width:'100%',marginBottom:5}}>
						<TextInput
							style={styles.loginInputs}
							underlineColorAndroid="transparent"
							onChangeText={(val) => val}
							value={this.state.email}
							placeholder="Full Name"
						/>
					</View>
					<View style={{width:'100%',marginBottom:5}}>
						<TextInput
							style={styles.loginInputs}
							textContentType="emailAddress"
							underlineColorAndroid="transparent"
							onChangeText={(val) => val}
							keyboardType="email-address"
							value={this.state.email}
							placeholder="Email"
						/>
					</View>
					<View style={{width:'100%',marginBottom:5}}>
						<TextInput
							style={styles.loginInputs}
							textContentType="emailAddress"
							underlineColorAndroid="transparent"
							onChangeText={(val) => val}
							value={this.state.email}
							placeholder="Phone Numbre"
						/>
					</View>
					<View style={{width:'100%',marginBottom:5}}>
						<TextInput
							style={styles.loginInputs}
							textContentType="emailAddress"
							underlineColorAndroid="transparent"
							onChangeText={(val) => val}
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
								<Text style={{color:"#fff",fontSize:14,textAlign:'center'}}> Signup </Text>
							</TouchableOpacity>
						</LinearGradient>
						<BackButton to={()=>this.props.navigation.goBack()} />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	logoContent: {
		flex: 2,
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
});