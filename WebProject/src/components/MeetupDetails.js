import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Articlelist/style.css';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
export default class MeetupDetails extends Component{
  constructor(props){
   super(props);
   this.state = {
     details:''
   }
  }
  componentWillMount(){
    this.getMeetup()
  }
  getMeetup(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/tasks/${meetupId}?access_token=${this.props.store.token}`)
      .then(response =>{
        this.setState({details: response.data}, () =>{

        })
      })
      .catch(err => console.log(err));
  }

  onDelete(){
    let meetupId = this.state.details.id;
    if (confirm(`Удалить заметку ${this.state.details.title}?`)) {
      axios.delete(`http://localhost:3000/api/tasks/${meetupId}?access_token=${this.props.store.token}`)
        .then((response) =>{
          this.props.history.push('/app');
        }).catch(err => console.log(err));
    }

  }

  render(){
    return (
      <div>
        <h1>Просмотр содержимого заметки</h1>
        <Link className="btn btn-primary btn-lg btn-dark float-left btn_blc_return" to="/app">Назад</Link>
        <br />
        <h2>{this.state.details.title}</h2>
        <div className="cart-body">{this.state.details.body}</div>
        <button onClick={this.onDelete.bind(this)} className="btn btn-sm float-right" style={{margin:'0 4% 2% 0'}}>Удалить</button>
        <Link to={`/editmeetup/${this.state.details.id}`} className="btn btn-sm float-right" style={{margin:'0 4% 2% 0'}}>Редактировать</Link>
      </div>

    )


  }
}

