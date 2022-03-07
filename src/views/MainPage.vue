<template>
  <div>
    <section class="py-5 text-center container">
      <FrontIntroduction></FrontIntroduction>
    </section>

    <div class="album py-5 bg-light">
      <CatalogComponent></CatalogComponent>
    </div>
  </div>
</template>

<script>
import CatalogComponent from "../components/CatalogComponent.vue";
import FrontIntroduction from "../components/FrontIntroduction.vue";

export default {
  components: {
    CatalogComponent,
    FrontIntroduction,
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
