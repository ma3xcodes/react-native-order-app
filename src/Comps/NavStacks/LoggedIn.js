import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeComp from '../App/HomeComp'
import CartListComp from '../App/CartListComp'
import { Header, CartIcon } from '../Includes/MainHeader'
import { Icon } from 'react-native-elements'

const styles = {};
class headProps extends Component{
  constructor(props){
	super(props);
  }
}

const LoggedIn = createStackNavigator(
  {
	Home: { 
		screen: HomeComp,             
	},
	MenuList: {
		screen: CartListComp,
		navigationOptions: ({ navigation })=>{
			return {
				headerLeft: <Icon name="arrow-left" type="font-awesome" size={24} onPress={() => {
					navigation.goBack();
				}} />
			}
		}
	}
  },
  {
	initialRouteName: 'Home',
	navigationOptions:({ navigation })=>{  
	  //console.log(navigation.getScreenProps())
	  const screenProps = navigation.getScreenProps();

	  return {
		headerTitle: <Header title="Menu" />,
		headerLeft: <Icon name="menu" type="material-community" size={24} onPress={() => {
		  navigation.toggleDrawer()
		}} />,
		headerRight: <CartIcon navigate={navigation.navigate} screenProps={screenProps} />,
		headerLeftContainerStyle: {
		  paddingHorizontal: 10,
		},
		headerRightContainerStyle: {
		  paddingHorizontal: 10,
		}
	  }
	},
  },
);

export default LoggedIn;