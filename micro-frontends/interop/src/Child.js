import Subscriber from './Subscriber'

export default function Child(config = {}) {
  const { targetOrigin = '*', } = config

  this.subscriber = new Subscriber()

  this.emit = data => {
    let parent = window
    while (parent.parent !== parent) {
      parent = parent.parent
    }
    parent.postMessage(data, targetOrigin)
  }
}
