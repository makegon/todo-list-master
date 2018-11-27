import React, {Component} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import {styles} from './style'
const {h1, icon, cont, bink, contain} = styles;

class Article extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count:0,
      pressing:false
    }

  }
  onPress = () => {
    this.setState({
      count: this.state.count+1,
      pressing:true
    })
  }

  render() {

    const {article} = this.props;
    const {onPress} = this.props;

    return (

      <TouchableHighlight
        onPress={this.onPress}
        accessibilityLabel={'Push Me'}>
          <View style={contain}>
            <View style={bink}>
              <View style={cont}>

                  <Image style={icon} source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}/>
                <Text>{this.state.pressing ? "EKK!" : "PUSH ME"}</Text>
              </View>
              <Text style={h1}>{article.title}</Text>
            </View>
          </View>
      </TouchableHighlight>
    )
  }


}


export default Article

