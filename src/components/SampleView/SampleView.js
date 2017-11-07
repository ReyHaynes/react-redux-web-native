import React from 'react'

export default class SampleView extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.message}</h3>
        <p>{this.props.label} {this.props.responseAction}</p>
      </div>
    )
  }
}
