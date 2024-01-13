<template>
    <main class="main">
        <Header />
        <section class="contents">
            <ContentsCard>
                <Search v-if="contentsState === 'Search'" />
                <Scrap v-else-if="contentsState === 'Scrap'" />
                <More v-else />
            </ContentsCard>
            <Map />
        </section>
    </main>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Header from '@/components/common/Header.vue';
import Map from '@/components/main/Map.vue';
import ContentsCard from '@/components/main/contents/Card.vue';
import Search from '@/components/main/contents/Search.vue';
import Scrap from '@/components/main/contents/Scrap.vue';
import More from '@/components/main/contents/More.vue';
import { useMainStore } from '@/store/main';

const { contentsState } = storeToRefs(useMainStore());
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
