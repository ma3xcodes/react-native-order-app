import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Logo from '../../../assets/logo.png'

export default class MainHeader extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export class CartIcon extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItems:props.screenProps.getCartItems() || []
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            cartItems:props.screenProps.getCartItems()
        });
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.props.navigate('MenuList');
                }}>
                    <View>
                        <Icon name="shopping-cart" type="font-awesome" size={30} />
                        {
                            this.state.cartItems.length > 0 ? (
                            <View style={styles.badge}>
                                <Text style={{color:'#FFFFFF',padding:2}}>{this.state.cartItems.length}</Text>
                            </View>) : null
                        } 
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export class Header extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <Image style={{width:29,height:30}} source={Logo} />        
                    <Text style={{fontFamily:'dupree',fontWeight:'300',textAlign:'center',color:'#FF3D47'}}>
                        {
                        this.props.title ? (
                            this.props.title
                        ) : "FastFood"
                        }
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    badge: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 20,
      height: 20,
      
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF0000',
    }
  });