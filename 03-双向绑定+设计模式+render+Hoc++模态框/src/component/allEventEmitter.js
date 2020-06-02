// 全局的事件系统
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on (type, cb, mode) {
    let cbs = this.listeners[type];
    if (!cbs) {
      cbs = []
    }
    cbs.push(cb);
    this.listeners[type] = cbs;
    return () => {
      this.remove(type, cb);
    }
  }
  emit (type, ...args) {
    console.log(`%c event ${type} be triggered`,
      'color:rgb(20,150,250);font-size:14px')
    const cbs = this.listeners[type];
    if (Array.isArray(cbs)) {
      cbs.forEach(fn => fn(...args))
    }
  }
  remove (type, cb) {
    if (cb) {
      let cbs = this.listeners[type];
      cbs = cbs.filter(v => v !== fn)
      this.listeners[type] = cbs;
    } else {
      this.listeners[type] = null;
      delete this.listeners[type];
    }
  }
}
export default new EventEmitter();