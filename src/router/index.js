import VueRouter from "vue-router";
import homePage from "@/components/homePage.vue";
import bodyContainer from "@/components/bodyContainer.vue";
import customerLayout from "../components/customerLayout.vue"
export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: bodyContainer
        },
        {
            path: '/',
            component: homePage
        },
        {
            path: '/customerLayout',
            component: customerLayout
        }
    ],
    mode: 'history'
})