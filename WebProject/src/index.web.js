import React from 'react'
import reactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react'
import storeExp from './stores/storeArt'

import Menu from './components/menu'

{ /*
import Login from './components/Login'
import { Router, Route, hashHistory} from 'react-router'
<Router history={hashHistory}>
<Route path="/" component={App}/>
<Route path="/login" component={Login} />
</Router>*/}
reactDOM.render(
  <Provider store = {new storeExp}>
  <Router>
        <Route path="/" component={Menu}/>
    </Router>
  </Provider>
    ,
    document.getElementById('root'));
