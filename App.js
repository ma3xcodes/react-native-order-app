import React from 'react'
import {Text, View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native'
import {Font} from 'expo'
import NoLogget from './src/Comps/NavStacks/NoLogged'
import LoggetIn from './src/Comps/NavStacks/LoggedIn'
import {AddCartItem, RemoveCartItem, ClearCartItems, CartItems} from './src/Comps/Storage';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fontIsLoaded:false,
      isLoggedIn:false,
      cartItems:[]
    }
    this._bootstrapAsync();
  }
	async componentDidMount() {
    await Font.loadAsync({
      'dupree': require('./assets/fonts/dupree.ttf'),
      'FontAwesome': require('./assets/fonts/fa-regular-400.ttf'),
    });
    setTimeout(()=>{
      this.setState({ fontIsLoaded: true });
    },100);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const self = this
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if(userToken){
      CartItems().then(res=>{
        self.setState({
          cartItems:res
        });
      });      
      this.setState({
        isLoggedIn:true
      });
    }else{     
      this.setState({
        isLoggedIn:false
      });
    }
  };

  login = async ()=>{
    await AsyncStorage.setItem('userToken', '56dr3-05d3-f5450-x0t34-r034-03gf5-43f5g-43504');
    this.setState({isLoggedIn:true});
    console.log('Log in')
  }
  logout = async ()=>{
    await AsyncStorage.removeItem('userToken');
    this.setState({isLoggedIn:false});
    console.log('Logout');
  }

  getCartItems = ()=>{
    return this.state.cartItems;
  }

  addCartItem = (item)=>{
    AddCartItem(item).then((res)=>{
      this.setState({
        cartItems: [...this.state.cartItems, item]
      });
    });    
  }

  clearCart = ()=>{
    ClearCartItems().then(res=>{
      this.setState({
        cartItems:[]
      });
    });
  }

  propsToScreen = ()=>{
    return {
      getCartItems:this.getCartItems,
      addCartItem:this.addCartItem,
      login:this.login,
      logout:this.logout,
      clearCart:this.clearCart
    }
  }
  render() {
    return (
      this.state.fontIsLoaded ? (        
          this.state.isLoggedIn ? 
          <LoggetIn screenProps={this.propsToScreen()} /> :
          <NoLogget screenProps={this.propsToScreen()} />             
      ) : (
        <View style={styles.main}>
          <ActivityIndicator size="large" color="#FA3F48" />
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
  }
});


