import React, {Component} from 'react';
import Header from '../../index';
import appj from '../../../../../app'
import {View} from 'react-native'

const title = appj.titleName;

export default class HeaderJS extends Component{
  render() {
    return (
      <View>
        <Header title={title} />
      </View>
  )
  }
}
