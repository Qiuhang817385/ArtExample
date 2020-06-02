// 主题,保存状态,状态变化之后,触发所有观察者对象
import React, { Component } from 'react';
export default class Subject extends Component {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState () {
    return this.state
  }
  setState (state) {
    this.state = state;
    this.notifyAllObservers()
  }
  notifyAllObservers () {
    this.observers.forEach(ob => {
      ob.update()
    })
  }
  attach (observers) {
    this.observers.push(observer)
  }
  render () {
    return (
      <>观察者</>
    )
  }
}