// Jest Test Polyfill
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}
