import * as ActionTypes from './types'

export const setLoadedPosts = (context, type, posts) => {
  context.commit({
    type: ActionTypes.SET_LOADED_POSTS,
    posts,
  })
}
