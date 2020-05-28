import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import { data1 } from './data';
import { main } from './asyncData';


export default function G6D () {
  const ref = React.useRef(null);
  let graph = null;
  let dataNode;
  useEffect(() => {
    main().then(res => {
      return res;
    }).then((res) => {
      console.log('res', res)
      //       fitView：设置是否将图适配到画布中；
      //       fitViewPadding：画布上四周的留白宽度。
      if (!graph) {
        graph = new G6.Graph({
          container: ReactDOM.findDOMNode(ref.current), // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
          width: 800, // Number，必须，图的宽度
          height: 500, // Number，必须，图的高度
          fitView: true,
          fitViewPadding: [20, 40, 50, 20],
          // 适用场景：所有节点统一的属性配置，所有边统一的属性配置。
          // 动态配置属性会覆盖全局配置属性
          defaultNode: {
            size: 30, // 节点大小
            // ...                 // 节点的其他配置
            // 节点样式配置,其他配置,state改变的时候会影响改变
            style: {
              opacity: 1,// 边透明度
              fill: 'steelblue', // 节点填充色
              stroke: '#666', // 节点描边色
              lineWidth: 1, // 节点描边粗细
            },
            // 节点上的标签文本配置,其他配置,state改变的时候不会影响改变
            labelCfg: {
              // 节点上的标签文本样式配置
              style: {
                fill: '#fff', // 节点标签文字颜色
              },
            },
          },
          defaultEdge: {
            // ...                 // 边的其他配置
            // 边样式配置
            style: {
              opacity: 0.6, // 边透明度
              stroke: 'grey', // 边描边颜色
            },
            // 边上的标签文本配置
            labelCfg: {
              autoRotate: true, // 边上的标签文本根据边的方向旋转
            },
          },
        });
      }
      graph.data(res);
      graph.render();
    })

    // 节点可以是圆形、矩形、图片
  }, [])
  return (
    <div ref={ref}></div>
  )
}
