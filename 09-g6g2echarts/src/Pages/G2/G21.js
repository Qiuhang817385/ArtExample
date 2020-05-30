import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import { Chart } from '@antv/g2';
import { data } from './data';
export default function G21 () {
  const ref = React.useRef(null);
  useEffect(() => {
    const chart = new Chart({
      container: ReactDOM.findDOMNode(ref.current),
      width: 600,
      height: 300,
    });
    // Step 2: 载入数据源
    chart.data(data);

    // Step 3：创建图形语法，绘制 柱状图
    chart.interval().position('genre*sold');

    // Step 4: 渲染图表
    chart.render();

  }, [1])
  return (
    <div ref={ref}>

    </div>
  )
}
