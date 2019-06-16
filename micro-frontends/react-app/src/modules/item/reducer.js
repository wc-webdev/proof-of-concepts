import * as ActionTypes from './actions/types'

const INITIAL_STATE = {
  loadedItems: [
    {
      id: 1,
      title: 'Create to-do list',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      title: 'Create another to-do list',
      description: 'Consectetur adipisicing elit',
    },
  ],
}

const setLoadedItemsMutator = (state, action) => ({
  ...state,
  loadedItems: action.payload.items,
})

const reducer = (state = INITIAL_STATE, action) => {
  const { type, } = action
  switch (type) {
    case ActionTypes.SET_LOADED_ITEMS:
      return setLoadedItemsMutator(state, action)
    default:
      break
  }
  return state
}

export default reducer
