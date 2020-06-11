import React, { useState, useEffect } from 'react'
import { SimplePinYin } from './Dictionary';
import ListShow from './ListShow';
import * as XLSX from 'xlsx';
export default function Page4 () {

  const [word, setWord] = useState('');
  const [filterDisplay, setFilterDisplay] = useState([]);
  // 原数据
  const [data, setData] = useState([])
  // 备份初始化数据,用于存储课程名称转换成字符串数组后的结果
  const [copyData, setCopyData] = useState([]);
  /**
   * 去除两边空格
   */
  const trim = (str) => {
    return str.replace(/(^\s*)|(\s*$)/g, "")
  }
  /**
   * 数据初始化
   */
  // useEffect(() => {
  //   const data1 = [{ courseName: "亿级流量电商详情页系统实战（一+二版本）", address: "https://pan.baidu.com/s/1piFypD1Z3tuomiKJCD_ESQ", pwd: "g6la", __rowNum__: 1 },
  //   { courseName: "慕课网运维测试", address: "https://pan.baidu.com/s/1I7xTDSNDLKINDwJpb24skA", pwd: "yh9a", __rowNum__: 2 },
  //   { courseName: "慕课网移动开发", address: "https://pan.baidu.com/s/1JLrfMtIP45OB7GotStb_Fw", pwd: "2rlj", __rowNum__: 3 },
  //   { courseName: "慕课网算法数据结构", address: "https://pan.baidu.com/s/1kSzjvALQ36KA6wJT88oJPA", pwd: "bs93", __rowNum__: 4 },
  //   { courseName: "慕课网数据库", address: "https://pan.baidu.com/s/1yNMs1zec5lItmMLWUpORSA", pwd: "onwj", __rowNum__: 5 },
  //   { courseName: "慕课网深度学习人工智能", address: "https://pan.baidu.com/s/1oID3o9XqrqdCTxuFs_XyXg", pwd: "ivry", __rowNum__: 6 }]
  //   data1.forEach((v, i) => { v.key = v.address });
  //   setData(data1);
  // }, [])
  /**
   * 缓存初始化
   */
  useEffect(() => {
    let newD = JSON.parse(JSON.stringify(data));
    newD.forEach((v, i) => {
      v.courseName = SimplePinYin.convertPYs(v.courseName);
    })
    setCopyData(newD);
  }, [data])

  /**
   * 搜索
   */
  const handleChange = (e) => {
    let str = trim(e.target.value);
    setWord(str);
    if (str !== '') {
      let newList = [];
      newList = copyData.filter((v) =>
        v.courseName[0].toLowerCase().includes(str.toLowerCase()) ||
        v.courseName[1].toLowerCase().includes(str.toLowerCase()) ||
        v.courseName[2].toLowerCase().includes(str.toLowerCase()))
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(data);
    }
  }
  // 上传excel文件
  const handleExcel = (file) => {
    // 获取上传的文件对象
    const { files } = file.target;
    console.table('files', files);
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
        let newData = data;
        if (newData.length) {
          newData.forEach((v, i) => {
            v.key = i
          })
        }
        setData(newData);
        // console.table(data);
      } catch (e) {
        console.log('文件类型不正确');
        return;
      }
    }
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }

  return (
    <div>
      {/* 上传文件 */}
      <input type="file"
        accept='.xlsx,.xls'
        name="upload"
        id="upload"
        onChange={handleExcel}
      />
      <br />
      {/* 搜索框 */}
      搜索:<input type="text" value={word} onChange={handleChange} />
      <hr />
      {word}
      <hr />
      {/* 表格 */}
      <ListShow data={word.length < 1 ? data : filterDisplay} />
    </div>
  )
}
