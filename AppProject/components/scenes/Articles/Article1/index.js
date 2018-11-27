import React, {Component} from 'react'
import { Image, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import {styles} from './style'
const {h1, icon, cont, bink, contain} = styles;

class Article1 extends Component{
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
onPressIn = () => {
  this.setState({
    count: this.state.count+1,
    pressing:true
  })
}
onPressOut = () => {
  this.setState({
    count: this.state.count-1,
    pressing:false
  })

}


  render() {
    const {article} = this.props;
    const {onPress} = this.props;

    return (

      <View style={contain}>
        <View style={bink}>
          <View style={cont}>

              <Image style={icon} source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}/>

          </View>
          <TouchableHighlight
            onPress={this.onPress}
            accessibilityLabel={'Push Me'}
          >
            <Text>{this.state.pressing ? "EKK!" : "PUSH ME"}</Text>
          </TouchableHighlight>

          <Text style={h1}>{article.title} {this.state.count}</Text>
        </View>
      </View>


    )
  }


}


export default Article1

