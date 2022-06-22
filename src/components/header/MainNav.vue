<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li class="main-nav__list-item">
                <router-link class="main-nav__link" :to="{ name: 'home' }">Вход</router-link>
            </li>
            <li class="main-nav__list-item">
                <router-link class="main-nav__link" :to="{ name: this.isLog ? 'analytics' : 'home' }">Регистрация
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "MainNav",

    data() {
        return {
            isLog: true,
        };
    },

    mounted() {
        if (!localStorage.getItem('leadhit-site-id')) {
            this.isLog = !this.isLog
        }
    }
};
</script>

<style scoped>

   .main-nav .main-nav__list{
    display: flex;
    justify-content: flex-end;
    list-style: none;
   }
.main-nav__link {
   text-decoration: none;
   font-size: 20px;
color: rgba(47, 144, 214, 0.756);
transition: all 250ms linear;
}

.main-nav__link:hover {
color: rgba(17, 87, 216, 0.756);
}
.main-nav__list .main-nav__list-item:not(:last-child) {
     margin-right: 20px;
   }
</style>