import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Articlelist/style.css';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class EditMeetup extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      title:'',
      body:'',
      done:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.doneClick = this.doneClick.bind(this);


  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

componentDidMount(){
  this.getMeetupDetails()
}
getMeetupDetails(){
  let meetupId = this.props.match.params.id;
  axios.get(`http://localhost:3000/api/tasks/${meetupId}?access_token=${this.props.store.token}`)
    .then(response =>{
      this.setState({
        id: response.data.id,
        title: response.data.title,
        body: response.data.body,
        done: response.data.done,

      }, () =>{
        //console.log(this.state);
      })
    })
    .catch(err => console.log(err));
}

onDelete(){
  let meetupId = this.state.id;
  if (confirm(`Удалить заметку ${this.state.title}?`)) {
    axios.delete(`http://localhost:3000/api/tasks/${meetupId}?access_token=${this.props.store.token}`)
      .then((response) =>{
        this.props.history.push('/app');
      }).catch(err => console.log(err));
  }
}
  doneClick(){
    let donestate = !this.state.done;
    this.setState({
      done: !this.state.done
    })
    console.log('---',this.state.done)
  }
  editMeetup(newMeetup){
    let editmeetupId = this.state.id;
    if (confirm(`Редактировать заметку ${this.state.title}?`)) {
      axios.request({
        method: 'put',
        url: `http://localhost:3000/api/tasks/${editmeetupId}?access_token=${this.props.store.token}`,
        data: newMeetup
      }).then((response) => {
        this.props.history.push('/app');
      }).catch(err => console.log(err));
    }
  }
onSubmit(sb){
  const newMeetup = {
    title: this.refs.title.value,
    body: this.refs.body.value,
    done: this.refs.done.value
  }
  this.editMeetup(newMeetup);
  console.log(this.refs.title.value);
  sb.preventDefault();
}

render(){
  return (
    <div>
      <h1>Редактирование заметки</h1>
      <Link className="btn btn-primary btn-lg btn-dark float-left btn_blc_return" to="/app">Назад</Link>
      <br />
      <button onClick={this.doneClick} className="btn btn-secondary btn-dark float-right">
        {this.state.done ? 'выполнено':'не выполнено'}
      </button>

        <input type="text" name="title" ref="title" value={this.state.title} onChange={this.handleInputChange}/><br/><br/>
        <textarea cols="45" rows="15" name="body" ref="body" value={this.state.body} onChange={this.handleInputChange}/><br/><br/>
        <input hidden type="text" name="done" ref="done" value={this.state.done} onChange={this.handleInputChange}/>
        <input onClick={this.onSubmit} type="submit" value="Сохранить" className="btn"/>
        <button onClick={this.onDelete.bind(this)} className="btn btn-sm float-right" style={{margin:'0 4% 2% 0'}}>Удалить</button>

    </div>
  )
}
}

export default EditMeetup;


