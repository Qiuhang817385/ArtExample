import React from 'react'
class Cat extends React.Component {
  render () {
    const mouse = this.props.mouse;
    return (
      <img alt="2" src="/4Pane.png" style={{ width: '40px', height: '40px', position: 'absolute', left: mouse.x - 20, top: mouse.y - 20 }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render () {
    return (
      <div style={{ height: '200px', border: '1px solid green' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class Render extends React.Component {
  render () {
    return (
      <div>
        <h1>render prop 是一个用于告知组件需要渲染什么内容的函数 prop。</h1>
        {/* render prop 是一个用于告知组件需要渲染什么内容的函数 prop */}
        {/* Mouse是功能性组件，返回一个值，用来给Cat使用，最后渲染的主体是Cat */}
        <Mouse render={mouse => {
          // console.log('mouse', mouse)
          // mouse是坐标
          return (
            <Cat mouse={mouse} />
          )
        }
        } />
      </div>
    );
  }
}