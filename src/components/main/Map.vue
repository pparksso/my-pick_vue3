<template>
    <div class="noMap" v-if="noMap">
        <p>지도를 읽어올 수 없어요.😭</p>
    </div>
    <div id="map" v-else></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/store/map';

const { nowX, nowY } = storeToRefs(useMapStore());

declare global {
    interface Window {
        kakao: any;
    }
}

const noMap = ref(false);

const map = ref();

const initMap = () => {
    const container = document.getElementById('map');
    const option = {
        center: new window.kakao.maps.LatLng(37.448889, 126.451944),
        level: 10,
    };
    map.value = new window.kakao.maps.Map(container, option);
};

onMounted(() => {
    const script = document.createElement('script');
    script.onload = () => new window.kakao.maps.load(initMap);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${
        import.meta.env.VITE_KAKAO_KEY
    }`;
    document.head.appendChild(script);
    /* global kakao */
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            nowX.value = position.coords.longitude;
            nowY.value = position.coords.latitude;
            map.value.setLevel(3);
            map.value.panTo(new window.kakao.maps.LatLng(position.coords.latitude, position.coords.longitude));
        });
    } else {
        noMap.value = true;
    }
});
</script>
<style lang="scss" scoped>
#map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.noMap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
        font-size: 22px;
    }
}
</style>
