import React, { useState } from 'react'
import InputChild from './Input'
export default function Index () {
  const [value, setValue] = useState('');
  return (
    <div >
      <InputChild value={value} changeVal={(res) => {
        setValue(res);
      }}></InputChild>
      父元素值:{value}
    </div>
  )
}
