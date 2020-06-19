// 考虑下面一种获取用户 id 的请求处理：
//不使用Promise
// http.get('some_url', function (result) {
//   //do something
//   console.log(result.id);
// });
//使用Promise
// new Promise(function (resolve) {
//   //异步请求
//   http.get('some_url', function (result) {
//       resolve(result.id)
//   })
// }).then(function (id) {
//   //do something
//   console.log(id);
// })

// promise解决了回调函数层层嵌套,回调地狱的问题
