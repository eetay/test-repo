import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './utils/DevTools';
import CounterApp from './containers/CounterApp';
import configureStore from './store/configureStore';

const store = configureStore({
  debug: (process.env.NODE_ENV === 'production'),
  counter: 10
});

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <div>Store: {JSON.stringify(store)}</div>
          #####
          <CounterApp counter={store}/>
          #####
          <CounterApp counter={store}/>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

render(
  <Root store={store} />,
  document.getElementById('root')
);
