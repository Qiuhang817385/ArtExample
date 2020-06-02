import React, { Component } from 'react'
// 原理，绑定value，监听input事件
export default class Input extends Component {
  state = {
    val: ''
  }
  handleSelf = (e) => {
    let val = e.target.value
    this.setState({
      val
    })
  }
  handleChange = (e) => {
    let val = e.target.value;
    this.props.changeVal(val)
  }

  render () {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.handleChange} />
        <hr />
        同级组件：<input type="text" value={this.state.val} onChange={this.handleSelf} />
        <br />
        值:{this.state.val}
      </div>
    )
  }
}
