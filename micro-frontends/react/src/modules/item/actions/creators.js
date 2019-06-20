import * as ActionTypes from './types'

export const setLoadedItems = items => ({
  type: ActionTypes.SET_LOADED_ITEMS,
  payload: {
    items,
  },
})
