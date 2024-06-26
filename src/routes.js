import {createRouter, createWebHashHistory} from "vue-router";
const routerHistory = createWebHashHistory();

import home from "./pages/home.vue"
import about from "./pages/about.vue"
import persInfo from "./pages/persInfo.vue";

const routers = createRouter({
    history: routerHistory,
    routes:[
        {
            path: "/",
            name:"home",
            component: home
        },
        {
            path: "/about",
            name:"about",
            component: about
        },
        {
            path: '/infoAboutPers/:id?',
            name:"infoAboutPers",
            component: persInfo
        },
    ]
})

export default routers;