class Promise2 {
  callbacks = []
  constructor(fn) {
    fn(this._resolve.bind(this))
  }
  then(onFulfilled) {
    this.callbacks.push(onFulfilled)
    return this //看这里 实现链式调用
  }
  _resolve(value) {
    this.callbacks.forEach((fn) => fn(value))
  }
}
let p2 = new Promise2((resolve) => {
  setTimeout(() => {
    console.log('done')
    resolve('5秒')
  }, 5000)
})
  .then((tip) => {
    console.log('then1', tip)
  })
  .then((tip) => {
    console.log('then2', tip)
  })

// 存在一个问题：如果在 then 方法注册 onFulfilled 之前，resolve 就执行了，onFulfilled 就不会执行到了。比如上面的例子中我们把 setTimout 去掉：
//同步执行了resolve
// 只有 "同步执行" 被打印了出来，后面的 "then1" 和 "then2" 均没有打印出来。
let p3 = new Promise2((resolve) => {
  console.log('同步执行')
  resolve('同步执行')
})
  .then((tip) => {
    console.log('then1', tip)
  })
  .then((tip) => {
    console.log('then2', tip)
  })
