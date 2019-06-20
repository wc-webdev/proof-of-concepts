export default function AppShellInterop(config = {}) {
  const { targetOrigin = '*', } = config
  this.emit = data => {
    let parent = window
    while (parent.parent !== parent) {
      parent = parent.parent
    }
    parent.postMessage(data, targetOrigin)
  }
  this.listen = cb => {
    window.addEventListener('message', cb)
  }
}
