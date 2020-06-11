import React, { useState, useEffect } from 'react'
import { exportExcel } from 'xlsx-oc';
import { Button, Table } from 'antd';

export default function Page2 () {
  const [data, setData] = useState([]);
  const exportDefaultExcel = () => {
    let _headers = [
      { k: 'name', v: 'Name' },
      { k: 'age', v: 'Age' },
      { k: 'address', v: 'Address' }
    ]
    exportExcel(_headers, data);
  }

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }]

  useEffect(() => {
    let data = [];
    // for (let i = 0; i < 30; i++) {
    //   data.push({
    //     key: i,
    //     name: `路人${i}`,
    //     age: i,
    //     address: `幸福路${i}号`
    //   })
    // }
    setData(data)
  }, [])

  return (
    <div>
      <Table dataSource={data} columns={columns}></Table>
      <Button type="primary" style={{ marginLeft: 20 }}
        onClick={() => { exportDefaultExcel() }}
      >导出</Button>
    </div>
  )
}
