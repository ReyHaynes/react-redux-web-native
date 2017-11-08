// Jest Test Polyfills
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

global.window = {
  // navigator: {}
}
