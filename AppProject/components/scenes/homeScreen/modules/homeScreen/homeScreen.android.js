import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'

import HeaderJS from '../../../Header/modules/Header/Header.android'
import ArticlelistJS from '../../../Articles/Articlelist/modules/Articlelist/Articlelist.android'
import {Article} from '../../../Articles/Article/'

class homeScreen extends Component{

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
export default homeScreen
