import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(Element);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
