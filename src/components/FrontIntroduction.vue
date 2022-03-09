<template>
  <div>
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light text-primary fw-bold">Broccoli</h1>
        <p class="lead text-muted">
          Buy and sell your favorite items through
          <span class="text-primary fw-bolder">Broccoli</span>. Secured by
          smart contracts on the
          <img
            class="logo-inline"
            src="../assets/Images/ethereum-eth-logo.svg"
          />Ethereum blockchain.
        </p>
        <p>
          <a href="#" class="btn btn-primary text-light my-2">Try it today!</a>
          or
          <a href="#" class="btn btn-secondary my-2">Sign in</a>
        </p>
      </div>
    </div>
    <div class="bg-image">
      <img src="../assets/Images/undraw_ether_re_y7ft.svg" height="35%">
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
$primary: rgb(6, 167, 27);

.bg-image{
  height: 100%;
  position: absolute;
  top: 7%;
  right: 10%;
  z-index: -1;
}
</style>
