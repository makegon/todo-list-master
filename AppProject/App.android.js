import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
//import {createStackNavigator, createAppContainer} from 'react-navigation'

import HeaderJS from './components/scenes/Header/modules/Header/Header.android'
import ArticlelistJS from './components/scenes/Articles/Articlelist/modules/Articlelist/Articlelist.android'
import {Article} from './components/scenes/Articles/Article/'

export default class App extends Component{

  render() {
    return (
      <View>
      <HeaderJS />
        <ScrollView>
          <ArticlelistJS />
        </ScrollView>
      </View>
    )
  }
}

/*const AppNavigation = createStackNavigator({
  Home:{
    screen: App
  }
});

export default createAppContainer(AppNavigation)*/
