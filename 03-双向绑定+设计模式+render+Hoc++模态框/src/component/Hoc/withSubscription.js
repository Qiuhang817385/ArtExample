import DataSource from './DataSource'
import React, { Component } from 'react'
// 接受一个子组件作为其中的一个参数，
//       并从数据源订阅数据作为props属性传入子组件
// selectData?  是什么一个方法,返回的应该是数组?不清楚
// 传入一个对象,调取对象里面的get方法?
let withSubscription = (WrappedComponent, selectData) => {
  // ……返回另一个新组件……
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount () {
      // ……注意订阅数据……
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount () {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange () {
      console.log('this.props', this.props)
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }
    render () {
      // ……使用最新的数据渲染组件
      // 注意此处将已有的props属性传递给原组件
      const style = {
        'marginBottom': '30px'
      }
      /* 高阶组件既不会修改原组件，也不会使用继承复制原组件的行为。
相反，高阶组件是通过将原组件包裹（wrapping）在容器组件（container component）
里面的方式来组合（composes） 使用原组件。
高阶组件就是一个没有副作用的纯函数。
高阶组件接收容器组件的所有props属性以及一个新的 data属性，
并将从数据源订阅的数据用 data 属性渲染输出内容。
高阶组件并不关心数据是如何以及为什么被使用，而被包裹组件也不关心数据来自何处。
*/
      return (
        <div style={style}>
          <div>This is a HOC Component...</div>
          <WrappedComponent data={this.state.data} {...this.props} />
        </div>
      );
    }
  };
}
export default withSubscription;