import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Location } from '@/type/map';
import { Place } from '@/type/api';

export const useMapStore = defineStore('map', () => {
    const nowX = ref();
    const nowY = ref();

    const nowPlace = ref<Place | undefined>();

    const overlayList = ref<Location[] | undefined>();
    return {
        nowX,
        nowY,
        nowPlace,
        overlayList,
    };
});
