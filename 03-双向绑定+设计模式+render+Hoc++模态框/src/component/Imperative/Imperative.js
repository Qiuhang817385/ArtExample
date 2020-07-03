import React, { useRef } from 'react';
import FancyInput from './C'

const Imp = props => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button
        onClick={() => console.log("fancyInputRef.current", fancyInputRef.current)}
      >父组件访问子组件的实例属性</button>

      <button
        onClick={() => fancyInputRef.current.focus()}
      >父组件调用子组件的 focus</button>
    </div>
  )
}

export default Imp;