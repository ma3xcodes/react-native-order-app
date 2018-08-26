import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class BackButton extends Component {
    constructor(){
        super();
    }
    render() {
        const props = this.props;
        return (
            <TouchableOpacity style={[{height:30,backgroundColor:'transparent',marginTop:10}, props.style]} onPress={props.to}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                    <Icon
                        name='chevron-left'
                        type='font-awesome'
                        color='#888888'
                        size={15}
                    />  
                    <Text style={{color:"#888888",fontSize:15,textAlign:'center'}}>Back</Text>
                </View>
            </TouchableOpacity>
        )
    }
}