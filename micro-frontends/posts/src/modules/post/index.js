import * as ActionTypes from './actions/types'
import * as ActionCreators from './actions/creators'

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      title: 'Hello',
      body: 'Hi',
    },
    {
      id: 2,
      title: 'Hello',
      body: 'Hi',
    },
    {
      id: 3,
      title: 'Hello',
      body: 'Hi',
    },
  ],
}

const setLoadedPostsMutator = (state, posts) => {
  state.posts = posts
}

export default {
  namespaced: true,
  state: INITIAL_STATE,
  mutations: {
    [ActionTypes.SET_LOADED_POSTS]: setLoadedPostsMutator,
  },
  actions: ActionCreators,
}
