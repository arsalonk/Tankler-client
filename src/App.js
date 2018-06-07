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

    return (
      <main role='main' className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={RegistrationPage} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
