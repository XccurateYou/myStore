import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
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