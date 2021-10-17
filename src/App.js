import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
