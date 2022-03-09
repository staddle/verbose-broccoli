<template>
    <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">{{ item.name }}</h6>
            <small class="text-muted">{{ item.shortDescription }}</small>
        </div>
        <span class="text-muted">${{ item.price }}</span>
    </li>
</template>

<script>
import CatalogItem from "@/models/CatalogItem";

export default {
    props: {
        item: {
            type: CatalogItem,
            required: true,
        },
    },
}
</script>

<style>

</style>