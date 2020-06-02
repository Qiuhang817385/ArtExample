import React, { Component } from 'react'
import './Portals.css'
import { createPortal } from 'react-dom';
// const appRoot = document.getElementById('app-root');
class Modal extends React.Component {
  constructor(props) {
    super(props);

    const modalRoot = window.document;

    this.el = document.createElement('div');
    this.el.className = 'dialog'
    modalRoot.body.appendChild(this.el);
  }

  componentWillUnmount () {
    window.document.body.removeChild(this.el)
  }
  render () {
    return createPortal(
      this.props.children,
      this.el,
    );
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleHide = () => {
    this.setState({ showModal: false });
  }

  render () {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className="content">
            <div>
              With a portal, we can render content into a different
              part of the DOM, as if it were any other React child.
          </div>
            <p>This is being rendered inside the #modal-container div.</p>
            <button onClick={this.handleHide}>Hide modal</button>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
        <div id="div1"></div>
      </div>
    );
  }
}
