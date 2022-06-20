<template>
    <form @submit.prevent="handleSubmit">
        <input
           v-model="price"
         />   
        <button type="submit">Подбор жилья</button>
    </form>
</template>

<script>

export default {
    components: {
       
    },

    data() {
        return {
            price: "",
        };
    },
    computed: {
    },
    methods: {
        handleSubmit() {
            this.$emit("submit", {
                price: this.price,
            });
        },
    },
};
</script>

<style  scoped>

</style>
