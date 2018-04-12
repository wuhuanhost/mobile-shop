(function () {
  var width1 = document.documentElement.clientWidth
  var width2 = 750
  if (width1 > 750) { width1 = 460 };
  var zoom = width1 / width2
  document.querySelector('html').style.fontSize = zoom * 100 + 'px'
  document.querySelector('html').style.height = '100%'
  document.querySelector('html').setAttribute('data-dpr', window.devicePixelRatio)
})()

//   消除数学计算精度不准的问题，比如0.1+0.2=0.30000000000000000000000004的问题
//   使用
//   Math.formatFloat(0.1+0.2,1)
//   0.3
Math.formatFloat = function (f, digit) {
  var m = Math.pow(10, digit)
  return parseInt(f * m, 10) / m
}
