// 数组扁平化，并且去除重复数据，最终得到一个升序并且不重复的数组
let arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
]

// let res = Array.from(new Set([...arr.flat(Infinity)]));
let res = [...new Set(arr.flat(Infinity))];

console.log('res', res);