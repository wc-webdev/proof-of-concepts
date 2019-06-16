import * as React from 'react'
import { Provider as StyletronProvider, } from 'styletron-react'
import { connectRouter, routerMiddleware, } from 'connected-react-router'
import { Provider, } from 'react-redux'

import App from './components/App/App'
import * as serviceWorker from './serviceWorker'
import * as reducers from './modules'
import Store from './Store'
import StyletronEngine from './Styletron'
import History from './History'

const generateView = async args => {
  const {
    state = {},
    environment,
  } = args
  const history = new History(environment)
  const store = new Store(
    {
      ...reducers,
      router: connectRouter(history),
    },
    state,
    [
      routerMiddleware(history),
    ]
  )
  const styletronEngine = new StyletronEngine(environment)
  return (
    React.createElement(StyletronProvider, { value: styletronEngine, }, [
      React.createElement(Provider, { store, }, [
        React.createElement(App, { history, }),
      ]),
    ])
  )
}

export const renderWebView = async args => {
  const {
    root = 'root',
    ...etcArgs
  } = args

  const ReactDOM = await import('react-dom')
  const view = await generateView({
    ...etcArgs,
    environment: 'browser',
  })

  ReactDOM.render(
    view,
    typeof root === 'string'
      ? window.document.getElementById(root)
      : root,
  )
}

export const start = (args = {}) => {
  if (typeof window !== 'object') {
    // server
    return
  }
  // browser-like
  if (typeof window.AppShell !== 'object') {
    renderWebView(args)
      .then(() => {
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister()
      })
  }
}

start({
  root: 'root',
})
