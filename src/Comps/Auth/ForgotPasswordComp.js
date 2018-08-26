import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'
import BackButton from '../Includes/BackButton'
import Logo from '../../../assets/logo.png'

export default class ForgotPasswordComp extends Component {
	constructor(){
		super();
		this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContent}>
					<Image style={styles.logo} source={Logo} />
					<Text style={[{fontSize: 44}, styles.LogoText]}>FastFood</Text>
					
					<Text style={styles.infoText}>Enter the email address you are use and</Text>
					<Text style={styles.infoText}>you will receive an email containing a</Text>
					<Text style={styles.infoText}>link for changing your password</Text>
				</View>
				<View style={styles.formContent}>
					<View style={{width:'100%',marginBottom:5}}>
						<TextInput
							style={styles.loginInputs}
							underlineColorAndroid="transparent"
							onChangeText={(email) => this.setState({email})}
							value={this.state.email}
							placeholder="Email"
						/>
					</View>
					<View style={{width:'100%',display:'flex',alignItems:'center',marginTop:30}}>
						<LinearGradient
						colors={['#FF504A', '#FF3E60', '#FF3866']}
						style={{ alignItems: 'center', borderRadius: 5, width:'60%', height:39 }}>
							<TouchableOpacity  style={styles.loginButton} onPress={()=>{}}>
								<Text style={{color:"#fff",fontSize:14,textAlign:'center'}}> Send </Text>
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
	container: {
        flex: 1
    },
	logoContent:{
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo:{
        height:100,
        width: 95
    },
	LogoText:{
        fontFamily: 'dupree',
        color:"#FF3D47"
	},
	infoText:{
		color:"#888888"
	},
	formContent:{
		flex: 1,
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