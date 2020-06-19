// 给定一个对象,经过扁平化处理,得到下面结果
let input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null
}
let output = {
  "a": 1,
  "b[0]": 1,
  "b[1]": 2,
  "b[2].c": true,
  "b[3][0]": 3,
  "d.e": 2,
  "d.f": 3,
  "g": null,
}
// 值是null或者undefined丢弃
// 请实现flatten(input)函数