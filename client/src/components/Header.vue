<script setup>
    
    import { useUserStore, teststore} from '@/stores';
    import { useRouter } from 'vue-router'
    
    const userStore = useUserStore();
    const router = useRouter()

    function logout() {
        userStore.setToken(null)
        userStore.setUser(null)
        router.push({
            name:"HomeView"
        })
    }
</script>

<template>
    <nav class="navbar has-background-info is-fixed-top">
        <div class="navbar-brand">
                <router-link class="navbar-item" to="/home">
                    <h4 class="title is-4 has-text-info-light">ChordTracker</h4>
                </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <router-link 
                        to="songs"
                        class="button is-info is-light"
                    >Songs</router-link>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons" v-if="!userStore.isUserLoggedIn">
                        <router-link 
                            to="register"
                            class="button is-primary"
                        >
                            <strong>Sign up</strong>
                        </router-link>
                         <router-link 
                            to="login"
                            class="button is-light"
                        >
                            <strong>Log in</strong>
                        </router-link>
                    </div>
                    <div class="buttons" v-if="userStore.isUserLoggedIn">
                        <span class="mr-4 has-text-info-light">Welcome back, {{ userStore.user.email }}</span>
                        <button 
                            to="logout"
                            class="button is-light"
                            @click="logout()"
                        >
                            <strong>Log Out</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="">
    
</style>