import React, { Component } from 'react'
import './Login.css'
import Modal from './Modal'
// import Child from './Child';
import LoginChild from './LoginComp/LoginChild'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, user: null };
  }
  handleShow = () => {
    this.setState({ showModal: true });
  }
  handleHide = () => {
    this.setState({ showModal: false });
  }
  handleEdit = (user) => {
    this.setState({ user })
    this.handleShow()
  }

  render () {
    const modal = this.state.showModal ? (
      <Modal>
        {/* <Child handleHide={this.handleHide} /> */}
        <LoginChild handleHide={this.handleHide} />
      </Modal>
    ) : null;


    return (
      <div className="app">
        <button onClick={this.handleShow}>登录按钮</button>
        {modal}
        <hr />
      </div>
    );
  }
}
