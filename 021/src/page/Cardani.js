import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import './Cardani.scss'
export default class testClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valStr: '',
      flag: [false, false, false, false, false, false]
    }
  }
  handleChange = (e) => {
    let valu = e.target.value;
    this.setState((prevState) => {
      let prev = prevState.valStr;
      let copyFlag = this.state.flag; // 复制标志数组
      if (valu.length === 0) {  //Init,或者按删除键删到了0 ,0位置为false
        copyFlag[0] = false;
        // for (let i = 0; i < copyFlag.length; i++) {
        //   copyFlag[i] = false;
        // }
      } else {
        if (prev.length > valu.length) { //执行了键删除的操作
          for (let i = valu.length; i < copyFlag.length; i++) {
            copyFlag[i] = false;
          }
          // copyFlag.splice(valu.length, 1, false); //替换
        } else {    //执行了键入的操作
          copyFlag.splice((valu.length - 1), 1, true) //替换
        }
      }
      return {
        flag: copyFlag,
        valStr: valu
      }
    }, () => {
      console.log('this.state.flag :', this.state.flag);
    })
  }
  render () {
    const { valStr, flag } = this.state;
    let newArr = '123456'
    return (
      <div>
        {/* <TransitionGroup> */}
        <div className="wrapper">
          {
            newArr.split('').map((item, index) => {
              return (
                <span key={index}>
                  {
                    valStr[index] ?
                      <CSSTransition
                        in={flag[index]}
                        timeout={250}
                        classNames="fade"
                        appear={true}
                        key={index}
                      >
                        <div className="Word">{valStr[index]}</div>
                      </CSSTransition>
                      : <CSSTransition
                        in={flag[index]}
                        timeout={250}
                        classNames="fade"
                        appear={true}
                        key={index}
                      >
                        <div className="Word">*</div>
                      </CSSTransition>
                  }
                </span>
              )
            })
          }
        </div>
        {/* </TransitionGroup> */}
        <hr />
        <div className="posi" style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '500px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <input type="tel" name="name" id="wq"
            maxLength='6'
            value={valStr}
            onChange={this.handleChange}
            onKeyDown={() => {
              // changeAni()
            }}
            onKeyUp={() => {
            }}
          />
        </div>
      </div>
    )
  }
}
