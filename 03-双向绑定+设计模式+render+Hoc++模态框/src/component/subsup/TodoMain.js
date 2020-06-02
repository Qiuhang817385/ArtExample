import React, { Component } from 'react'
import PubSub from 'pubsub-js';
export default class ComponentName extends Component {
  handleChange = () => {
    const { updateTodoChecked, todo } = this.props;
    todo.isDone = !todo.isDone;
    updateTodoChecked()
  }
  deleteTodo = () => {
    // const {  index } = this.props;
    PubSub.publish('delete', '删除');
  }

  render () {
    return (
      <div>
        <button onClick={this.deleteTodo}>删除</button>
      </div>
    )
  }
}
