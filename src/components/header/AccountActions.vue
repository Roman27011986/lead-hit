<template>
    <div class="auth-actions">
        <div>qqqqqqqqqqqqqqqqqqqqqqqqqq</div>
        <router-link  :to="{ name: 'login-page' }">Вход</router-link>
        
        <router-link  :to="{ name: 'registration-page' }">Регистрация</router-link>
    </div>
</template>

<script>
export default {
    name: "AuthActions",
};
</script>

<style scoped>

</style>