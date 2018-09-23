import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
     
    }
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
