import React, { Component } from 'react'

export default class A extends Component {

  state = {
    count: 0
  }

  componentDidMount () {
    this.setState((prevState) => {
      console.log('执行了', prevState.count)
      return { count: prevState.count + 20 }
    })

    // 对象
    this.setState({ count: this.state.count + 1 });

    console.log("console: " + this.state.count); // 0---同步

    // 如果参数是函数 的state 中间穿插着一个 参数是对象的
    // 那么参数是函数的setState之前会失效

    // 函数
    this.setState((prevState) => {
      console.log("console from func1: " + prevState.count);  //1----同步之后1
      // 这里也执行了,但是没有效果???  这里执行了但是没有效果??????
      return { count: prevState.count + 13 }
    }, () => {
      console.log(this.state.count) //11----回调
    })


    //这里面拿到的是10!!!!!!!
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("console from callback: " + this.state.count); // 11----回调
    });


    console.log("console2: " + this.state.count); // 0---同步

    // 函数
    this.setState(prevState => {
      console.log("console from func2: " + prevState.count);  //1----同步之后2
      return {
        count: prevState.count + 10
      };
    }, () => {
      console.log('last console: ' + this.state.count)//11----回调
    });

    // 函数
    //这里执行了????????
    this.setState((prevState) => {
      return {
        count: prevState.count + 23
      }
    });

    // 函数
    this.setState((prev) => {
      console.log('prev.state', prev.count);  //11--顺序是最后的
    })

  }

  render () {
    return (
      <div>

      </div>
    )
  }
}
