<template>
    <div class="search-list">
        <ul>
            <li v-for="item in list" :key="item.id">
                <div class="search-list--item" @click="savePlaceHandler(item)">
                    <div class="search-list--item__title">
                        <h1 class="name">{{ item.place_name }}</h1>
                        <span>{{ item.category_group_name }}</span>
                    </div>
                    <div class="search-list--item__address">
                        <span class="distance">{{ mTokm(item.distance) }}</span>
                        <span class="address">{{ item.address_name }}</span>
                    </div>
                    <div class="search-list--item__scrap">
                        <button class="empty">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                class="R8aEu"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9.7 2.17c.05-.12.15-.19.28-.19zm0 0l-1.83 5.6-6 .01a.27.27 0 00-.28.2.26.26 0 000 .15c.01.04.04.1.1.14l4.88 3.45-1.85 5.6a.24.24 0 000 .17.28.28 0 00.1.13.29.29 0 00.36 0l4.84-3.46 4.85 3.43a.29.29 0 00.36 0 .29.29 0 00.1-.13.24.24 0 000-.16l-1.88-5.6 4.85-3.47a.26.26 0 00.11-.14.26.26 0 000-.16c-.04-.1-.13-.19-.28-.19l-6 .02-1.87-5.59c-.04-.12-.14-.19-.28-.19m-1.6-.25c.5-1.53 2.7-1.54 3.2 0l1.56 4.62h4.98c1.61-.01 2.36 2.04 1 3.02l-4.01 2.87 1.54 4.62c.53 1.58-1.3 2.79-2.59 1.88l-4.04-2.86L6 18.76c-1.28.91-3.12-.28-2.6-1.87l1.53-4.63L.89 9.41c-1.36-.96-.63-3.02.98-3.03h4.98l1.53-4.65z"
                                ></path>
                                <path
                                    class="place_icon_bookmark_hover_dimmed"
                                    fill="none"
                                    d="M9.7 2.17c.05-.12.15-.19.28-.19zm0 0l-1.83 5.6-6 .01a.27.27 0 00-.28.2.26.26 0 000 .15c.01.04.04.1.1.14l4.88 3.45-1.85 5.6a.24.24 0 000 .17.28.28 0 00.1.13.29.29 0 00.36 0l4.84-3.46 4.85 3.43a.29.29 0 00.36 0 .29.29 0 00.1-.13.24.24 0 000-.16l-1.88-5.6 4.85-3.47a.26.26 0 00.11-.14.26.26 0 000-.16c-.04-.1-.13-.19-.28-.19l-6 .02-1.87-5.59c-.04-.12-.14-.19-.28-.19m-1.6-.25c.5-1.53 2.7-1.54 3.2 0l1.56 4.62h4.98c1.61-.01 2.36 2.04 1 3.02l-4.01 2.87 1.54 4.62c.53 1.58-1.3 2.79-2.59 1.88l-4.04-2.86L6 18.76c-1.28.91-3.12-.28-2.6-1.87l1.53-4.63L.89 9.41c-1.36-.96-.63-3.02.98-3.03h4.98l1.53-4.65z"
                                ></path>
                            </svg>
                        </button>
                        <!-- <button class="fill">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                class="R8aEu"
                                aria-hidden="true"
                            >
                                <path
                                    d="M11.5 1.76C11 .32 8.94.32 8.46 1.76L6.92 6.47l-5.05.01C.35 6.5-.33 8.43.94 9.33l4.1 2.9-1.55 4.7c-.5 1.48 1.24 2.61 2.45 1.75l4.08-2.93 4.1 2.9c1.21.87 2.94-.28 2.44-1.76l-1.57-4.7 4.07-2.9c1.27-.92.58-2.85-.94-2.85l-5.05.02-1.58-4.7z"
                                ></path>
                            </svg>
                        </button> -->
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/store/map';
import { Place } from '@/type/api';

defineProps({
    list: {
        type: Array as () => Place[],
        required: true,
    },
});

const { nowPlace } = storeToRefs(useMapStore());

const mTokm = (m: string) => {
    const meter = parseInt(m);
    const unit = meter > 999 ? 'km' : 'm';
    const convertedValue = meter > 999 ? (meter * 0.001).toFixed(1).replace(/\.0$/, '') : meter;
    return `${convertedValue}${unit}`;
};

const savePlaceHandler = (item: Place) => {
    nowPlace.value = item;
};
</script>
<style lang="scss" scoped>
.search-list {
    height: calc(100vh - 72px);
    overflow-y: auto;
    &--item {
        &:hover {
            background-color: rgb(240, 240, 243);
        }
        cursor: pointer;
        padding: 20px 25px;
        border-bottom: 1px solid rgb(240, 240, 243);
        position: relative;
        &__title {
            display: flex;
            align-items: flex-end;
            .name {
                font-size: 17px;
                margin-right: 4px;
                color: #0068e3;
                font-weight: 200;
            }
            span {
                font-size: 14px;
                font-weight: 200;
                color: #939396;
            }
        }
        &__address {
            margin: 10px 0;
            .distance {
                font-weight: 600;
                font-size: 15px;
            }
            .address {
                font-size: 15px;
                font-weight: 300;
                position: relative;
                &::before {
                    content: '';
                    display: inline-block;
                    vertical-align: top;
                    border-radius: 50%;
                    width: 3px;
                    height: 3px;
                    background-color: #d9d9de;
                    margin: 9px 5px 0;
                }
            }
        }
        &__scrap {
            display: inline-block;
            position: absolute;
            right: 25px;
            top: 20px;
            svg {
                width: 18px;
                height: 18px;
            }
            .empty svg {
                fill: #b6b6b9;
            }
            .fill svg {
                fill: $primary-color;
            }
        }
    }
}
</style>
