import * as ActionTypes from './types'

export const setLoadedUsers = (users) => ({
  type: ActionTypes.SET_LOADED_USERS,
  payload: {
    users,
  },
})
