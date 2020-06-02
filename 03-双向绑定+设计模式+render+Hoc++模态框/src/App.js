import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd'
function App (props) {
  const [current, setCurrent] = useState('')
  let handleClick = e => {
    console.log('e.key', e.key)
    setCurrent(e.key)
  };
  return (<>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mvvm">
        <Link to='/mvvm'>双向数据绑定,父子+子本身</Link>
      </Menu.Item>
      <Menu.Item key="subsup">
        <Link to='/subsup'>发布订阅模式</Link>
      </Menu.Item>
      <Menu.Item key="a">
        <Link to='/a'> A</Link>
      </Menu.Item>
      <Menu.Item key="renderProp">
        <Link to='/mouse'> Render Prop</Link>
      </Menu.Item>
      <Menu.Item key="hoc">
        <Link to='/hoc'> Hoc</Link>
      </Menu.Item>
      <Menu.Item key="portals">
        <Link to='/portals'> Portals</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to='/login'> Login</Link>
      </Menu.Item>
    </Menu>
    {props.children}
  </>)
}

export default App;