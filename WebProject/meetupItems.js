import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect, Link} from 'react-router-dom'


class meetupItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }

}
  render(){
    return(
      <li>{this.state.item.name}</li>
    )
  }

}

export default meetupItem;
