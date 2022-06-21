<template>
    <div class="hello">
       Analytics
    </div>
</template>

<script>
export default {
    name: 'AnalyticsPage',

    beforeCreate() {
        if (!localStorage.getItem('leadhit-site-id')) {
            this.$router.push({ name: "home" });
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>