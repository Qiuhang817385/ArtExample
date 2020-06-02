import React from 'react'
import './css/Header.css'
export default function Header (props) {
  const { title, onBack } = props
  return (
    <div className="header">
      {/* 子组件调用父组件的方法 */}
      <div className="header-back" onClick={onBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1 className="header-title">
        {title}
      </h1>
    </div>
  )
}
