import React, { Component } from 'react'
import './Login.css'
import Modal from './Modal'
import ModalEdit from './ModalEdit'
// import Child from './Child';
import LoginChild from './LoginComp/LoginChild'
import EditChild from './EditComp/EditChild';
import { data } from './data';
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
    // const modal = this.state.showModal ? (
    //   <Modal>
    //     {/* <Child handleHide={this.handleHide} /> */}
    //     <LoginChild handleShow={this.handleShow} />
    //   </Modal>
    // ) : null;
    const EditModal = this.state.showModal ? (
      <ModalEdit>
        {/* <Child handleHide={this.handleHide} /> */}
        {/* <LoginChild handleHide={this.handleHide} /> */}
        <EditChild handleHide={this.handleHide} {...this.state.user} />
      </ModalEdit>
    ) : null;


    return (
      <div className="app">
        {/* <button onClick={this.handleShow}>展示</button>
        {modal} */}
        <hr />
        <div className="edit">
          编辑操作
          {
            data.map((user, index) =>
              <div key={index}>
                name:{user.name}/age:{user.age}/
                <button onClick={() => this.handleEdit(user)}>编辑</button>
              </div>)
          }
          {EditModal}
        </div>
      </div>
    );
  }
}
