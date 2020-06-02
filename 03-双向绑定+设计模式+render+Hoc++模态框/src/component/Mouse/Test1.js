import React, { Component } from 'react'

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 }
  }
  delay = (time) => new Promise((resolve, reject) => setTimeout(resolve, time))


  handleMouseMove = (e) => {
    let xx = e.clientX;
    let yy = e.clientY
    this.delay(100).then(() => {
      this.setState({
        x: xx,
        y: yy
      })
    });
  }
  render () {
    return (
      <div style={{ height: '200px', border: '1px solid yellow' }} onMouseMove={this.handleMouseMove}>
        <Cat mouse={this.state}></Cat>
      </div>
    )
  }
}


class Cat extends Component {
  render () {
    const mouse = this.props.mouse;
    return (
      <img alt="1" src="/4Pane.png" style={{ width: '40px', height: '40px', position: 'absolute', left: mouse.x - 20, top: mouse.y - 20 }} />
    );
  }
}