// 只有第一次用到了一下
function fizzBuzzReducer(acc, element) {
  if (element % 15 === 0) return `${acc}Fizz Buzz\n`
  if (element % 5 === 0) return `${acc}Fizz\n`
  if (element % 3 === 0) return `${acc}Buzz\n`
  return `${acc}${element}\n`
  // 日常打开
  // 展示
  // 打卡
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(nums.reduce(fizzBuzzReducer, '1s'))
