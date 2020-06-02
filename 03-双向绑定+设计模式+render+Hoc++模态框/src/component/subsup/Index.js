import React, { Component } from 'react'
import SubSup from './SubSup';
import TodoMain from './TodoMain';
export default class Index extends Component {
  render () {
    return (
      <div>
        子1：<SubSup />
        子2：<TodoMain />
      </div>
    )
  }
}
