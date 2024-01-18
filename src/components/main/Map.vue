<template>
    <div class="noMap" v-if="noMap">
        <p>지도를 읽어올 수 없어요.😭</p>
    </div>
    <div id="map" v-else></div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/store/map';
import { Location } from '@/type/map';

const { nowX, nowY, overlayList } = storeToRefs(useMapStore());

declare global {
    interface Window {
        kakao: any;
    }
}

const noMap = ref(false);

const map = ref();
const overlayArr = ref<any[]>([]);

const overlayDom = (name: string) => {
    return `<div class="overlay-box">
        <span class="overlay-box__name">${name}</span>
        <style>
        .overlay-box {
            position: relative; 
            border-radius:20px; 
            padding: 7px 10px; 
            background-color: #fff; 
            border: 1px solid #0363d0;
            &:hover {
                background-color: #0363d0;
                &::before {
                    background-color: #0363d0;
                }
                .overlay-box__name {
                    color: #fff;
                }
            }
        }
        .overlay-box::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 40%;
            width: 7px;
            height: 7px;
            border: 1px solid #0363d0;
            border-right: none;
            border-bottom: none;
            background-color: #fff;
            transform: rotate(-135deg);
        }
        .overlay-box__name {
            vertical-align: top; 
            font-size: 13px; 
            font-weight:bold;
        }
            
        }
    </style>
    </div>`;
};

const showOverlay = (location: Location) => {
    const customOverlay = new window.kakao.maps.CustomOverlay({
        position: new window.kakao.maps.LatLng(location.lat, location.lng),
        content: overlayDom(location.name),
        // xAnchor: 0,
        yAnchor: 1.3,
    });
    overlayArr.value.push(customOverlay);
    customOverlay.setMap(map.value);
};

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

watch(overlayList, (newOverlayList, oldOverlayList) => {
    if (newOverlayList) {
        if (oldOverlayList) {
            overlayArr.value.forEach((overlay: any) => overlay.setMap(null));
            overlayArr.value = [];
        }
        newOverlayList.forEach((item: Location) => showOverlay(item));
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
.overlay-box {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #0363d0;
}
</style>
