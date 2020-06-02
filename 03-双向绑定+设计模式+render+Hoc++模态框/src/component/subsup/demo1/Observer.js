// 观察者
import React, { Component } from 'react';
export default class Observer extends Component {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    // 添加到观察者列表
    this.subject.attach(this)
  }
  update () {
    console.log(`${this.name} update, state : ${this.subject.getState()}`)
  }
  render () {
    return (
      <>观察者</>
    )
  }
}