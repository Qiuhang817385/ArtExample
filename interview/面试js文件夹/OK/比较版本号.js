/*
  用于比较两个版本号
  (version1,version2)
  如果1>2  return 1
  如果1<2  return -1
  其他返回 0

  compareVersion('0.1','1.1.1') 返回-1
  compareVersion('13.37','1.2') 返回1
  compareVersion('1.1','1.1.0') 返回0

 */

const compareVersion = (version1, version2) => {
  let version1Arr = version1.split('.'); //[0,1]
  let version2Arr = version2.split('.'); //[1,1,1]
  let length = Math.min(version1Arr.length, version2Arr.length);
  for (let i = 0; i < length; i++) {
    if (version1Arr[i] > version2Arr[i]) {
      return 1
    } else if (version1Arr[i] < version2Arr[i]) {
      return -1
    } else if (version1Arr[i] === version2Arr[i]) {
      return 0
    } else {
      continue;
    }
  }
}
let res = compareVersion('0.1', '1.1.1');
let res2 = compareVersion('13.37', '1.2');
let res3 = compareVersion('1.1', '1.1.0');
console.log('res', res);
console.log('res2', res2);
console.log('res3', res3);