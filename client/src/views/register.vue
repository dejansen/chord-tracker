<template>
    <div>
        <h1>Register view</h1>
        <input 
            type="email" 
            name="email" 
            placeholder="email"
            v-model="email" 
        />
        <input 
            type="password" 
            name="password" 
            placeholder="password"
            v-model="password" 
        />
        <button @click.prevent="register">Register</button>
        <br>
        <div v-html="error" class="error" />


    </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
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
                console.log(response.data)
            } catch (error) {
                // console.log(error)
                this.error = error.response.data.error
            }
        }
    }
}
</script>
<style scoped>
    .error {
        color: red;
        padding: 8px;
    }
</style>
