import React, { Component } from 'react'
import { Text, View, ScrollView, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Alert } from 'react-native'
import Async from 'react-promise'
import { Icon } from 'react-native-elements'
import Logo from '../../../assets/logo.png'

const accessKey = '4e7d3afa3a8584b68c08f55c3acb05196c77fa8ddc8ab5d58178977e07645a83'
const secretKey = '220220f75cf4d50146801f45dadfcc0638d6498f21751ca13d0258ddf5a8ac64'
const apiUrl = 'https://api.unsplash.com/'

export default class MenuListComp extends Component {
	constructor(){
		super();
		this.state = {}
	}
	getQueryFood = async ()=>{
		return await fetch(`${apiUrl}photos/random?client_id=${accessKey}&query=food&count=20`)
		.then(resp=>{
			if(!resp.ok){
				Alert.alert(
					`Error ${resp.status}`,
					`${resp.statusText}`,
				)
			}
			return resp.json();
		})
		.then(res=>res)
		.catch((err)=>{
			console.log(err)
		});
	}
	onPressAddCartItem = (item)=>{
		this.props.screenProps.addCartItem(item);
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={{flex:2,flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',backgroundColor:'#fff',elevation:5}}>
					<ImageBackground style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} resizeMode="cover" onPress={()=>{console.log('Image presed')}} source={require("../../../assets/foodbanner.png")}>
						<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor: 'rgba(251, 64, 74,.1)',width:'100%',height:'100%',paddingHorizontal:20}}>
							<View style={{flex:1}}>
								<Image style={{height:100,width: 95}} source={Logo} />
							</View>
							<View style={{flex:2,}}>
								<Text style={{fontFamily:'dupree',color:'#FF3D47',fontSize:25}}>Order Your</Text>
								<Text style={{fontFamily:'dupree',color:'#FF3D47',fontSize:35}}>FastFood</Text>
							</View>
						</View>
					</ImageBackground>
					{/*<Button
						onPress={() => {
							props.navigation.navigate('Offers')
						}}
						title="Go to Offers"
					/>
					<Button title="Logout" onPress={props.screenProps.logout} />*/}
				</View>
				<View style={styles.menuListFood}>
					<Async promise={this.getQueryFood()} then={(val) => {
						return (
							<ScrollView contentContainerStyle={styles.menuListFoodScroll}>
								{
									val.map((item, key)=>{
										return (<View key={key} style={styles.itemFoodContent}>
											<View style={styles.itemFoodImageContent}>
												{/* <ImageBackground style={styles.itemFoodImage} resizeMode="cover" onPress={()=>{console.log('Image presed')}} source={{uri:item.urls.thumb}}>
													<LinearGradient
													onPress={()=>{console.log('Text content presed')}}
													colors={['transparent', 'rgba(0,0,0,.8)', ]}
													style={styles.itemFoodTextContent}>
														<Text style={styles.itemFoodText} numberOfLines={1}>{item.exif.make}</Text>
														<View style={styles.itemFoodTextButtons}>
															<TouchableOpacity onPress={()=>{console.log('Minus presed')}} style={styles.itemFoodButton}>
																<Icon name="minus" type="font-awesome" color="#fff" size={15} style={styles.itemFoodButtonKey} />
															</TouchableOpacity>
															<TouchableOpacity onPress={()=>{console.log('Plus presed')}} style={styles.itemFoodButton}>
																<Icon name="plus" type="font-awesome" color="#fff" size={15} style={styles.itemFoodButtonKey} />
															</TouchableOpacity>
														</View>													
													</LinearGradient>
												</ImageBackground> */}
												<Image style={styles.itemFoodImage} resizeMode="cover" onPress={()=>{console.log('Image presed')}} source={{uri:item.urls.thumb}} />											
											</View>
											<View style={styles.itemFoodTextContent}>
												<Text style={[styles.itemFoodText,{width:'100%'}]} numberOfLines={1}>{item.exif.make}</Text>
												<View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignContent: 'flex-end',alignItems: 'flex-end',}}>
													<Text style={[styles.itemFoodText,{color:'#A1A1A1'}]} numberOfLines={1}>$87</Text>
													<View style={styles.itemFoodTextButtons}>
														<TouchableOpacity onPress={()=>{
															console.log(this.props.screenProps)
														}} style={styles.itemFoodButton}>
															<Icon name="minus" type="font-awesome" color="#fff" size={15} style={styles.itemFoodButtonKey} />
														</TouchableOpacity>
														<View style={{width:'33%',backgroundColor:'#EA5F66',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
															<Text style={{color:'#fff'}}>0</Text>
														</View>
														<TouchableOpacity onPress={()=>this.onPressAddCartItem(item)} style={styles.itemFoodButton}>
															<Icon name="plus" type="font-awesome" color="#fff" size={15} style={styles.itemFoodButtonKey} />
														</TouchableOpacity>
													</View>
												</View>
											</View>
										</View>)
									})
								}
							</ScrollView>
						);
					}} pending={()=>{
						return (
							<View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
								<ActivityIndicator size="large" color="#FA3F48" />
							</View>
						);
					}} />
				</View>
				<View style={styles.horizontalWeek}>
					<ScrollView contentContainerStyle={styles.horizontalScrollWeek} horizontal={true}>
						<View style={styles.dayOfWeek}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} onPress={val=>{}}>
								<View style={styles.dayOfWeekImageContent}>
									<Image source={require("../../../assets/days/01.png")} style={styles.dayOfWeekImage} />
								</View>
								<Text numberOfLines={1}>Monday</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.dayOfWeek}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} onPress={val=>{}}>
								<View style={styles.dayOfWeekImageContent}>
									<Image source={require("../../../assets/days/02.png")} style={styles.dayOfWeekImage} />
								</View>
								<Text numberOfLines={1}>Tuesday</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.dayOfWeek}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} onPress={val=>{}}>
								<View style={styles.dayOfWeekImageContent}>
									<Image source={require("../../../assets/days/03.png")} style={styles.dayOfWeekImage} />
								</View>
								<Text numberOfLines={1}>Wednesday</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.dayOfWeek}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} onPress={val=>{}}>
								<View style={styles.dayOfWeekImageContent}>
									<Image source={require("../../../assets/days/04.png")} style={styles.dayOfWeekImage} />
								</View>
								<Text numberOfLines={1}>Thursday</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.dayOfWeek}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} onPress={val=>{}}>
								<View style={styles.dayOfWeekImageContent}>
									<Image source={require("../../../assets/days/05.png")} style={styles.dayOfWeekImage} />
								</View>
								<Text numberOfLines={1}>Friday</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.dayOfWeek}>
							<TouchableOpacity style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',width:'100%',height:'100%'}} onPress={val=>{}}>
								<View style={styles.dayOfWeekImageContent}>
									<Image source={require("../../../assets/days/06.png")} style={styles.dayOfWeekImage} />
								</View>
								<Text numberOfLines={1}>Saturday</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const {width} = Dimensions.get('screen');
