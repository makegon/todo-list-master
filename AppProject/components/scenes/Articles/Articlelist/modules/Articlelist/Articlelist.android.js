import React, {Component} from 'react';
import Articlelist from '../../../Articlelist/index';
import {View} from 'react-native'

import {Provider} from 'mobx-react'
import storeE from '../../../../../common/mobx/basestore/stores'

export default class ArticlelistJS extends Component{
  render() {
    return (
    <View>
      <Provider store = {new storeE}>
      <Articlelist />
      </Provider>
    </View>
  )
  }
}
