import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Index extends Component {
  render () {
    return (
      <View style={{flex:1, justifyContent:'center',}}>
        <Text style={{color:'#ff00ff'}}>Home</Text>
      </View>
    )
  }
}

export default Index;