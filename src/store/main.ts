import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main', () => {
    const contentsState = ref('Search'); // 콘텐츠 컴포넌트

    return {
        contentsState,
    };
});
