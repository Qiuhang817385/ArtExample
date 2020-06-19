import React from 'react'

import { Table } from 'antd';

const columns = [{
  title: '课程名称',
  dataIndex: 'courseName',
}, {
  title: '链接地址',
  dataIndex: 'address',
  render: address => (<a href={address}>{address}</a>)
}, {
  title: '密码',
  dataIndex: 'pwd',
}]

export default function ListShow (props) {
  // 传递进来的只有三种情况，1.原data，2.查找的结果课程名称被修改，3.空数组
  const { data } = props;
  let newData = [];
  // 匹配到的情况
  // !3.  !表示有匹配到记录
  if (data.length) {
    //2.
    if (Array.isArray(data[0].courseName)) {
      newData = JSON.parse(JSON.stringify(data));
      newData.forEach((v, i) => {
        v.courseName = v.courseName[2];
      })
      //1
    } else {
      newData = JSON.parse(JSON.stringify(data));
    }
  }
  return (
    <div>
      {newData.length ? <Table dataSource={newData} columns={columns}></Table> : '查找不到结果'}
    </div>
  )
}
