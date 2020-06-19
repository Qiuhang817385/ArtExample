import React, { useState, useEffect } from "react"

import "./styles.css"
import { createClipPath } from './utils';
const icoSuccess = require("./icons/success.png")
const icoError = require("./icons/error.png")
const icoReload = require("./icons/reload.png")
const icoSlider = require("./icons/slider.png")

const STATUS_LOADING = 0 // 还没有图片
const STATUS_READY = 1 // 图片渲染完成,可以开始滑动
const STATUS_MATCH = 2 // 图片位置匹配成功
const STATUS_ERROR = 3 // 图片位置匹配失败

const arrTips = [{ ico: icoSuccess, text: "匹配成功" }, { ico: icoError, text: "匹配失败" }]


function ImageCode (props) {

  const { imageUrl, imageWidth, imageHeight, fragmentSize, onMatch, onError, onReload } = props;

  const [isMovable, setIsMovable] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0)
  const [startX, setStartX] = useState(0);
  const [oldX, setOldX] = useState(0);
  const [currX, setCurrX] = useState(0);
  const [status, setStatus] = useState(STATUS_LOADING);
  const [showTips, setShowTips] = useState(false);
  const [tipsIndex, setTipsIndex] = useState(0);
  useEffect(() => {
    if (!!(imageUrl)) {
      renderImage()
    }
  }, [])
  return (
    <div>

    </div>
  )
}

export default ImageCode;
