import React, { useState } from 'react'
import * as XLSX from 'xlsx';

import './Page.scss'


export default function Page1 () {

  const [data, setData] = useState();
  // console.log(data);
  const handleExcel = (file) => {
    // 获取上传的文件对象
    const { files } = file.target;
    console.log('files', files);
    // 通过fileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = e => {
      try {
        const { result } = e.target;
        // 以二进制流的方式读取得到整份excel彪哥对象
        const workbook = XLSX.read(result, { type: 'binary' });
        let data = [];//存储获取到的数据
        // 变量每张工作表进行读取
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用sheet_to_json方法把excel转换成json数据
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break;//如果只取第一张表，就取消注释
          }
        }
        setData(data);
        console.log('data', data);
      } catch (e) {
        console.log('文件类型不正确');
        return;
      }
    }
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }
  console.log(data);





  return (
    <div className="file-box">
      <label htmlFor="upload">上传文件</label>
      <input type="file"
        className="file-btn"
        accept='.xlsx,.xls'
        name="upload"
        id="upload"
        onChange={handleExcel}
      />
      <hr />
    </div>
  )
}
