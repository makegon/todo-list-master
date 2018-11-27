import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Articlelist/style.css';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class AddMeetup extends Component{
  addMeetup(newMeetup){
    axios.request({
      method:'post',
      url:`http://localhost:3000/api/tasks?access_token=${this.props.store.token}`,
      data: newMeetup
    }).then((response) =>{
      this.props.history.push('/app');
    }).catch(err => console.log(err));
    console.log(newMeetup);

  }
  onSubmit(sb){
    const newMeetup = {
      title: this.refs.title.value,
      body: this.refs.body.value
    }
    this.addMeetup(newMeetup);
    console.log(this.refs.title.value);
    sb.preventDefault();
  }
  render(){
    return (
      <div>
        <h1>Добавить заметку</h1>
        <Link className="btn btn-primary btn-lg btn-dark float-left btn_blc_return" to="/app">Назад</Link>
        <br />
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input">
          <input type="text" name="title" ref="title" />
            <label htmlFor="title">Заголовок заметки</label>
          </div>
          <div className="input">
            <input type="text" name="body" ref="body" />
            <label htmlFor="body">Текст заметки</label>
          </div>
          <input onSubmit={this.onSubmit.bind(this)} type="submit" value="Сохранить" className="btn"/>
        </form>
      </div>

    )

  }
}

export default AddMeetup;
