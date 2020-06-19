const memoize = fn => {
  //实现
}

function sqrt (n) {
  return Math.sqrt(n)
}

const cacheSqrt = memoize(sqrt);
cacheSqrt(4) //2
cacheSqrt(4) //不计算，直接输出2