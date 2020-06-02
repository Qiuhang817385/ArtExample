import React from 'react'
import CommentList from './CommentList'
export default function Hoc () {
  return (
    <div>
      <h1>高阶组件是参数为组件，返回值为新组件的函数。</h1>
      <h2>高阶组件就是一个函数，参数是一个老的组件，并返回一个新的组件</h2>
      <h3>使用高阶组件（HOC）解决交叉问题</h3>
      假设有两个组件
      CommentList组件从外部数据源订阅数据并渲染评论列表
      BlogPost组件是一个订阅单个博客文章的组件,在componentDidMount中添加事件处理函数订阅数据，在componentWillUnmount中清除事件处理函数
      两个组件的事件处理函数内容相同。

      两个组件的区别在于：从数据源订阅的数据不同，并且渲染格式不同。

      由此，可以将两个组件中相同的逻辑部分提取到一个高阶组件
      该高阶组件能够创建类似 CommonList 和 BlogPost 从数据源订阅数据的组件 。
      高阶组件命名为WithSubscription。
      接受一个子组件作为其中的一个参数，

      并从数据源订阅数据作为props属性传入子组件
      <hr />
      <CommentList></CommentList>
    </div>
  )
}
