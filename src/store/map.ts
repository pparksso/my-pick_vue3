import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMapStore = defineStore('map', () => {
    const nowX = ref();
    const nowY = ref();

    return {
        nowX,
        nowY,
    };
});
