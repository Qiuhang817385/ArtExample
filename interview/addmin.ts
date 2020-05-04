// 实现(5).add(5).minus(1)的功能//9

// let 10 = (5).add(5)
;(Number as any).prototype.add = function (num: number) {
  console.log(typeof this) //Object
  console.log('this.valueOf()', typeof this.valueOf()) //number--》5
  return this.valueOf() + num
}
;(Number as any).prototype.minus = function (num: number) {
  return this.valueOf() - num
}
/* 
  valueOf()：返回最适合该对象类型的原始值；
  toString(): 将该对象的原始值以字符串形式返回。
  这两个方法一般是交由JS去隐式调用，以满足不同的运算情况。
  在数值运算里，会优先调用valueOf()，如a + b；
  在字符串运算里，会优先调用toString()，如alert(c)。

 */
// Number.prototype.minus = function (number) {
//   if (typeof number !== 'number') {
//       throw new Error('请输入数字～');
//   }
//   return this.valueOf() - number;
// };
// console.log((5).add(3).minus(2));

// ;(Number as any).prototype.add = (num: number): number => {
//   return (this.valueOf() as any) + num
// }
// 谁调用，this就是谁，5现在当成一个对象来使用，valueOf是

console.log('(10 as any).add(12).minx2(2)', (10 as any).add(12).minx2(2))
