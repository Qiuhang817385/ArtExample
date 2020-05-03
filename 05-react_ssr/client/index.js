// 客户端入口
import React from 'react';

import ReactDom from 'react-dom';
import Index from '../container/Index';

// ssr  render需要hydreate替换注水
ReactDom.hydrate(
  <Index></Index>
  ,
  document.getElementById('root')
)
