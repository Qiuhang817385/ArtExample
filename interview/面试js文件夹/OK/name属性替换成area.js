// 转换
// 把name属性替换成area
const dataSource = [
  {
    name: '中国',
    code: 100,
    children: [
      {
        name: '浙江',
        code: 10055,
        children: [
          {
            name: '杭州',
            code: 1005501
          }
        ]
      }
    ]
  }
]
const transform = (dataSource) => {
  return dataSource.map((item) => {
    item.area = item.name;
    delete item.name
    if (item.children) {
      transform(item.children)
    }
    return item
  })
}
let aaa = transform(dataSource);
console.log('aaa', aaa);


const filter = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].children) {
      filter(data[i].children)
    }
    for (let key in data[i]) {
      let newKey = 'area';
      let oldKey = 'name';
      if (key !== 'children') {
        console.log('key', key);
        data[i][newKey] = data[i][key];
        delete data[i][oldKey]
      }
    }
  }
  return data;
}
let a = filter(dataSource)
console.log('a', a)