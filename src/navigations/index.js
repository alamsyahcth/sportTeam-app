import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../components/home';
import AchievmentScreen from '../components/home/achievment';
import TrainingScreen from '../components/home/training';

import OurTeamScreen from '../components/ourteam';
import TeamInfoScreen from '../components/teaminfo';


HomeStack = createStackNavigator();
const HomeStackNavigator = ({navigation}) => (
  <HomeStack.Navigator
    initialRouteName="Home"
  >
    <HomeStack.Screen name="Home"
      component={HomeScreen}
      options={{
        headerTitle:null,
        headerLeft:null,
        headerTransparent:true,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
    <HomeStack.Screen name="Achievment"
      component={AchievmentScreen}
      options={{
        headerTitle: null,
        headerLeft: null,
        headerTransparent: true,
      }}
    />
    <HomeStack.Screen name="Training"
      component={TrainingScreen}
      options={{
        headerTitle: null,
        headerLeft: null,
        headerTransparent: true,
      }}
    />
  </HomeStack.Navigator>
)

BottomTab = createBottomTabNavigator();
const Tab = ({navigation}) => (
  <BottomTab.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let iconName2;

        if (route.name === "Home") {
          iconName = require('../assets/home_active.png');
          iconName2 = require('../assets/home_inactive.png');
        } else if (route.name === "OurTeam") {
          iconName = require('../assets/ourteam_active.png');
          iconName2 = require('../assets/ourteam_inactive.png');
        } else if (route.name === "TeamInfo") {
          iconName = require('../assets/teaminfo_active.png');
          iconName2 = require('../assets/teaminfo_inactive.png');
        }
        return <Image
          source={
            focused
              ? iconName
              : iconName2
          }
          style={{
            width:30,
            height:30,
          }}
        />
      },
    })}
    tabBarOptions={{
      activeTintColor: '#7BB2D4',
      inactiveTintColor: '#CCCCCC',
      style:{
        height:75,
        paddingBottom:10,
        paddingTop: 10,
        elevation:0,
      }
    }}
  >
    <BottomTab.Screen name="Home" component={HomeStackNavigator} />
    <BottomTab.Screen name="OurTeam" component={OurTeamScreen} />
    <BottomTab.Screen name="TeamInfo" component={TeamInfoScreen} />
  </BottomTab.Navigator>
)

export default class Index extends Component {
  render () {
    return (
      <NavigationContainer>
        <Tab/>
      </NavigationContainer>
    )
  }
}