<template>
    <main class="main">
        <Header />
        <Map />
    </main>
</template>
<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import Map from '@/components/Map.vue';
</script>
<style lang="scss" scoped>
.main {
    display: flex;
    height: 100vh;
    width: 100vw;
}
</style>
