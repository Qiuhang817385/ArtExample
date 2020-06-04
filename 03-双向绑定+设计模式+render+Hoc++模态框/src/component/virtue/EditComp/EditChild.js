import React from 'react'
import './LoginChild.css'
export default function LoginChild (props) {
  console.log(props);
  const { handleHide, user } = props;
  console.log(props);
  return (
    <div className="LoginChild" >
      <div className="form-login">
        {user}
      </div>
      <div className="close">
        <div className="closebutton" onClick={handleHide}>关闭</div>
      </div>
    </div>
  )
}
