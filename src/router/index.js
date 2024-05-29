import VueRouter from "vue-router";
import bodyContainer from "@/components/bodyContainer.vue";
export default new VueRouter({
    router: [
        {
            path: '/login',
            component: bodyContainer
        },
    ],
    mode: 'history'
})