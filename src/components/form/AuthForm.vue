<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="id" class="custom-input" :class="!isValid && 'custom-input--error'" />
        <span v-if="!isValid">{{ error }}</span>
        <button type="submit" ref="btn" disabled=true>Войти</button>
    </form>
</template>

<script>
import { getAuth } from "../../services/auth.service";
import {
    emailValidation,
    isRequired
} from "../../utils/validationRules.js";
export default {

    data() {
        return {
            id: "",
            isValid: true,
            error: "",
            errorMessage:'error'
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

        validete(value) {
            const { hasPassed, message } = this.rules.emailValidation(value)
            this.$refs.btn.disabled = !hasPassed
            if (!hasPassed) {
                this.error = message || this.errorMessage;
                this.isValid = hasPassed
                return
            }
            this.isValid = hasPassed
        },
    },

    computed: {
        rules() {
            return {
                emailValidation,
                isRequired
            };
        },
    },

    watch: {
        id(v) {
            this.validete(v);
        },
    },
};
</script>

<style scoped>
   .custom-input {
       min-height: 40px;
        font-size: 18px;
        outline: none;
        line-height: inherit;
        padding: 8px 15px;
   }
        .custom-input::placeholder {
            color: inherit;
        }
                .custom-input--error {
                    border-color: red;
                }
</style>
