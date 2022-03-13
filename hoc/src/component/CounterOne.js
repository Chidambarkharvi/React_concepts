import React, { Component } from 'react'
import withCounter from '../hoc/withCounter'

export class CounterOne extends Component {
  render() {
      const {count,incrementcount,decrementcount} = this.props
    return ( 
    <div>
      <p> userName - {this.props.userName}</p>
      <p> count - {count}</p>
      <button onClick={incrementcount}> Increment</button>
      <button onClick={decrementcount}>Decrement </button>

        
      </div>)
    
  }
}
export default withCounter(CounterOne)

