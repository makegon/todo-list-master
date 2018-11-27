import React, {Component, Fragment} from 'react';
import Article from '../Article';
import {Link} from 'react-router-dom'
import articles from "../fixtures";
import axios from 'axios';
import './style.css';
import meetupItem from "../../../meetupItems";
import {inject, observer} from 'mobx-react';
@inject('store')
@observer
export default class ArticleList extends Component{
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
    axios.get(`http://localhost:3000/api/tasks?access_token=${this.props.store.token}`)
      .then(response =>{
        this.setState({meetups: response.data}, () =>{
          //console.log(this.state);

        })
      })
      .catch(err => console.log(err));
  }


  render(){

        return(
            <Fragment>
                <ul>
                    {this.state.meetups.map((article, index) =>
                        <li key = {index} className="article-list_li">
                            <Article article ={article} />

                        </li>)}
                </ul>
              <div>
                {this.props.store.test1}<br />
                {this.props.store.fullName}:{this.props.store.nickName}

              </div>
              <div>
                <button id="btnMobx" className={this.props.store.classMobx} onDoubleClick={this.props.store.actTest} onClick={this.props.store.setNickName}>
                  {this.props.store.btnMobx}
                </button>
              </div>
                <div>
                  <Link to={'/addmeetups'} className="btn btn-primary btn-lg btn-dark float-left btn_blc">
                        Добавить
                  </Link>
                </div>
            </Fragment>
        )}

}
