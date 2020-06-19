import React, { createRef, useEffect } from 'react'
import './1.scss'
export default function Page2 () {
  const div1 = createRef();
  const toGreen = function () {
    div1.current.style.backgroundColor = 'green';
  }
  const toYellow = function () {
    div1.current.style.backgroundColor = 'yellow';
  }
  const toRed = function () {
    div1.current.style.backgroundColor = 'red';
  }
  let timerWill;
  const delay = (ms, fn) => new Promise(resolve => { timerWill = setTimeout(() => { fn && fn(); resolve() }, ms) })
  const start = async () => {
    console.log('执行了')
    await toGreen();
    await delay(3000, toYellow);
    await delay(1000, toRed);
    await delay(2000, start)
  }

  const ajaxGet = () => {
    return new Promise((resolve, reject) => {
      fetch('http://www.qiuhang.club:7300/mock/5edd9a97cd2bd50579f71d78/news/handGetnews', {
        method: 'GET'
      }).then(res => res.json())
        .then(res => {
          resolve(res)
        })
    })
  }
  // 每隔5秒执行1次,这不是跟setInterview差不多嘛
  let time = 5;
  const loop = async () => {
    console.log(time);
    if (time === 0) {
      time = 5
      ajaxGet().then(res => { console.log(res); })
      // return
    } else {
      time--;
    }
    await delay(1000, loop)
  }

  //5秒后再发送
  let time2 = 5;
  const loop2 = async () => {
    console.log(time2);
    if (time2 === 0) {
      time2 = 5
      ajaxGet().then(res => { console.log(res); })
      return
    } else {
      time2--;
      await delay(1000, loop)
    }
  }


  useEffect(() => {
    start()
    // delay(2000)
    // loop()
    let str = 'myinstance.cn-hangzhou.ots.aliyuncs.com';
    console.log('str', str.split('.').reverse().join('.'))
    return () => {
      // 一个Bug, 就是在快速切换页面的时候,需要清除上一次的请求或者定时器
      clearTimeout(timerWill)
    }
  }, [])
  // console.log(div1);
  return (
    <div>
      <div id="div1" ref={div1}></div>
    </div>

  )
}
