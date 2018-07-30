import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter);
Vue.use(vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  template: '<APP/>',
  components: { App }
})
