import Vue from 'vue'
import Vuex from 'vuex'
import StyletronVue from 'styletron-vue'

import Store from './Store'
import styletron from './StyletronInstance'
import App from './components/App.vue'
import * as modules from './modules'

Vue.config.productionTip = false

const startClient = (args = {}) => {
  const {
    rootId = 'root',
  } = args

  Vue.use(Vuex)
  Vue.use(StyletronVue)

  const store = new Store(modules)

  const appInstance = new Vue({
    store,
    styletron,
    render: h => h(App),
  })

  appInstance.$mount(window.document.getElementById(rootId))
}

const start = (args = {}) => startClient(args)

start({
  rootId: 'root',
})
