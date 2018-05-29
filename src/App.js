import React, { Component } from 'react';
import {Route} from 'react-redux';
import TopNav from './components/top-nav';
import Info from './components/info';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TopNav/>
        <Route exact path='/info' component={Info}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
