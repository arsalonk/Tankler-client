import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';
import TopNav from './components/top-nav';
import Home from './components/home';
import Tank from './components/tank';
import Tasks from './components/tasks';
import Parameters from './components/parameters';
import Database from './components/database';
import Info from './components/info';
import FishList from './components/fish-list'
import './App.css';
import { fetchFish } from './actions/filler';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchFish());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TopNav />
        <FishList />
        <Route exact path='/' component={Home} />
        <Route exact path='/tank' component={Tank} />
        <Route exact path='/tasks' component={Tasks} />
        <Route exact path='/parameters' component={Parameters} />
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
