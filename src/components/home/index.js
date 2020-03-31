import React, { Component } from 'react';
import { View, Animated, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HEADER_HEIGHT = 60;
const MAX_SCROLL_OFFSET = 400;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }
  render () {
    const translateDiffScroll = Animated.diffClamp(this.state.scrollY, 0, MAX_SCROLL_OFFSET)
      .interpolate({
        inputRange:[0, MAX_SCROLL_OFFSET],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp'
      })
    return (
      <Animated.View style={styles.root}>
        <Animated.View style={[styles.headerTop, {transform: [{translateY: translateDiffScroll}]}]}>
          <LinearGradient colors={['#FAFAF8', '#EEFFBA']} style={{ flex: 1 }} style={styles.head}>
            <View style={styles.left}>
              <Image source={require('../../assets/player.png')} style={styles.img1}/>
              <Image source={require('../../assets/leaf.png')} style={styles.img2} />
            </View>
            <View style={styles.right}>
              <Text style={{ color:'#46919F', fontSize:44, position:'absolute', marginTop:100, fontWeight:'bold'}}>
                Welcome
              </Text>
              <Text style={{ color: '#46919F', fontSize: 18, position: 'absolute', marginTop: 150, right:30, }}>
                XYZ Team App
              </Text>
              <Image source={require('../../assets/ground.png')} style={styles.img3} />
            </View> 
          </LinearGradient>
          <View style={styles.buttonTab}>
            <TouchableOpacity style={styles.tab} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}>About</Text>
              <View style={{ width: '100%', height: 3, borderRadius: 10, backgroundColor: '#7BB2D4', marginTop: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab} onPress={() => this.props.navigation.navigate('Achievment')}>
              <Text style={styles.buttonText}>Achievment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab} onPress={() => this.props.navigation.navigate('Training')}>
              <Text style={styles.buttonText}>Training</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.ScrollView style={styles.body}>
          <View style={styles.section}>
            <Text style={{ color:'#7BB2D4', fontSize:35, fontWeight:'bold', marginVertical:10}}>
              Why XYZ ?
            </Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerTop:{
    flex: 1
  },
  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    flex:1,
    zIndex:-50
  },
  body:{
    flex:1,
    paddingHorizontal:30,
  },
  left:{
    flex:1,
    top:-300
  },
  right: {
    flex: 1,
    top:-300
  },
  img1:{
    width:173,
    height:211,
    position:'absolute',
    bottom:-300,
    zIndex:10,
  },
  img2: {
    width: 224.75,
    height: 178.5,
    position: 'absolute',
    bottom: -300,
    left:-30,
  },
  img3: {
    width: 341.86,
    height: 64,
    position: 'absolute',
    bottom: -300,
    right:-10,
  },
  buttonTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    top: -40,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tab:{
    padding:10,
  },
  buttonText:{
    fontSize:18,
    color:'#7BB2D4'
  },
  content:{
    lineHeight:20,
    fontSize:12
  },
  section:{
    paddingBottom:10,
  }
})

export default Index;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        