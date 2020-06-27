import React, { Component } from 'react'

import './Counter.css'

class Counter extends Component {
  render() {
      const {value, onIncrement, onDecrement} = this.props
      return (
        <div>
          <h2>Counter: {value}</h2>

          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onIncrement}>Increment</button>
        </div>
      )
  }

}

export default Counter