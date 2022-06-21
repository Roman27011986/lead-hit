<template>
    <div class="auth-actions">
        <router-link :to="{ name: 'home' }">Вход</router-link>
        <router-link :to="{ name: 'analytics' }">Регистрация</router-link>
    </div>
</template>

<script>
export default {
    name: "AuthActions",
};
</script>

<style scoped>

</style>