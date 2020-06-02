// 发布订阅模式
class PubSub {
  constructor() {
    // 订阅者中心
    this.subscribers = {}
  }
  subscribe (type, fn) {
    if (!Object.prototype.hasOwnProperty.call(this.subscribers, type)) {
      // 每一个类型都分成一个数组,add类型,add数组
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }
  unsubscribe (type, fn) {
    // 获取当前类型,移除
    let listeners = this.subscribers[type];
    // 如果没有,return
    if (!listeners || !listeners.length) return;
    this.subscribers[type] = listeners.filter(v => v !== fn);
  }
  publish (type, ...args) {
    let listeners = this.subscribers[type];
    if (!listeners || !listeners.length) return;
    listeners.forEach(fn => fn(...args));
  }
}
// 观察者模式由具体目标调度，每个被订阅的目标里面都需要有对观察者的处理，会造成代码的冗余
// 发布订阅模式则统一由调度中心处理，消除了发布者和订阅者之间的依赖。
let ob = new PubSub();
ob.subscribe('add', (val) => console.log(val));
ob.publish('add', 1)

