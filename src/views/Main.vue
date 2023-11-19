<template>
    <main class="main">
        <Header />
        <section class="contents">
            <ContentsCard>
                <component :is="changeCompHandler" />
            </ContentsCard>
            <Map />
        </section>
    </main>
</template>
<script setup lang="ts">
import { resolveComponent } from 'vue';
import { storeToRefs } from 'pinia';
import Header from '@/components/common/Header.vue';
import Map from '@/components/main/Map.vue';
import ContentsCard from '@/components/main/contents/Card.vue';
import { useMainStore } from '@/store/main';

const { contentsState } = storeToRefs(useMainStore());

const searchComp = resolveComponent('Search');
const scrapComp = resolveComponent('Scrap');
const moreComp = resolveComponent('More');

const changeCompHandler = () => {
    switch (contentsState.value) {
        case 'Search':
            return searchComp;
        case 'Scrap':
            return scrapComp;
        case 'More':
            return moreComp;
        default:
            return searchComp;
    }
};
</script>
<style lang="scss" scoped>
.main {
    display: flex;
    height: 100vh;
    width: 100vw;
    .contents {
        position: relative;
        flex-grow: 1;
    }
}
</style>
