import * as ActionTypes from './actions/types'

const INITIAL_STATE = {
  users: [
    {
      id: 1,
      name: 'Allan Crisostomo',
      email: 'allan.crisostomo@whitecloak.com',
    },
    {
      id: 2,
      name: 'Allan Crisostomo',
      email: 'allan.crisostomo@whitecloak.com',
    },
  ],
}

const setLoadedUsersMutator = (state, action) => ({
  ...state,
  users: action.payload.users,
})

const reducer = (state = INITIAL_STATE, action) => {
  const { type, } = action
  switch (type) {
    case ActionTypes.SET_LOADED_USERS:
      return setLoadedUsersMutator(state, action)
    default:
      break
  }
  return state
}

export default reducer
