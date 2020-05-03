不赞同刷面试题
手写 promise

react ssr

知识图谱?

首屏性能优化

seo

做一个同构的应用

必须有两个入口,webpack-serve 入口和 webpack-cli 入口



## react渲染要在node层渲染

![image-20200503134757925](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503134757925.png)

vue的ssr要打成两个包

node里面渲染jsx,必须要使用babel



![image-20200503135301015](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503135301015.png)

![image-20200503141212056](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503141212056.png)





node层的webpack打包



支持react的话

都是用最新的env

![image-20200503141500132](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503141500132.png)

## preset-env解析es6和jsx的语法

![image-20200503141634807](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503141634807.png)



前端的入口文件

![image-20200503142041312](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503142041312.png)

打包到public目录





## 服务端干的事情

![image-20200503142327693](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503142327693.png)

好像就是支持了一下jsx语法,然后使用renderTostring



客户端好像什么都没干  就是正常写?唯一改的地方就是这里了

```js
// ssr  render需要hydreate替换注水
ReactDom.hydrate(
  <Index></Index>
  ,
  document.getElementById('root')
)
```



## 同构路由

![image-20200503143323774](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503143323774.png)

路由在后端是静态的

后端的写法,后端用staticRouter

![image-20200503143622608](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503143622608.png)





## 前端改成Broswer  直接刷新页面的话会404

解决方式

后端改成*就可以了

![image-20200503143801630](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503143801630.png)



## 同构+redux

前后端都需要用???

后端不需要做东西吧



## 后端做的配置,前端再入口做的事情,在后端同样需要来做一遍

就是provider

前端

![image-20200503144400296](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503144400296.png)

后端

![image-20200503144556792](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503144556792.png)

还没完,应该在服务端拉取数据



前端

![image-20200503144858030](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503144858030.png)



## 怎么把路由改成可配置的,安装react-router-config



![image-20200503144925781](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503144925781.png)



![image-20200503145024155](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503145024155.png)

![image-20200503145225219](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503145225219.png)



### 服务器端

进行判断,如果组件里面有load就从server端加载数据



服务端使用matchRoutes 

![image-20200503145321204](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503145321204.png)

代码具体看文件





服务端客户端同时渲染?

进行修正,

![image-20200503145715380](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200503145715380.png)



然后改成clientStore



数据全部存储在window_context当中





## 扩展  如何seo  如何css

