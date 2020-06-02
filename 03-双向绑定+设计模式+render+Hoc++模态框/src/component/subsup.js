// 主题,保存状态,状态变化之后,触发所有观察者对象
class Subject {
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
}
// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    // 添加到观察者列表
    this.subject.attach(this)
  }
  update () {
    console.log(`${this.name} update, state : ${this.subject.getState()}`)
  }
}

const S = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s);
S.setState(2)


// ele.addEventListener('click', () => {});
// addEventListener就相当于注册了一个观察者，当观察到‘click’事件的时候，作出一些处理。