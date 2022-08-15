import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/register', name: 'Brazil',component: () =>import('@/views/register.vue')},
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'vue-school-active-link'

})

export default Router