const dayPorcent = width/5;
const foodSpaces = width/2
const styles = StyleSheet.create({
	icon: {
		width: 74,height: 74,
	},
	menuListFood:{
		flex:3,		
		flexDirection:'row',		
		justifyContent:'space-around',		
		alignContent:'center',
		alignItems:'center'
	},
	menuListFoodScroll:{
		justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'
	},
	itemFoodContent:{
		width:(foodSpaces-5),
		height:200,
		padding:13,
		marginVertical: 5,
		backgroundColor:'#fff',
		elevation:2
	},
	itemFoodImageContent:{
		height:'65%'
	},
	itemFoodImage:{
		width:'100%',
		height:'100%',
		flex:1,
		justifyContent:'flex-end',
		alignContent: 'flex-end',
	},
	itemFoodTextContent:{
		flex:1,
		height:'35%',
		paddingVertical:3
	},
	itemFoodText:{
		fontSize:18,
		width:'50%',
	},
	itemFoodTextButtons:{
		width:'50%',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	itemFoodButton:{
		paddingVertical: 4,
		width:'30%',		
		backgroundColor:'#FF3D47',
		elevation:2
	},
	itemFoodButtonKey:{		
		fontSize:12
	},
	horizontalWeek:{
		flex:1,
		justifyContent:'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	horizontalScrollWeek:{
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
	},
	dayOfWeek:{
		flex:1,
		height:dayPorcent,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width:dayPorcent
	},
	dayOfWeekImageContent:{
		flex: 1,
		backgroundColor:'white',
		borderRadius:50,
		width: '73%',
		height: '70%',
		elevation:4
	},
	dayOfWeekImage:{
		width:'100%',
		height:'100%'
	}
});