// 数组去重
function noRepeat (arr) {
  return [...new Set(arr)];
}
// 查找数组最大
function arrayMax (arr) {
  return Math.max(...arr);
}
// 查找数组最小
function arrayMin (arr) {
  return Math.min(...arr);
}
// 返回以 size 为长度的数组分割的原数组
function chunk (arr, size = 1) {
  return Array.from(
    {
      // 大于或等于一个给定数字的最小整数
      length: Math.ceil(arr.length / size),
    },
    (v, i) => {
      console.log('v,i', v, i);// undefiend 3 0-4 / 5 0-2
      return arr.slice(i * size, i * size + size)
    }
  );
}

// Math.floor() === 向下取整
// Math.round() 函数返回一个数字四舍五入后最接近的整数。

// ============================================================

// 检查数组中某元素出现的次数
function countOccurrences (arr, value) {
  return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
}


// 扁平化数组
// 默认 depth 全部展开
function flatten (arr, depth = -1) {
  if (depth === -1) {
    return [].concat(
      ...arr.map((v) => (Array.isArray(v) ? this.flatten(v) : v))
    );
  }
  if (depth === 1) {
    return arr.reduce((a, v) => a.concat(v), []);
  }
  return arr.reduce(
    (a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v),
    []
  );
}


// 对比两个数组并且返回其中不同的元素
function diffrence (arrA, arrB) {
  return arrA.filter((v) => !arrB.includes(v));
}
// 返回两个数组中相同的元素
function intersection (arr1, arr2) {
  return arr2.filter((v) => arr1.includes(v));
}

// 从右删除 n 个元素
function dropRight (arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}

// 返回数组中下标间隔 nth 的元素
function everyNth (arr, nth) {
  return arr.filter((v, i) => i % nth === nth - 1);
}

// 数组乱排
function shuffle (arr) {
  let array = arr;
  let index = array.length;

  while (index) {
    index -= 1;
    let randomInedx = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomInedx];
    array[randomInedx] = middleware;
  }

  return array;
}