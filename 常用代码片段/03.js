// 入参格式参考：
const arr = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 5, name: 'i5', parentId: 3 },
  { id: 8, name: 'i8', parentId: 7 }
];

/* 可以将数组转化为树状数据结构，要求程序具有侦测错误输入的能力*/
function buildTree (arr) {
  /**
   * 此处写代码逻辑
   */
  arr.forEach(element => {
    console.log('element', element);
    let Tree = {};
    if(element.parentId){

      for(let key in Tree){
        if(element.parentId===Tree)
      }

    }else{
      // 只有一个根节点
      element;
    }
  });
}

buildTree(arr);