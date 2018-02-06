import React from 'react';
import { createStore } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';

function counter(state = {}, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1
    };
  }
  else if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1
    };
  }
  else {
    return state;
  }
}

let store = createStore(counter, {count:0});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    store.subscribe(() => {
        this.setState({count: store.getState().count});
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.count}</Text>
        <Button
          onPress={()=>store.dispatch({type:"INCREMENT"})}
          title='+'
        />
        <Button
          onPress={()=>store.dispatch({type:"DECREMENT"})}
          title='-'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
