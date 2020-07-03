import React, {
  useState,
  useRef,
  useImperativeHandle,
  useCallback
} from 'react';
import './index.scss'
const FancyInput = React.forwardRef((props, ref) => {
  const [fresh, setFresh] = useState(false)
  const [count, setCount] = useState(0);
  const attRef = useRef(0);
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    attRef,
    fresh,
    count,
    focus: () => {
      inputRef.current.focus();
    }
  }), [fresh]);

  /* 
      attRef: {current: 0}
      count: 0
      fresh: false
   */

  const handleClick = useCallback(() => {
    attRef.current++;
  }, []);

  return (
    <div>
      {attRef.current}
      <button onClick={handleClick}>Fancy</button>
      <button onClick={() => setFresh(!fresh)}>刷新</button>
      <input className='input' ref={inputRef} type="text" />
    </div>
  )
});

export default FancyInput;