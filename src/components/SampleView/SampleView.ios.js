import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SampleView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.message}</Text>
        <Text>{this.props.label} {this.props.responseAction}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
