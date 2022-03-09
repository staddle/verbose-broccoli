<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand brand-img" to="/">Broccoli</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            :placeholder="searchPlaceholder+'...'"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout">
              <div class="position-relative h-100 w-100">
                <font-awesome-icon class="fs-4 text-primary" :icon="['fas', 'cart-shopping']" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{{ cart.itemCount }}</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signin">Sign in</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import "../assets/styles/nav.scss";
import { useStore } from "@/stores/cart";
import { getRandomCategory } from "@/assets/categories";

export default {
    data() {
      return {
        searchPlaceholder : getRandomCategory(),
      }
    },
    setup() {
      const cart = useStore();

      return {
        cart,
      }
  }
};
</script>

<style lang="scss">
</style>
