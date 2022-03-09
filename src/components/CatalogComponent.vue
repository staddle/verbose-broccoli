<template>
  <div class="container">
    <div class="album py-5">
      <div class="row row-cols-1 row-cols-md-5 g-4">
        <CatalogItemCard v-for="catalogItem in catalog" :key="catalogItem.id" :item="catalogItem" class="m-3 h-100" @open-detail-view="openDetailView"></CatalogItemCard>
      </div>
    </div>
    <DetailItem v-if="detailItem" :item="detailItem" @close="closeDetailView" @add-to-cart="addToCart"></DetailItem>
  </div>
</template>

<script lang="ts">
import CatalogItemCard from "./CatalogItemCard.vue";
import DetailItem from "./DetailItem.vue";
import { generateSampleItems } from "../assets/sampleItems"
import CatalogItem from "../models/CatalogItem";

export default {
  components: {
    CatalogItemCard,
    DetailItem,
  },
  data: function () {
    return {
      catalog: generateSampleItems(10),
      detailItem: null,
    };
  },
  methods: {
    openDetailView(item: CatalogItem) {
      this.detailItem = item;
    },
    closeDetailView() {
      this.detailItem = null;
    },
    addToCart(item: CatalogItem) {
      this.$emit("add-to-cart", item);
    },
  },
};
</script>

<style></style>
