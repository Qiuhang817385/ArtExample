import React, { useState } from 'react';
const Index = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  )
}