import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../../style";

import { inject, observer } from "mobx-react";

@inject('store')
@observer
export default class Welcome extends Component{
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Добро пожаловать в {'\n'} приложение, {this.props.store.uLogin}!</Text>
      </View>
    );
  }
}
