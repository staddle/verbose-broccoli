<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <CatalogItemCard v-for="catalogItem in catalog" :key="catalogItem.id" :item="catalogItem" class="m-3 h-100"></CatalogItemCard>
    </div>
    
  </div>
</template>

<script>
import CatalogItemCard from "./CatalogItemCard.vue";
import { sampleItems } from "../assets/sampleItems.ts"

export default {
  components: {
    CatalogItemCard,
  },
  data: function () {
    return {
      catalog: sampleItems,
    };
  },
};
</script>

<style></style>
