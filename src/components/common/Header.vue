<template>
    <header class="header">
        <div class="header-top">
            <h1 class="header-logo"><router-link to="/">P</router-link></h1>
            <nav class="header-nav">
                <ul class="header-nav--list">
                    <li>
                        <button @click="contentsState = 'Search'" :class="{ active: contentsState === 'Search' }">
                            <span class="material-icons"> location_on </span>
                            <span class="text">지도 홈</span>
                        </button>
                    </li>
                    <li>
                        <button @click="contentsState = 'Scrap'" :class="{ active: contentsState === 'Scrap' }">
                            <span class="material-icons"> star </span>
                            <span class="text">저장</span>
                        </button>
                    </li>
                    <li>
                        <button @click="contentsState = 'More'" :class="{ active: contentsState === 'More' }">
                            <span class="material-icons"> more_horiz </span>
                            <span class="text">더보기</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header-user">
            <button @click="userHandler"><span class="material-icons-outlined"> account_circle </span></button>
            <div :class="['header-user--info', { active: showUser }]">
                <div class="header-user--info__name-box">
                    <span class="nick"><router-link to="">Sokey</router-link>님</span>
                    <button>로그아웃</button>
                </div>
                <div class="header-user--info__email-box"><router-link to="">sohee51244@naver.com</router-link></div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/store/main';

const { contentsState } = storeToRefs(useMainStore());

const showUser = ref(false);

// 유저박스 랜더링
const userHandler = () => {
    showUser.value = !showUser.value;
};
</script>
<style lang="scss" scoped>
.header {
    width: 63px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    z-index: 1000000;
    &-logo {
        text-align: center;
        position: relative;
        a {
            display: inline-block;
            padding: 20px 0;
            color: $primary-color;
            font-size: 35px;
            font-weight: 900;
        }
        &:after {
            @include borderSet;
            height: 1px;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }
    &-nav {
        &--list {
            li {
                text-align: center;
                button {
                    width: 100%;
                    padding: 15px 0;
                    span {
                        display: block;
                    }
                    .text {
                        font-size: 12px;
                        line-height: 15px;
                        padding-top: 5px;
                        letter-spacing: -0.44px;
                    }
                    &.active {
                        background-color: rgb(4, 117, 244);
                        .text {
                            color: #fff;
                        }
                        .material-icons {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    &-user {
        position: relative;
        > button {
            width: 100%;
            padding: 15px;
            .material-icons-outlined {
                color: #e4e4e4;
                font-size: 28px;
            }
        }
        &--info {
            display: none;
            position: absolute;
            z-index: 100;
            background-color: #fff;
            left: 75px;
            top: -20px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            &.active {
                display: block;
            }
            &::before {
                content: '\e5de';
                font-family: 'Material Icons';
                color: #fff;
                font-size: 30px;
                position: absolute;
                left: -17px;
                top: 35px;
            }
            &__name-box {
                span {
                    color: #666;
                    a {
                        color: #333;
                        font-size: 14px;
                        font-weight: bold;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
                button {
                    margin-left: 8px;
                    color: #666;
                    height: 20px;
                    width: 53px;
                    font-size: 12px;
                    text-align: center;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }
            }
            &__email-box {
                a {
                    color: #333;
                    font-size: 12px;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        &::before {
            @include borderSet;
            width: 100%;
            height: 1px;
            left: 0;
            top: 0;
        }
    }
    &:after {
        @include borderSet;
        width: 1px;
        top: 0;
        right: 0;
        height: 100%;
    }
}
</style>
