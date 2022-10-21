import Vue from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'
const vConsole = new VConsole()
Vue.use(vConsole)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
