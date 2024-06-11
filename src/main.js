import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vue virtual scroller
import "vue-virtual-scroller/dist/vue-virtual-scroller.css" // 引入它的 css
import VueVirtualScroller from "vue-virtual-scroller" // 引入它
Vue.use(VueVirtualScroller) // use 它

Vue.config.productionTip = false
Vue.use(ElementUI)
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

// const logregBox = document.querySelector('.logreg-box');
// const loginLink = document.querySelector('.login-link');
// const regsiterLink = document.querySelector('.register-link')

// regsiterLink.addEventListener('click', () => {
//   logregBox.classList.add('active');
// })

// loginLink.addEventListener('click', () => {
//   logregBox.classList.remove('active');
// })