import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {styles} from './style'
import Welcome from './modules/Welcome/Welcome.android'
import Article from '../Article'
import {instructions} from '../../../common/modules/constants'
import axios from 'axios'

const {container, instruction} = styles

@inject('store')
@observer
export default class Articlelist extends Component{
  constructor(){
    super();
    this.state ={
      meetups:[]
    }
  }

  componentWillMount(){
    this.getMeetups()
  }

  getMeetups(){
    axios.get(`http://10.102.100.121:3000/api/tasks?access_token=${this.props.store.token}`)
      .then(response =>{
        this.setState({meetups: response.data}, () =>{
          //console.log(this.state);

        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={container}>
        <Welcome/>
        {this.state.meetups.map((article, index) =>
          <View key = {index}>
            <Article article={article} onPress = {() =>
              this.setState({
                count: this.state.count+1,
                pressing:true,

              })
            } />
          </View>)}


        <Text style={instruction}>{this.props.store.developAlert}</Text>
        <Text style={instruction}>{instructions}</Text>
      </View>
  );
  }
}

