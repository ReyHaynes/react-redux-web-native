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
    'min-height': '100vh',
    'text-align': 'center',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  }
}
