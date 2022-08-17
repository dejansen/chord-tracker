<template>
    <Panel title="Register">
        <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
                <input
                    type="email"
                    name="email"
                    v-model="email"
                    class="input"
                />
            </div>
        </div>
        <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
                <input
                    type="password"
                    name="password"
                    v-model="password"
                    class="input"
                />
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button @click.prevent="register" class="button is-info">
                    Register
                </button>
            </div>
        </div>
        <br />
        <div
            v-if="error"
            v-html="error"
            class="notification is-danger is-light"
        />
    </Panel>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import { useUserStore } from '@/stores/UserStore.js'
import Panel from '@/components/SmallPanel.vue'

const UserStore = useUserStore()

export default {
    data() {
       return {
        email: "",
        password: "",
        error: null
       }
    },
    methods: {
        async register() {
            try {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                console.log(response.data.user)
                UserStore.setToken(response.data.token)
                UserStore.setUser(response.data.user)
            } catch (error) {
                // console.log(error)
                this.error = error.response.data.error
            }
        }
    },
    components: {
        Panel
    }
}
</script>
<style scoped>
.error {
    color: red;
    padding: 8px;
}
</style>
