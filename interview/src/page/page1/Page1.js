import React, { Component } from 'react'

export default class Page1 extends Component {
  state = {
    text: "Hello",
    person: {
      age: 12
    }
  }
  /**
   * 延时函数,延时的是整体
   * @param {毫秒数} ms 
   */
  delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  /**
   * 这不就是setTimeOut吗.
   */
  delay2 = (ms, fn) => setTimeout(fn, ms);
  /**
   * 必须加上async和await才可以延时
   */
  handleClick = async () => {
    console.log(this.state.text);
    this.setState({
      text: "text"
    });
    const person = this.state.person;
    person.age++;
    // 对象是可以直接修改的
    console.log('this.state.person.age++', this.state.person.age)
    await this.delay(3000);
    this.delay2(3000, () => { console.log('ok') });
    // await this.delay2(3000);
    console.log('123');
  }
  componentWillMount () {
    console.log('componentWillMount');
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate')
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render () {
    console.log('render')
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}
