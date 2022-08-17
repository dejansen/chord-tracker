import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
    id: 'user',
    state: () =>{
        return {
            token: null,
            user: null,
            isUserLoggedIn: false
        }
    },
    actions: {
        setToken (token) {
            this.token = token
            this.isUserLoggedIn = (token) ? true : false
        },
        setUser (user) {
            this.user = user
        }
    },
})