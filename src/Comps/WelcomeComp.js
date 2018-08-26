import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo'
import Logo from '../../assets/logo.png'

export default class WelcomeComp extends Component {
    constructor(props){
        super(props);
        this.state = {
			gotToSignup:false
		};
	}

	presetButton = ()=>{   
		this.setState({
			gotToSignup:true
		}); 
		setTimeout(()=>{
			this.setState({
				gotToSignup:false
			});
				this.props.navigation.navigate('Login');
		}, 600);
	}
    
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.LogoContent}>				
				{
					!this.state.gotToSignup ? (
						<View style={{alignItems:'center'}}>
							<Image source={Logo} />
							<Text style={ styles.LogoText }>Order Your</Text>
							<Text style={[{fontSize: 64}, styles.LogoText]}>FastFood</Text>
						</View>
					) : (
						<View>
							<ActivityIndicator size="large" color="#FA3F48" />
						</View>
					)
				}
            </View>
            <View styles={styles.footerButton}>
				<View style={{alignItems:'center'}}>
					<LinearGradient
					colors={['#FF504A', '#FF3E60', '#FF3866']}
					style={{ alignItems: 'center', borderRadius: 5 }}>
						<TouchableOpacity  style={styles.getStartButton} onPress={this.presetButton}>
							<Text style={{color:"#fff"}}> Get Start </Text>
						</TouchableOpacity>
					</LinearGradient>   
					<LinearGradient
					colors={['#FF504A', '#FF3E60', '#FF3866']}
					style={{ alignItems: 'center', borderRadius: 5, marginTop:10 }}>
						<TouchableOpacity  style={styles.getStartButton} onPress={this.props.screenProps.login}>
							<Text style={{color:"#fff"}}> Test login </Text>
						</TouchableOpacity>
					</LinearGradient>         
				</View>
            </View>
          </View>
        );
      }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	LogoContent:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		height: (height * 75) / 100
	},
	LogoText:{
		fontFamily: 'dupree',
		color:"#FF3D47"
	},
	LogoTextLarge:{
		fontSize: 34,
	},
	footerButton:{
		backgroundColor: "#007ACC",
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		height: (height * 25) / 100
	},
	getStartButton:{  
		backgroundColor:'transparent',
		paddingHorizontal: 20,
		paddingVertical: 10,
	}
});