import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Route } from 'react-router-dom';
import TopNav from './top-nav';
import Home from './home';
import Tank from './tank/tank';
import Tasks from './tasks/tasks';
import Parameters from './parameters/parameters';
import Database from './database/database';
import Info from './info';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

class Dashboard extends Component {

  showLinks() {
    const nav = document.getElementById('topnav');
    if (nav.className === 'topnav') {
      nav.className += ' responsive';
    } else {
      nav.className = 'topnav';
    }
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className='logout' onClick={() => this.logOut()}>Logout</button>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img
            src='https://i.pinimg.com/originals/dd/6a/fb/dd6afb6a1df27638be45d724d4a6d71e.png'
            className='header-image'
            alt='Ocean floor with light blue water and sand on the bottom'
          />
          <h1 className="App-title">Tankler</h1>
          {logOutButton}
        </header>
        <TopNav onClick={() => this.showLinks()} />
        <Route exact path='/dashboard' component={Home} />
        <Route path='/dashboard/tank' component={Tank} />
        <Route path='/dashboard/tasks' component={Tasks} />
        <Route path='/dashboard/parameters' component={Parameters} />
        <Route path='/dashboard/database' component={Database} />
        <Route exact path='/dashboard/info' component={Info} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});


export default requiresLogin()(connect(mapStateToProps)(Dashboard));