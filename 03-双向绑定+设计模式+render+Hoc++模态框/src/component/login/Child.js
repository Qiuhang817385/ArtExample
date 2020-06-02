import React, { Component } from 'react'

export default class Child extends Component {
  render () {
    return (
      <div className="modal">
        <div className="content">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          <p>This is being rendered inside the #modal-container div.</p>
          <button onClick={this.props.handleHide}>Hide modal</button>
        </div>
      </div>
    )
  }
}
