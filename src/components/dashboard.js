import React, { Component } from 'react';
import {connect} from 'react-redux'
import requiresLogin from './requires-login';
import { Route } from 'react-router-dom';
import TopNav from './top-nav';
import Home from './home';
import Tank from './tank';
import Tasks from './tasks/tasks';
import Parameters from './parameters/parameters';
import Database from './database';
import Info from './info';

class Dashboard extends Component {

  render() {
    return (
      <div className="App">
        <TopNav />
        <Route exact path='/dashboard' component={Home} />
        <Route path='/dashboard/tank' component={Tank} />
        <Route path='/dashboard/tasks' component={Tasks} />
        <Route path='/dashboard/parameters' component={Parameters} />
        <Route exact path='/dashboard/database' component={Database} />
        <Route exact path='/dashboard/info' component={Info} />
      </div>
    );
  }
}

export default requiresLogin()(connect()(Dashboard));