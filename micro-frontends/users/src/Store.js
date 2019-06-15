import { createStore, combineReducers, } from 'redux'

export default function Store(reducers, state = {}) {
  const storeInstance = createStore(
    combineReducers(reducers),
    state,
  )

  return storeInstance
}
