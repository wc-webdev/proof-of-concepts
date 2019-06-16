import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ConnectedRouter, } from 'connected-react-router'
import { Switch, Route, Redirect, } from 'react-router'
import 'normalize.css'

import '../../assets/styles/global.css'

import RouteItems from '../../routes/items/containers/MainView'

const App = props => {
  const {
    history,
  } = props

  return (
    <ConnectedRouter
      history={history}
    >
      <Switch>
        <Route
          path="/items"
          component={RouteItems}
        />
        <Route
          path="/"
          exact
          render={() => (
            <Redirect
              to="/items"
            />
          )}
        />
      </Switch>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.shape(),
}

export default App
