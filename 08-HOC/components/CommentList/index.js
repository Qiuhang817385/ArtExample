import React from 'react'

export default class extends React.Component {

  render () {
    console.log('this.props', this.props)
    return (
      <div>
        {this.props.data.map((value) => (
          <div comment={value} key={value} >{value}</div>
        ))}
      </div>
    );
  }
}