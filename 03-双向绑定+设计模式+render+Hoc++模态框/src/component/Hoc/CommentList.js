import React, { Component } from 'react'
import DataSource from './DataSource'
export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      comments: DataSource.getComments()
    };
  }
  componentDidMount () {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange);
  }
  componentWillUnmount () {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange);
  }
  handleChange = () => {
    console.log('发生改变')
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments()
    });
  }
  render () {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <div comment={comment} key={index} >{comment}</div>
        ))}
      </div>
    )
  }
}
