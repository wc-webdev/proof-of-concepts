import Subscriber from './Subscriber'

export default function Parent(config = {}) {
  const { targetOrigin = '*', } = config
  const children = []

  this.subscriber = new Subscriber()

  this.register = iframe => {
    children.push(iframe)
  }

  this.broadcast = message => {
    children.forEach(i => {
      i.contentWindow.postMessage(message, targetOrigin)
    })
  }
}
