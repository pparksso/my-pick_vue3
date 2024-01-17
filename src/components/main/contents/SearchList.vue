<template>
    <div class="search-list">
        <ul>
            <li v-for="item in list" :key="item.id">
                <div class="search-list--item">
                    <div class="search-list--item__title">
                        <h1 class="name">{{ item.place_name }}</h1>
                        <span>{{ item.category_group_name }}</span>
                    </div>
                    <div class="search-list--item__address">
                        <span class="distance">22km</span>
                        <span class="address">{{ item.address_name }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { Place } from '@/type/api';

defineProps({
    list: {
        type: Array as () => Place[],
        required: true,
    },
});
</script>
<style lang="scss" scoped>
.search-list {
    border-top: 1px solid rgb(240, 240, 243);
    height: calc(100vh - 72px);
    overflow-y: auto;
    &--item {
        padding: 20px 25px;
        border-bottom: 1px solid rgb(240, 240, 243);
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
            margin-top: 10px;
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
    }
}
</style>
