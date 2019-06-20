import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux'

export default function Store(reducers, state = {}, enhancers) {
  return createStore(
    combineReducers(reducers),
    state,
    compose(applyMiddleware(...enhancers)),
  )
}
