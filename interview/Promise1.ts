// Promise 也还是使用回调函数，
// 只不过是把回调封装在了内部，使用上一直通过 then 方法的链式调用，使得多层的回调嵌套看起来变成了同一层的，
// 书写上以及理解上会更直观和简洁一些。
class PromiseI {
  callbacks = []
  // fn-->函数
  constructor(fn) {
    fn(this._resolve.bind(this))
  }
  // onFulfilled-->函数
  then(onFulfilled) {
    this.callbacks.push(onFulfilled)
  }
  // value-->值
  _resolve(value) {
    this.callbacks.forEach((fn) => fn(value))
  }
}
// 做了3部分操作
// 1.传递promise的第一个参数到构造函数里面,resolve本质上是一个函数,把promise内部的resolve函数传递当做参数
// 首先 new Promise 时，传给 Promise 的函数设置定时器模拟异步的场景，

// 2.then方法,把成功的回调函数添加到回调队列里面
// 接着调用 Promise 对象的 then 方法注册异步操作完成后的 onFulfilled，

// 3.resolve方法调用回调队列,一一执行
// 最后当异步操作完成时，调用 resolve(value)， 执行 then 方法注册的 onFulfilled。
let p = new PromiseI((resolve) => {
  setTimeout(() => {
    console.log('done')
    resolve('3秒')
  }, 3000)
}).then((tip) => {
  console.log(tip)
})

// 创建 Promise 实例时传入的函数会被赋予一个函数类型的参数，即 resolve，
// resolve，接收一个参数 value，代表异步操作返回的结果，
// 当异步操作执行成功后，会调用resolve方法，这时候其实真正执行的操作是将 callbacks 队列中的回调一一执行；
