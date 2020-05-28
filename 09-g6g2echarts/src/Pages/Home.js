import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
export default function Home (props) {
  const handleClick = () => {
    console.log('123')
  }
  return (
    <div>
      <Menu onClick={handleClick} mode="horizontal">
        <Menu.Item key="main">
          <Link to="/main">Main</Link>
        </Menu.Item>
        <Menu.Item key="g6">
          <Link to="/g6">G6</Link>
        </Menu.Item>
        <Menu.Item key="g2">
          <Link to="/g2">G2</Link>
        </Menu.Item>
        <Menu.Item key="echarts">
          <Link to="/echarts">echarts</Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  )
}
