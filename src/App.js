import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import RegistrationPage from './components/auth/registration-page';
import './App.css';
import { clearAuth, refreshAuthToken } from './actions/auth';
import { clearAuthToken } from './local-storage';

class App extends Component {

  componentDidUpdate(prevProps) {
        
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour         
    );        
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }


  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {

    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className='logout' onClick={() => this.logOut()}>Log out</button>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src='https://i.pinimg.com/originals/dd/6a/fb/dd6afb6a1df27638be45d724d4a6d71e.png' className='header-image'/>
          <h1 className="App-title">Tankler</h1>
          {logOutButton}
        </header>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={RegistrationPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
