import React, { Component } from 'react'
import { Button } from 'react-native'
import {createDrawerNavigator} from 'react-navigation'
import { Icon } from 'react-native-elements'
import MenuListComp from './MenuListComp'
import MainSidebar from '../Includes/MainSidebar'
  
const MyNotificationsScreen = (props)=>{
	return (
		<Button onPress={() => props.navigation.goBack()} title="Go back home" />
	);
}

const OffersScreen = (props)=>{
	return (
		<Button onPress={() =>props.navigation.navigate('Menu')} title="Go to menu" />
	);
}

const LastOrdersCreen = (props)=>{
	props.screenProps.CartItems().then(res=>{
		console.log(res)
	})
	return (
		<Button onPress={() =>props.navigation.navigate('Menu')} title="Go to menu" />
	);
}

const FavoritesScreen = (props)=>{
	return (
		<Button onPress={() =>props.navigation.navigate('Menu')} title='Go to menu' />
	);
}

const SettingsScreen = (props)=>{
	return (
		<Button onPress={()=>props.navigation.navigate('Menu')} title='Go to menu' />
	);
}

const SupportScreen = (props)=>{
	return (
		<Button onPress={()=>props.navigation.navigate('Menu')} title='Go to menu' />
	);
}
  
const MyApp = createDrawerNavigator({
	Menu: {
		screen: MenuListComp,
		navigationOptions: {
			drawerLabel: 'Menu',
			drawerIcon: ({ tintColor }) => (<Icon name='cutlery' type='font-awesome' color={tintColor} />),
		}
	},
	Notifications: {
		screen: MyNotificationsScreen,
		navigationOptions:{
			drawerLabel:'Notifications',
			drawerIcon: ({ tintColor }) => (<Icon name='bell' type='font-awesome' color={tintColor} />),
		}
	},
	Offers: {
		screen: OffersScreen,
		navigationOptions: {
			drawerLabel: 'Offers',
			drawerIcon: ({tintColor})=>(<Icon name='tag' type='font-awesome' color={tintColor} />)
		}
	},
	LastOrders: {
		screen:LastOrdersCreen,
		navigationOptions: {
			drawerLabel:'Last Orders',
			drawerIcon:({tintColor})=>(<Icon name='history' type='font-awesome' color={tintColor} />)
		}
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			drawerLabel: 'Favorites',
			drawerIcon:({tintColor})=>(<Icon name='star' type='font-awesome' color={tintColor} />)
		}
	},
	Settings: {
		screen:SettingsScreen,
		navigationOptions: {
			drawerLabel: 'Settings',
			drawerIcon:({tintColor})=>(<Icon name='cog' type='font-awesome' color={tintColor} />)
		}
	},
}, {
	contentComponent: MainSidebar,
	activeTintColor:"#FF3D47",
	drawerBackgroundColor: "rgba(255,255,255,.9)"
});

export default MyApp;