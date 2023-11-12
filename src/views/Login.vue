<template>
    <div class="login">
        <div class="login-container">
            <div class="login-wrap">
                <h1>MY PICK !</h1>
                <div class="login-box">
                    <div class="login-box__inputs">
                        <div class="login-box__inputs-input">
                            <label for="id" :class="{ up: id.length > 0 }">ID</label>
                            <input type="text" id="id" v-model="id" />
                        </div>
                        <div class="login-box__inputs-input">
                            <label for="pw" :class="{ up: password.length > 0 }">Password</label>
                            <input type="password" name="" id="pw" v-model="password" />
                        </div>
                    </div>
                    <div class="login-box__btns">
                        <button>LOGIN</button>
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const id = ref('');
const password = ref('');
</script>
<style lang="scss" scoped>
.login {
    &-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-wrap {
        text-align: center;
        h1 {
            font-size: clamp(34px, 5vw, 48px);
            font-weight: bold;
            color: $primary-color;
        }
    }
    &-box {
        margin-top: 35px;
        &__inputs {
            text-align: start;
            &-input {
                position: relative;
                margin-bottom: clamp(18px, 5vw, 25px);
                label {
                    color: #b3b2b2;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    transition: all 0.25s ease-in-out;
                    font-size: clamp(14px, 5vw, 16px);
                    &.up {
                        color: $primary-color;
                        transform: translateY(0);
                        top: -50%;
                    }
                }
                input {
                    display: block;
                    border-bottom: 1px solid #b3b2b2;
                    width: 100%;
                    padding: 5px;
                    font-size: clamp(14px, 5vw, 16px);
                }
                &:has(input:focus):focus-within label {
                    color: $primary-color;
                    transform: translateY(0);
                    top: -50%;
                }
            }
        }
        &__btns {
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            button {
                width: 48%;
                border-radius: 40px;
                box-shadow: 0 0 22px #00000012;
                color: #585b5f;
                font-weight: 600;
                transition: all 0.3s ease-out;
                font-size: clamp(14px, 5vw, 16px);
                padding: 10px 0;
                &:hover {
                    background-color: rgba(#49c73b, 0.2);
                }
            }
        }
    }
}
</style>
