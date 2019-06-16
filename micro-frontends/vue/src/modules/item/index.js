import * as ActionTypes from './actions/types'
import * as ActionCreators from './actions/creators'

const INITIAL_STATE = {
  loadedItems: [
    {
      id: 1,
      title: 'Hello',
      description: 'Hi',
    },
    {
      id: 2,
      title: 'Hello',
      description: 'Hi',
    },
    {
      id: 3,
      title: 'Hello',
      description: 'Hi',
    },
  ],
}

const setLoadedItemsMutator = (state, items) => {
  state.items = items
}

export default {
  namespaced: true,
  state: INITIAL_STATE,
  mutations: {
    [ActionTypes.SET_LOADED_ITEMS]: setLoadedItemsMutator,
  },
  actions: ActionCreators,
}
