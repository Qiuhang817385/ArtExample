import React, { Component } from 'react'
import C from './C';
export default class A extends Component {
  state = {
    count: 0
  }
  componentWillMount () {
    console.log('PcomponentWillMount');
  }
  componentDidMount () {
    console.log('PcomponentDidMount');
  }
  componentWillUpdate () {
    console.log('PcomponentWillUpdate');
  }
  componentDidUpdate () {
    console.log('PcomponentDidUpdate');
  }


  render () {
    return (
      <div>
        {this.state.count}
        <C count={this.state.count} />
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>++</button>
      </div>
    )
  }
}
