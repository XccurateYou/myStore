import VueRouter from "vue-router";
import containerLogregbox from "@/components/containerLogregbox.vue";

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: containerLogregbox
        }
    ],
    mode: 'history'
})