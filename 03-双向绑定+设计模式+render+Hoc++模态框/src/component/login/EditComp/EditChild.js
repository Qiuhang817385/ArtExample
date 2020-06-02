import React from 'react'
import './LoginChild.css'
export default function LoginChild (props) {
  console.log(props);
  const { handleHide, name, age } = props;
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
          <input type="text" id="userName" value={name} readOnly />
        </div>
        <div>
          <label htmlFor="age">年龄</label>:
          <input type="text" id="age" value={age} readOnly />
        </div>
        <div>
          <button onSubmit={handleSubmit}>登录/没有修改的功能</button>
        </div>
      </form>
      <div className="close">
        <div className="closebutton" onClick={handleHide}>关闭</div>
      </div>
    </div>
  )
}
