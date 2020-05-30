import React, { useEffect, useState } from 'react'
import { DataOfMobileTest } from './data';
import { Chart } from '@antv/g2';
// G2 接收的数据格式为标准的 JSON 数组。
export default function G22 () {

  const [key, setKey] = useState('phone');

  useEffect(() => {
    const chart = new Chart({
      container: document.querySelector('#div1'),
      autoFit: false,
      width: 600,
      height: 300,
    });
    chart.data(DataOfMobileTest);
    chart.line()
      // chart.area()
      // chart.point()
      .position('feature*value')
      .color(key)
      .shape('phone', ['circle', 'square', 'triangle'])
      .size(6);
    // 这里的render是直接再渲染一个而不是替换
    chart.render();
  }, [key])
  return (
    <>
      <div id="div1">
      </div>
      <button onClick={() => { setKey('phone') }}>phone</button>
      <button onClick={() => { setKey('value') }}>value</button>
    </>
  )
}
