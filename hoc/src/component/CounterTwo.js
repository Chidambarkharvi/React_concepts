import React, { Component } from 'react'
import withCounter from '../hoc/withCounter'

export class CounterTwo extends Component {
  render() {
      const {count,incrementcount,decrementcount} = this.props
    return( 
    <div>
      <p> count - {count}</p>
      <button onClick={incrementcount}> Increment</button>
      <button onClick={decrementcount}>Decrement </button>

        
      </div>)
    
  }
}

export default withCounter(CounterTwo)
