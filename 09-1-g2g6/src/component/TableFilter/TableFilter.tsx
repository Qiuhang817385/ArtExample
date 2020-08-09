import React, { useState } from 'react'
import { data } from './data'
import { Table } from 'antd'

export interface IndexProps {}
const columns = [
  {
    title: 'Name',
    dataIndex: 'type',
    filters: [
      {
        text: '用户名/密码',
        value: 'PASSWORD',
      },
      {
        text: 'SSH秘钥',
        value: 'PRIVATE_PASSWORD',
      },
    ],
    render: (text, record) => {
      return record.type === 'PASSWORD' ? '用户名/密码' : 'SSH秘钥'
    },
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => {
      console.log('value', value)
      // value就是筛选项当中的value PASSWORD
      console.log('record', record)
      // record就是真实的每一条数据
      /* 
          address: "New York No. 1 Lake Park"
          age: 32
          key: "1"
          PASSWORD: "John Brown"
       */
      return record.type.indexOf(value) === 0
    },
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ['descend', 'ascend'],
  },
]
const Index: React.FC<IndexProps> = (props) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
    /* 
      current: 1
      pageSize: 10

      name: ["PASSWORD"]

      {}
      
      currentDataSource: []
     */
  }

  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  )
}

export default Index
