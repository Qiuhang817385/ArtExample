import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
// const SubMenu = Menu.Item;
import { Menu } from 'antd';
export default function Home (props) {
  const [current, setCurrent] = useState('');
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="Index">
          <NavLink to="index">Index</NavLink>
        </Menu.Item>
        <Menu.Item key="Query">
          <NavLink to="query">Query</NavLink>
        </Menu.Item>
      </Menu>
      {props.children}
    </>
  )
}
