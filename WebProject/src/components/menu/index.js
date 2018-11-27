import React, {Component} from 'react'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from '../App'
import Auth from '../auth'
import Reg from '../Reg'
import MeetupDetails from '../MeetupDetails'
import AddMeetup from '../AddMeetup'
import EditMeetup from '../EditMeetup'
import './style.css'


class Menu extends Component {
  render () {
    return (
      <Router>

        <div className="container">
          <input type="text" className="meetupInput"/>
          <button className="searchMeetup">Search</button>
          <ul className="list"></ul>
          <ul className="nav-bar">
            <Link to="/reg">Регистрация нового аккаунта</Link>
          </ul>
          <hr />
          <Route path="/app" component={App} />
          <Route exact path="/" component={Auth} />
          <Route path="/reg" component={Reg}/>
          <Route path="/addmeetups" component={AddMeetup}/>
          <Route path="/editmeetup/:id" component={EditMeetup}/>
          <Route path="/meetups/:id" component={MeetupDetails}/>
        </div>
      </Router>
    );
  }
}
export default Menu;
