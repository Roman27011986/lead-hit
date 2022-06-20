<template>
    <form @submit.prevent="handleSubmit">
        <button type="submit" class="btn">Подбор жилья</button>
    </form>
</template>

<script>

export default {
    components: {
       
    },

    data() {
        return {
            price: "",
            city: "",
        };
    },
    computed: {
    },
    methods: {
        handleSubmit() {
            this.$emit("submit", {
                city: this.city,
                price: this.price,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.btn {
    margin-left: auto;
    padding: 0 40px;
}

.select {
    margin-left: 50px;
}
</style>
