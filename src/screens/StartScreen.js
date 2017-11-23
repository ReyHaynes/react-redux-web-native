import React from 'react'
import { connect } from 'react-redux'
import { SampleAction, SampleActionRunning } from '../actions/SampleAction'
import SampleView from '../components/SampleView/SampleView'

class StartScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      message: 'Welcome to the app!',
      dispatchMessage: 'Dispatch an action to:',
      label: 'Action:'
    }

    this.dispatchActionsRunning(true)

    this.dispatchSuccessAction = this.dispatchSuccessAction.bind(this)
    this.dispatchActionsRunning = this.dispatchActionsRunning.bind(this)
  }

  componentDidMount() {
    setTimeout(() => this.dispatchSuccessAction(false), 1500)
    setTimeout(() => this.dispatchSuccessAction(true), 3000)
    setTimeout(() => this.dispatchActionsRunning(false), 3500)
  }

  dispatchSuccessAction(action) {
    this.props.dispatch(SampleAction(action))
  }

  dispatchActionsRunning(action) {
    this.props.dispatch(SampleActionRunning(action))
  }

  render() {
    return (
      <SampleView {...this.state} responseAction={this.props.actions.message} />
    )
  }
}

const mapStateToProps = (state) => ({
    actions: state.sample
})

export default connect(mapStateToProps)(StartScreen);
