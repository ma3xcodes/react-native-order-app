import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> CartListInComponent </Text>
        <Button onPress={()=>{
            this.props.screenProps.clearCart();
        }} title="Empty Cart" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});
