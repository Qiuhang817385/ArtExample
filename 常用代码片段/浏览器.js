// 返回当前网页地址
function currentURL () {
  return window.location.href;
}

// 获取滚动条位置
function getScrollPosition (el = window) {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
  };
}

// 获取 url 中的参数
function getURLParameters (url) {
  return url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    );
}
// 页面跳转，是否记录在 history 中
function redirect (url, asLink = true) {
  asLink ? (window.location.href = url) : window.location.replace(url);
}
// 滚动条回到顶部动画
function scrollToTop () {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  } else {
    window.cancelAnimationFrame(scrollToTop);
  }
}

// 检测设备类型
function detectDeviceType () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
}