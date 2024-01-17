<template>
    <div class="search">
        <div class="search-box">
            <button class="search-box--button__search"><span class="blind">검색</span></button>
            <button class="search-box--button__close" v-if="closeBtnState" @click="resetSearchHandler">
                <span class="blind">삭제</span>
            </button>
            <div class="search-box--input">
                <label for="word" v-if="labelState">장소 검색</label>
                <input
                    type="text"
                    id="word"
                    maxlength="200"
                    autocomplete="off"
                    v-model="word"
                    @input="labelState = false"
                    @keyup="searchBarHandler"
                    @keydown="searchingHandler"
                />
            </div>
        </div>
    </div>
    <SearchList :list="list" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import searchApi from '@/api/search';
import { useMapStore } from '@/store/map';
import SearchList from '@/components/main/contents/SearchList.vue';

const { nowX, nowY } = storeToRefs(useMapStore());

const word = ref('');
const labelState = ref(true);
const closeBtnState = ref(false);
const list = ref();

// 지금 위치 y,x 갖고있어야됨
// 이름이 똑같은 장소 => 지금 위치에서 제일 가까운 장소가 제일 위

// 지도 퍼블리싱
// 그 후 나머지 작업..

const searchApiHandler = async () => {
    if (nowX.value) {
        const result = await searchApi.fetchLocationList(word.value, nowX.value, nowY.value);
        list.value = [...result.data.documents];
        console.log(list.value);
    } else {
        console.log('wait');
    }
};

const searchBarHandler = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (value !== '') {
        labelState.value = false;
        closeBtnState.value = true;
    } else {
        labelState.value = true;
        closeBtnState.value = false;
    }
};

const searchingHandler = (e: KeyboardEvent) => {
    const { code } = e;
    if (!e.isComposing && code === 'Enter') searchApiHandler();
};

const resetSearchHandler = () => {
    word.value = '';
    labelState.value = true;
    closeBtnState.value = false;
};
</script>
<style lang="scss" scoped>
.search {
    padding: 15px 25px;
    &-box {
        position: relative;
        height: 42px;
        border: 2px solid $primary-color;
        border-radius: 5px;
        padding-left: 45px;
        &--button__search {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
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
}
</style>
