<template>
    <div class="search-box">
        <button class="search-box--button__search"><span class="blind">검색</span></button>
        <button class="search-box--button__close" v-if="word.length > 0" @click="word = ''">
            <span class="blind">삭제</span>
        </button>
        <div class="search-box--input">
            <label for="word" v-if="word.length === 0">장소 검색</label>
            <input type="text" id="word" maxlength="200" autocomplete="off" v-model="word" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const word = ref('');
// 1. 검색창
// 2. 검색 리스트
</script>
<style lang="scss" scoped>
.search-box {
    position: relative;
    height: 42px;
    border: 2px solid $primary-color;
    border-radius: 5px;
    padding-left: 45px;
    &--button__search {
        position: absolute;
        top: 9px;
        left: 15px;
        width: 25px;
        height: 24px;
        background-image: url('@/assets/images/common/search.png');
        background-position: -57px 0;
        mask-image: none;
        vertical-align: top;
    }
    &--button__close {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 43px;
        height: 100%;
        z-index: 10;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 1px;
            height: 20px;
            margin: auto;
            background-color: rgb(236, 240, 242);
        }
        &::after {
            content: '';
            background-image: url('@/assets/images/common/search.png');
            background-size: 129px 112px;
            background-position: -64px -96px;
            width: 14px;
            height: 14px;
            mask-image: none;
            display: inline-block;
        }
        &:hover::after {
            background-position: -49px -96px;
        }
    }
    &--input {
        position: relative;
        padding-right: 43px;
        label {
            width: 100%;
            height: 38px;
            position: absolute;
            line-height: 38px;
            color: rgb(156, 156, 156);
        }
        input {
            height: 38px;
            font-weight: bold;
            font-size: 16px;
            width: 100%;
        }
        &:has(input:focus):focus-within label {
            color: rgb(216, 216, 216);
        }
    }
}
</style>
