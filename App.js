import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment(prevState) {
    return {
      ...prevState,
      count: prevState.count + 1
    }
  }
  decrement(prevState) {
    return {
      ...prevState,
      count: prevState.count - 1
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.count}</Text>
        <Button
          onPress={() => this.setState(this.increment)}
          title='+'
        />
        <Button
          onPress={() => this.setState(this.decrement)}
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
