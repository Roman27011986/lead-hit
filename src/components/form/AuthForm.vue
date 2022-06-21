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
            id: "",
        };
    },

    computed: {
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
