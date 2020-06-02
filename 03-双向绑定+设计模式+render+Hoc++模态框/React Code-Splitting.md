## webpack 配置 code-splite

https://webpack.js.org/guides/code-splitting/

```js
// import() 动态加载语法

//math.js

console.log('start loading')

export function add(a, b) {
  return a + b
}
// 旧写法：在编译时就完成模块加载

import React, { PureComponent } from 'react'
import { add } from './math'

class App extends PureComponent {
  handleClick = () => {
    console.log(add(16, 26))
  }

  render() {
    return <button onClick={this.handleClick}>add</button>
  }
}
export default App
// 新写法：触发点击事件后才开始加载模块

import React, { PureComponent } from 'react'

class App extends PureComponent {
  handleClick = () => {
    //动态加载
    import('./math').then((math) => {
      console.log(math.add(16, 26))
    })
  }

  render() {
    return <button onClick={this.handleClick}>add</button>
  }
}
export default App
```
