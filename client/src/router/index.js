import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', name: 'HomeView',component: () =>import('@/views/HomeView.vue')},
    { path: '/register', name: 'RegisterView',component: () =>import('@/views/RegisterView.vue')},
    { path: '/login', name: 'LoginView',component: () =>import('@/views/LoginView.vue')},
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'vue-school-active-link'

})

export default Router