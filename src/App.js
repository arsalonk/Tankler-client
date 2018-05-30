import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';
import TopNav from './components/top-nav';
import Home from './components/home';
import Tank from './components/tank';
import Tasks from './components/tasks/tasks';
import Parameters from './components/parameters';
import Database from './components/database';
import Info from './components/info';
import './App.css';
import { fetchTaskFolder } from './actions/task-folders';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTaskFolder())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TopNav />
        <Route exact path='/' component={Home} />
        <Route path='/tank' component={Tank} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/parameters' component={Parameters} />
        <Route exact path='/database' component={Database} />
        <Route exact path='/info' component={Info} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
