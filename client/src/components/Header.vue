<template>
    <nav class="navbar has-background-info is-fixed-top">
        <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <h4 class="title is-4 has-text-info-light">ChordTracker</h4>
                </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
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
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
console($pinia.state)
export default {
    
}
</script>
<style lang="">
    
</style>