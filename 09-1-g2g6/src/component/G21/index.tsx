import React, { ReactElement, useEffect, useRef } from 'react'
import { Line } from '@antv/g2plot'
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
]

interface Props {}

export default function Index({}: Props): ReactElement {
  const ref = useRef()
  useEffect(() => {
    const linePlot = new Line(ref.current, {
      title: {
        text: '这是一个基础折线图',
        visible: true,
      },
      description: {
        visible: true,
        text: '副标题吗?',
      },
      data,
      xField: 'year',
      yField: 'value',
      yAxis: {
        // API已经改了啊原来
        label: {
          formatter: (v) => {
            return v + 'k'
          },
        },
      },
      // 直接设置折现的颜色
      color: '#FE740C',
      // 辅助点
      point: {
        visible: true,
        size: 5,
        color: 'white',
        style: {
          // 圆的边的颜色
          stroke: '#FE740C',
          // 点的边的宽度   可以理解成直径
          lineWidth: 2,
          fillOpacity: 0.7,
        },
      },
      label: {
        visible: true,
      },
    })
    linePlot.render()
  }, [])
  return <div ref={ref}></div>
}
