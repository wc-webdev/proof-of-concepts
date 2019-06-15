import * as React from 'react'
import ReactDOM from 'react-dom'
import { Client as StyletronEngine, } from 'styletron-engine-atomic'
import { Provider as StyletronProvider, } from 'styletron-react'
import { Provider, } from 'react-redux'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import * as reducers from './reducers'
import Store from './Store'

const startClient = (args = {}) => {
  const {
    state = {},
    rootId = 'root',
  } = args
  const store = new Store(reducers, state)
  const styletronEngine = new StyletronEngine()

  ReactDOM.render(
    React.createElement(StyletronProvider, { value: styletronEngine, }, [
      React.createElement(Provider, { store, }, [
        React.createElement(App),
      ]),
    ]),
    window.document.getElementById(rootId),
  )

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister()
}

const start = (args = {}) => startClient(args)

export default start

start({
  rootId: 'root',
})
