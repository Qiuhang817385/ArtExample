//   ## 第四题 js 递归
// 实现 walk 函数，将树结构的数据转化为列表数据
let input = [
  {
    id: 1,
    text: 'text1',
    children: [
      {
        id: 2,
        text: 'text2',
        parentId: 1,
        children: [
          {
            id: 4,
            text: 'text4',
            parentId: 2,
          },
        ],
      },
      {
        id: 3,
        text: 'text3',
        parentId: 1,
      },
    ],
  },
]
let output = [
  {
    id: 4,
    text: 'text4',
    parentId: 2,
  },
  {
    id: 2,
    text: 'text2',
    parentId: 1,
  },
  {
    id: 3,
    text: 'text3',
    parentId: 1,
  },
  {
    id: 1,
    text: 'text1',
  },
]
function walk(list) {
  // code here
}
