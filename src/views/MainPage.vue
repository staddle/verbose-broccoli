<template>
  <div>
    <section class="py-5 text-center container">
      <FrontIntroduction></FrontIntroduction>
    </section>

    <CatalogComponent @add-to-cart="addToCart"></CatalogComponent>
  </div>
</template>

<script lang="ts">
import CatalogComponent from "../components/CatalogComponent.vue";
import FrontIntroduction from "../components/FrontIntroduction.vue";
import { useStore } from "@/stores/cart";
import type CatalogItem from "@/models/CatalogItem";

export default {
  components: {
    CatalogComponent,
    FrontIntroduction,
  },
  methods: {
    addToCart(item: CatalogItem) {
      this.cart.add(item);
    },
  },
  setup() {
    const cart = useStore();
    return {
      cart,
    };
  },
};
</script>

<style>
.logo-inline {
  display: inline;
  margin-right: 0.3rem;
  height: 1rem;
}
</style>
