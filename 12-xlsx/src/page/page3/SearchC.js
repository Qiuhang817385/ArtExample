import React from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const { Search } = Input;

export default function SearchC (props) {
  const { value, handleChange } = props
  console.log(value);
  return (
    <>
      <Search value={value} placeholder="input search text" onChange={handleChange} enterButton />
    </>
  )
}
