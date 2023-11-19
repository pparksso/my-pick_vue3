<template>
    <div class="contents" :style="{ left: contentsState ? 0 : '-390px' }">
        <div class="contents-inner">
            <slot />
            <button :class="['contents-arrow', { close: !contentsState }]" @click="openHandler"></button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const contentsState = ref(true);

const openHandler = () => {
    contentsState.value = !contentsState.value;
};
</script>
<style lang="scss" scope>
.contents {
    width: 390px;
    box-shadow:
        rgba(0, 0, 0, 0.2) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 5px 0px 15px 0px;
    position: absolute;
    z-index: 50;
    top: 0;
    height: 100%;
    left: 0;
    transition: all 0.5s ease-in-out;
    &-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 390px;
        width: 22px;
        height: 49px;
        background-image: url('@/assets/images/common/common.png');
        background-size: 428px 403px;
        background-position: -339px -50px;
        &:hover {
            background-position: -339px 0;
        }
        &.close {
            background-position: -339px -150px;
            &:hover {
                background-position: -339px -100px;
            }
        }
    }
}
</style>
