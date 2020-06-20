let obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };


console.log('Object.keys(obj)', Object.keys(obj))

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// for in 键名,可以对象,原型,不可以中断

// for of 键值,Iterator接口,可以中断

// for in 和object.keys得到的数组区别
// for in包括原型
// keys不包括原型
