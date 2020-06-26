import React, { Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 2
    }
  }
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button>Deccrement</button>
        <button>Increment</button>
      </div>
    )
  }
}

export default App