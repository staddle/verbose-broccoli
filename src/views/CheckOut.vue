<template>
  <div class="container">
    <div class="py-6 text-center">
      <h2 class="text-primary fw-bold">Checkout</h2>
    </div>
    <hr class="mt-1">
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <CartComponent></CartComponent>
        <PromoComponent></PromoComponent>
      </div>
      <div class="col-md-7 col-lg-8">
            
      <form class="needs-validation" novalidate="true">
          <AddressComponent></AddressComponent>
          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
      </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CartComponent from "@/components/Checkout/CartComponent.vue";
import PromoComponent from "@/components/Checkout/PromoComponent.vue";
import AddressComponent from "@/components/Checkout/AddressComponent.vue";

export default {
  components: {
    CartComponent,
    PromoComponent,
    AddressComponent
  }
};
</script>

<style>
.py-6{
  padding-top: 6rem;
  padding-bottom: 2rem;
}
</style>
