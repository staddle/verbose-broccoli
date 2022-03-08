<template>
  <div class="item">
    <div class="image">
      <img :src="this.item.image" alt="" />
    </div>
    <div class="text">
      <h3>{{ this.item.title }}</h3>
      <h4>{{ this.item.price }}</h4>
      <p>{{ this.item.description }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import CatalogItem from "../models/CatalogItem";

export default {
  props: {
    item: CatalogItem,
  },
  methods: {
    addToCart() {
      //this.$emit("add-to-cart", this.item);
    },
  },
};
</script>

<style></style>
