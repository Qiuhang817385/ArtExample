import React from 'react'
import { Button, Table, } from 'antd';
export default function List ({ data }) {
  const columns = [{
    title: '课程名称',
    dataIndex: 'courseName',
  }, {
    title: '链接地址',
    dataIndex: 'address',
  }, {
    title: '密码',
    dataIndex: 'pwd',
  }]
  return (
    <div>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  )
}
