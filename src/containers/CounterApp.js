import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Counter from '../components/Counter';
//import * as CounterActions from '../actions/CounterActions';


export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}


class CounterApp extends Component {
  // CounterApp() {
  //   const { counter, dispatch } = this.props;
  //   setInterval(function() {dispatch({type: 7})}, 3000)
  // }

  render() {
    const { counter, dispatch } = this.props;
    setTimeout(function() {dispatch({type: 7})}, 3000)
    return (
      <h1>Counter: {counter} </h1>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(CounterApp);
