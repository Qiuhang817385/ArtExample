import React, { Component } from 'react'
import ConfigurableForm from './ConfigurableForm'
import { config, layout } from './config';
// submit是⼀个函数，在“确认”按钮点击后，需要将表单的数据转为⼀个对象作为参数传给传⼊的函数
export default class Page3 extends Component {
  render () {
    return (
      <div>
        <ConfigurableForm
          config={config}
          layout={layout}
          onSubmit={(data) => console.log(data)}
        />
      </div>
    )
  }
}
