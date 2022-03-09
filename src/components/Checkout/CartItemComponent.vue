<template>
    <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">{{ item.name }}</h6>
            <small class="text-muted">{{ item.shortDescription }}</small>
        </div>
        <span class="text-muted">{{ getPriceInEth(item.price) }} 
                                <font-awesome-icon :icon="['fa-brands', 'ethereum']" /></span>
    </li>
</template>

<script lang="ts">
import CatalogItem from "@/models/CatalogItem";
import { getPriceInEth } from "@/integration/etherUtilities";

export default {
    props: {
        item: {
            type: CatalogItem,
            required: true,
        },
    },
    methods: {
        getPriceInEth(price: number) {
            return getPriceInEth(price);
        },
    },
}
</script>

<style>

</style>