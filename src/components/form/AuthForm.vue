<template>
    <form @submit.prevent="handleSubmit">
        <input
           v-model="id"
         />   
        <button type="submit">Подбор жилья</button>
    </form>
</template>

<script>
import { getAuth } from "../../services/auth.service";
export default {
    data() {
        return {
            id: "",
        };
    },
    
    methods: {
       async handleSubmit() {
            this.$emit("submit", {
                id: this.id,
            });
            try {
                const { data } = await getAuth(this.id);
                this.$router.push({ name: "analytics" });
                if (data?.message) {
                    localStorage.setItem('leadhit-site-id', this.id )
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style  scoped>

</style>
