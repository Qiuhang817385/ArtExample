import React from 'react'
import './LoginChild.css'
export default function LoginChild (props) {
  const { handleHide } = props;
  const handleSubmit = (event) => {
    handleHide()
    console.log('提交了')
    event.preventDefault();
  }
  return (
    <div className="LoginChild" >
      <form className="form-login">
        <div>
          <label htmlFor="userName">用户名</label>:
          <input type="text" id="userName" />
        </div>
        <div>
          <label htmlFor="pwd">密码</label>:
          <input type="password" id="pwd" />
        </div>
        <div>
          <button onSubmit={handleSubmit}>登录</button>
        </div>
      </form>
      <div className="close">
        <div className="closebutton" onClick={handleHide}>关闭</div>
      </div>
    </div>
  )
}
