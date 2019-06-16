import Vuex from 'vuex'

export default function Store(modules) {
  const storeInstance = new Vuex.Store({
    modules,
  })

  return storeInstance
}
