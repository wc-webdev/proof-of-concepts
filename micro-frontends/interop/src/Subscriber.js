export default function Subscriber() {
  this.subscribe = cb => {
    window.addEventListener('message', cb)
  }
}
