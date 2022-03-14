<template>
  <div>
    <NavComponent></NavComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { useWeb3 } from "@/stores/web3";

export default {
  name: "App",
  components: {
    NavComponent,
    FooterComponent,
  },
  beforeCreate() {
    this.web3.registerWeb3();
  },
  setup() {
      const web3 = useWeb3();

      return {
        web3,
      }
  }
};
</script>

<style lang="scss">
//@import url("@/assets/styles/theme.scss");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
