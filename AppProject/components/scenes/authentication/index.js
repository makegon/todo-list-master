import React, {Component, Fragment} from 'react';
import { Text, View } from "react-native";

import axios from 'axios';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
export default class HTTP extends Component{
  constructor(props){
    super(props);
    this.state = {
      userData:''
    }
  }
  componentWillMount(){
    this.getUser()
  }
  getUser(){
    //let meetupId = this.props.match.params.id;
    //let meetupId = 18;
    axios.get(`http://10.102.100.121:3000/api/Users/5?access_token=${this.props.store.token}`)
      .then(response =>{
        this.setState({userData: response.data}, () =>{

        })
      })
      .catch(err => console.log(err));
  }
  render(){
    return (
      <View>
        <Text>{this.state.userData.title}</Text>
      </View>

    )


  }
}

