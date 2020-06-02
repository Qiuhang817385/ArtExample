import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class SubSup extends Component {
  // constructor() {
  // super()
  // this.callbacks = {}
  // }
  // $on (name, fn) {
  //   (this.callbacks[name] || (this.callbacks[name] = [])).push(fn)
  // }
  // $emit (name, arg) {
  //   let cbs = this.callbacks[name];
  //   if (cbs) {
  //     cbs.forEach(c => {
  //       c.call(this, arg)
  //     });
  //   }
  // }
  // $off (name) {
  //   this.callbacks[name] = null
  // }
  /* 
    使用
    let event = new Event()
    event.$on('event1',function(arg){
      clo(事件1，arg)
    })
    event.$on('event1',function(arg){
      clo(事件1，arg)
    })
    event.$on('event1',function(arg){
      clo(事件1，arg)
    })
    event.$emit('event1',{name:'开课吧'})
   */
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          isDone: false,
          title: '睡觉'
        },
        {
          isDone: true,
          title: '吃饭'
        },
        {
          isDone: true,
          title: '打豆豆'
        }
      ],
      isAllDone: false
    }
  }
  componentDidMount () {
    PubSub.subscribe('delete', (val) => {
      console.log('val', val)
    })
  }
  render () {
    return (
      <div>
        兄弟1
      </div>
    )
  }
}
