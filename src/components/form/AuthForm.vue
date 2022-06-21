<template>
    <form @submit.prevent="handleSubmit">
        <input
           v-model="price"
         />   
        <button type="submit">Подбор жилья</button>
    </form>
</template>

<script>
import { getAuth } from "../../services/auth.service";
export default {
    components: {
       
    },

    data() {
        return {
            price: "",
            q: "",
        };
    },
    computed: {
    },
    methods: {
       async handleSubmit() {
            this.$emit("submit", {
                price: this.price,
            });
            try {
                const { data } = await getAuth(this.price);
                this.$router.push({ name: "analytics" });
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style  scoped>

</style>
