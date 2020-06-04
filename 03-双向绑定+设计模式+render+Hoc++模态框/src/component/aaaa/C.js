import React, { Component } from 'react'

export default class C extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount () {
    console.log('CcomponentWillMount');
  }
  componentDidMount () {
    console.log('CcomponentDidMount');
  }
  componentWillUpdate () {
    console.log('CcomponentWillUpdate');
  }
  componentDidUpdate () {
    console.log('CcomponentDidUpdate');
  }
  render () {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}

