import React from 'react'

export default class SampleView extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <h3>{this.props.message}</h3>
          <p>{this.props.label} {this.props.responseAction}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    minHeight: '100vh',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
