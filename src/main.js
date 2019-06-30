import Vue from 'vue'
import App from './App.vue'

import './style/less/global.less'

import './style/less/tooltip.less'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
