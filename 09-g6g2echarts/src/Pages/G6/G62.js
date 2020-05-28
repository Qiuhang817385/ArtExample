import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import { data1 } from './data';
import { main } from './asyncData';
import './1.css';

// 增加简单的交互：hover 节点、点击节点、点击边、放缩画布、拖拽画布
export default function G6D () {
  const ref = React.useRef(null);
  let graph = null;
  let dataNode;
  useEffect(() => {
    // 插件
    const minimap = new G6.Minimap({
      size: [100, 100],
      className: 'minimap',
      type: 'delegate',
    });

    main().then(res => {
      return res;
    }).then((res) => {
      console.log('res', res)
      //       fitView：设置是否将图适配到画布中；
      //       fitViewPadding：画布上四周的留白宽度。
      if (!graph) {
        graph = new G6.Graph({
          container: ReactDOM.findDOMNode(ref.current), // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
          plugins: [minimap],
          animate: true, // Boolean，可选，全局变化时否使用动画过度
          width: 800, // Number，必须，图的宽度
          height: 500, // Number，必须，图的高度
          // fitView: true,
          // fitViewPadding: [20, 40, 50, 20],
          // 适用场景：所有节点统一的属性配置，所有边统一的属性配置。
          // 动态配置属性会覆盖全局配置属性
          layout: {                // Object，可选，布局的方法及其配置项，默认为 random 布局。
            type: 'force',         // 指定为力导向布局
            preventOverlap: true,  // 防止节点重叠
            // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
            linkDistance: 100, // 指定边距离为100
          },
          modes: {
            default: ['drag-canvas', 'zoom-canvas', 'drag-node', {
              type: 'tooltip', // 提示框
              formatText (model) {
                // 提示框文本内容
                const text = 'label: ' + model.label + '<br/> class: ' + model.class;
                return text;
              },
            }, {
                type: 'edge-tooltip', // 边提示框
                formatText (model) {
                  // 边提示框文本内容
                  const text =
                    'source: ' +
                    model.source +
                    '<br/> target: ' +
                    model.target +
                    '<br/> weight: ' +
                    model.weight;
                  return text;
                },
              },], // 允许拖拽画布、放缩画布、拖拽节点
          },
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
          // 交互行为
          nodeStateStyles: {
            // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
            hover: {
              fill: 'lightsteelblue',
            },
            // 鼠标点击节点，即 click 状态为 true 时的样式
            click: {
              stroke: '#000',
              lineWidth: 3,
            },
          },
          // 边不同状态下的样式集合
          edgeStateStyles: {
            // 鼠标点击边，即 click 状态为 true 时的样式
            click: {
              stroke: 'steelblue',
            },
          },
        });
      }
      graph.data(res);
      graph.render();

      // ============================================================Event
      // 鼠标进入节点
      graph.on('node:mouseenter', e => {
        const nodeItem = e.item; // 获取鼠标进入的节点元素对象
        graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
      });

      // 鼠标离开节点
      graph.on('node:mouseleave', e => {
        const nodeItem = e.item; // 获取鼠标离开的节点元素对象
        graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
      });

      // 点击节点
      graph.on('node:click', e => {
        // 先将所有当前是 click 状态的节点置为非 click 状态
        const clickNodes = graph.findAllByState('node', 'click');
        clickNodes.forEach(cn => {
          graph.setItemState(cn, 'click', false);
        });
        const nodeItem = e.item; // 获取被点击的节点元素对象
        graph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
      });

      // 点击边
      graph.on('edge:click', e => {
        // 先将所有当前是 click 状态的边置为非 click 状态
        const clickEdges = graph.findAllByState('edge', 'click');
        clickEdges.forEach(ce => {
          graph.setItemState(ce, 'click', false);
        });
        const edgeItem = e.item; // 获取被点击的边元素对象
        graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
      });


    })

    // 节点可以是圆形、矩形、图片
  }, [])
  return (
    <div ref={ref}></div>
  )
}
