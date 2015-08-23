
var global = window || this;

var emptyFunction = function (){};

var cancelAnimationFrame =
  global.cancelAnimationFrame       ||
  global.webkitCancelAnimationFrame ||
  global.mozCancelAnimationFrame    ||
  global.oCancelAnimationFrame      ||
  global.msCancelAnimationFrame     ||
  global.clearTimeout;

var nativeRequestAnimationFrame =
  global.requestAnimationFrame       ||
  global.webkitRequestAnimationFrame ||
  global.mozRequestAnimationFrame    ||
  global.oRequestAnimationFrame      ||
  global.msRequestAnimationFrame;

var lastTime = 0;

var requestAnimationFrame = 
  nativeRequestAnimationFrame ||
  function (cb) {
    var cur = Date.now();
    var delay = Math.max(0, 16 - (cur - lastTime));
    lastTime = cur + delay;
    return global.setTimeout(function () {
      cb(Date.now());
    }, delay);
  };

requestAnimationFrame(emptyFunction);

module.exports = {
  nextFrame: requestAnimationFrame.bind(global),
  cancelFrame: cancelAnimationFrame.bind(global)
}
