import React from 'react';
import { createPortal } from 'react-dom';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    const modalRoot = window.document;
    this.el = document.createElement('div');
    this.el.className = 'dialog'
    modalRoot.body.appendChild(this.el);
  }
  componentDidMount () {
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