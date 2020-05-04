import * as React from 'react'
import { Hello, HelloClass, HelloFun } from './components/Hello'
interface AppProps {}
export const App: React.FC<AppProps> = (props) => (
  <>
    <Hello compiler={'编译'} framework={'框架'}></Hello>
    <HelloClass compiler={'类编译'} framework={'类框架'}></HelloClass>
    <HelloFun compiler={'函数编译'} framework={'函数框架'}></HelloFun>
  </>
)
