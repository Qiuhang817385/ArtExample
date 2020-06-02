import React, { Component } from 'react'

export default class MouseECP extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 }
  }
  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render () {
    return (
      <div style={{ height: '100px', border: '1px solid red' }} onMouseMove={this.handleMouseMove}>
        ({this.state.x}, {this.state.y})
      </div>
    )
  }
}
