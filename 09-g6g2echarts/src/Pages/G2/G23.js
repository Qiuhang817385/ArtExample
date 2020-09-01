import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import { Chart } from '@antv/g2';
import { data } from './data';
export default function G21 () {
  const ref = useRef();
  useEffect(() => {
    const chart = new Chart({
      container: ReactDOM.findDOMNode(ref.current),
      width: 600,
      height: 300
    }).data(data)
    // interval是什么
    chart.interval().position('genre*sold');
    chart.render();
  }, [])

  return (
    <div ref={ref}>
    </div>
  )
}

// 对自己的人生负责一点