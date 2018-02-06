import React from 'react';
import { createStore, combineReducers } from 'redux';
import CounterApp from './CounterApp';
import { Provider } from 'react-redux';

export function counterReducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  else if (action.type === "DECREMENT") {
    return state - 1;
  }
  else {
    return state;
  }
}

const reducer = combineReducers({count: counterReducer});
const store = createStore(reducer, {count:0});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

