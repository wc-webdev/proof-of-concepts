((window) => {
  function AppShellInterop(config = {}) {
    const { targetOrigin = '*', } = config
    const iframes = []
    this.register = iframe => {
      iframes.push(iframe)
    }
    this.broadcast = message => {
      iframes.forEach(i => {
        i.contentWindow.postMessage(message, targetOrigin)
      })
    }
    this.listen = cb => {
      window.addEventListener('message', cb)
    }
  }

  window.AppShellInterop = AppShellInterop
})(window)
