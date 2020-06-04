import React, { Component } from 'react'
// import './Login.css'
import ModalEdit from './ModalEdit'
import EditChild from './EditComp/EditChild';
import { data } from './data';
export default class Edit extends Component {
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
  handleProp = (e) => {
    console.log('冒泡了')
    e.stopPropagation();
  }
  handleProp2 = (e) => {
    console.log('冒泡了2')
    e.stopPropagation();
  }
  handleProp3 = (e) => {
    e.stopPropagation();
  }


  render () {
    const EditModal = this.state.showModal ? (
      <ModalEdit onClick={this.handleProp3}>
        <EditChild handleHide={this.handleHide} {...this.state.user} />
      </ModalEdit>
    ) : null;


    return (
      <div className="app">
        <div className="edit">
          编辑操作
          {
            data.map((user, index) =>
              <div key={index}>
                name:{user.name}/age:{user.age}/
                <button onClick={() => this.handleEdit(user)}>编辑</button>
              </div>)
          }
          <div onClick={this.handleProp2}>
            <div onClick={this.handleProp}>
              {EditModal}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
