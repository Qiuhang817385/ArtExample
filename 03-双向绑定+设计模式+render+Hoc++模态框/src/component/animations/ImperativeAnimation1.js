import React, { Component } from 'react'

export default class ImperativeAnimation1 extends Component {
  // Div Ref.
  divRef = React.createRef()
  // State.
  state = { background: '#fff' }
  // Did Mount.
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }
  // On Scroll
  onScroll = event => {
    const div = this.divRef.current
    const { y } = div.getBoundingClientRect()
    console.log('y', y);
    if (y <= 0) {
      // 这种是什么颜色//木瓜色
      this.setState({ background: 'papayawhip' })
    } else {
      this.setState({ background: '#fff' })
    }
  }
  // Render.
  render () {
    return (
      <div ref={this.divRef} style={{ height: '200vh', background: this.state.background }}>
        滚动改变背景颜色-木瓜色
      </div>
    )
  }
}
