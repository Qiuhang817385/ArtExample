let arr = [1, 2, 1, 1, 11, 1, 1, 11, 1, 1, 1, 3, 2, 2, 3, 2, 31, 4, 5, 31, 1, 1, 2, 2, 2, 1, 2, 4, 5, 3];

let obj = {};

arr.forEach((item, index) => {
  if (obj.hasOwnProperty(item)) {
    obj[item]++
  } else {
    obj[item] = 1;
  }
})

let newarr = [];
for (const key in obj) {
  if (parseInt(obj[key]) > (arr.length / 3)) {
    newarr.push(key);
  }
}
console.log('newarr', newarr);

let str = 'http://sample.com/?a=1&b=2&c=xx&d=h';

str = str.split('?')[1].split('&');
let ooo = {};
str.forEach((item) => {
  ooo[item.split('=')[0]] = item.split('=')[1]
})
console.log('ooo', ooo)