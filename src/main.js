import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')