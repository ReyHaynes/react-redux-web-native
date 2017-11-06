import React from 'react'
import { connect } from "react-redux"
import SampleAction from '../actions/SampleAction'
import SampleView from '../components/SampleViewComponent'

class StartScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      text: {
        message: 'Welcome to the app!',
        dispatchMessage: 'Dispatch an action to:'
      },
      passActionValue: 1,
      failActionValue: 0
    }

    this.passDispatchedAction = this.passDispatchedAction.bind(this)
    this.failDispatchedAction = this.failDispatchedAction.bind(this)
  }

  passDispatchedAction() {
    this.props.dispatch(SampleAction(this.state.passActionValue))
  }

  failDispatchedAction() {
    this.props.dispatch(SampleAction(this.state.failActionValue))
  }

  render() {
    return (
      <SampleView />
    )
  }
}

function mapStateToProps(state) {
  return ({
    SampleReducer: state.SampleReducer
  })
}

export default connect(mapStateToProps)(StartScreen);
