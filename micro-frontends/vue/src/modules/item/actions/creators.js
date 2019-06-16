import * as ActionTypes from './types'

export const setLoadedItems = (context, type, posts) => {
  context.commit({
    type: ActionTypes.SET_LOADED_ITEMS,
    posts,
  })
}
