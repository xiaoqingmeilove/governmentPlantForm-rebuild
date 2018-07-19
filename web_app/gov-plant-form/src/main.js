import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from 'vuex'
import ElementUI from 'element-ui'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
