import React from 'react'
import MouseTracker from './MouseTracker'
import MouseECP from './MouseECP'
import Test1 from './Test1'
import Test2Render from './Test2Render'
export default function Render () {
  return (
    <div>
      <MouseTracker></MouseTracker>
      {/* 组件是 React 代码复用的主要单元，
      但如何分享一个组件封装到其他需要相同 state 组件的状态或行为并不总是很容易。
       */}
      <hr />
      <MouseECP></MouseECP>
      <hr />
      <Test1></Test1>
      <hr />
      <Test2Render></Test2Render>
    </div>
  )
}
