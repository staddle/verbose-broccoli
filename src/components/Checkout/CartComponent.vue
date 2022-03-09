<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge bg-primary rounded-pill">{{ cart.itemCount }}</span>
    </h4>
    <ul class="list-group mb-3">
        <CartItemComponent v-for="product in cart.fullCart" :key="product.id" :item="product"></CartItemComponent>
        <li class="list-group-item d-flex justify-content-between border-top-bold">
            <span>Total (USD)</span>
            <strong>${{ cart.totalPrice }}</strong>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CartItemComponent from "@/components/Checkout/CartItemComponent.vue";
import { useStore } from "@/stores/cart";

export default {
    components : {
        CartItemComponent,
    },
    setup() {
        const cart = useStore();
        return {
            cart,
        };
    },
}
</script>

<style>
.border-top-bold {
    border-top: 1px solid #00000066 !important;
}
</style>