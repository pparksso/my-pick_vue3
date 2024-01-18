import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Location } from '@/type/map';

export const useMapStore = defineStore('map', () => {
    const nowX = ref();
    const nowY = ref();

    const overlayList = ref<Location[] | undefined>();
    return {
        nowX,
        nowY,
        overlayList,
    };
});
