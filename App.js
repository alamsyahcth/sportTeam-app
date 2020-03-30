import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './src/navigations';

class App extends Component {
  render () {
    return(
      <View style={{flex:1, backgroundColor:'#ffffff'}}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent />
        <Routes/>
      </View>
    )
  }
}

export default App