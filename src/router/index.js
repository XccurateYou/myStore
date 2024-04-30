import VueRouter from "vue-router";
import bodyContainer from "@/components/bodyContainer.vue";
import firstTry from "@/components/firstTry.vue";
export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: bodyContainer
        },
        {
            path: '/test',
            component: firstTry
        }
    ],
    mode: 'history'
})