import React, { useState, useEffect } from 'react'
import ImageCode from './ImageCode'
import urls from './../../assets/3.jpg';
import urls2 from './../../assets/6.jpg';
export default function Index () {
  const [url, setUrl] = useState(urls);
  const onReload = () => {
    // setTimeout(() => {
    setUrl(urls2);
    console.log('重新加载')
    //   // console.log('重新加载')
    // }, 100)
  }
  return (
    <div>
      ok
      {url}
      <ImageCode
        imageUrl={url}
        // onReload={onReload}
        onMatch={() => {
          console.log("code is match")
          console.log('做进一步的校验')
        }}
      />
    </div>
  )
}
