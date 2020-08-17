// * 给定 csv 文件，转换成对象结构(并提供测试用例):
interface Person {
  name?: string
  age?: number
  parent?: Person[]
  children?: Person[]
}

const csv = `
name,age,parent
Bob,30,David
David,60, 
Anna,10,Bob
`

const csvarray = csv
  .split('\r')
  .join('')
  .split('\n')
  .filter((item) => item.length > 0)

let objArr: Person[] = []
for (let i = 1; i < csvarray.length; i++) {
  let ele = csvarray[i]

  let obj: Person = {}

  obj[csvarray[0].split(',')[0]] = ele.split(',')[0]
  obj[csvarray[0].split(',')[1]] = ele.split(',')[1]
  obj[csvarray[0].split(',')[2]] = ele.split(',')[2]
  objArr.push(obj)
}

console.log(csvarray)

// 明天写树的转换操作
console.log('objArr', objArr)
