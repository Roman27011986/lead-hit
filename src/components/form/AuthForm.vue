<template>
    <form class="form" @submit.prevent="handleSubmit">
        <input v-model="id" class="form__input" :class="!isValid && 'form__input--error'" />
        <span class="form__error-text" v-if="!isValid">{{ error }}</span>
        <button class="form__btn" type="submit">Войти</button>
    </form>
</template>

<script>

import { getAuth } from "../../services/auth.service";
import {
    fieldLengthValidation,
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
            if (!this.isValidate(this.id, this.rules.isRequired) || !this.isValidate(this.id, this.rules.fieldLengthValidation)) {
                return
            }
            this.$emit("submit", {
                id: this.id,
            });
            try {
                const { data } = await getAuth(this.id);
                if (data?.message) {
                    localStorage.setItem('leadhit-site-id', this.id)
                    this.$router.push({ name: "analytics" });
                }
            } catch (error) {
                console.log(error);
            }
        },

        isValidate(value, cb) {
            const { hasPassed, message } = cb(value)
            if (value && !hasPassed || !value && !hasPassed) {
                this.error = message || this.errorMessage;
                this.isValid = hasPassed
                return hasPassed
            } 
            return hasPassed
        },

        validete(value) {
            this.isValid = this.isValidate(value, this.rules.fieldLengthValidation)
        },
    },

    computed: {
        rules() {
            return {
                fieldLengthValidation,
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



   .form {
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   .form__input {
       min-height: 40px;
        font-size: 18px;
        outline: none;
        line-height: inherit;
        padding: 8px 15px;
   }
        .form__input::placeholder {
            color: inherit;
        }
                .form__input--error {
                    border-color: red;
                }

            .form__error-text {
                font-size: 12px;
                color: red;
            }

                .form__btn {
                    width: 100px;
                    height: 40px;
                    cursor: pointer;
                    border: none;
                    color: #2c3e50;
                    background-color: rgba(47, 144, 214, 0.228);
                    margin-top: 40px;
                    transition: all 250ms linear;
                }

                                .form__btn:hover {
                                background-color: rgba(10, 127, 210, 0.535);
                                color: aliceblue;
                                }
</style>
