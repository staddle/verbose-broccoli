<template>
  <div>
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light brand-name-top">Broccoli</h1>
        <p class="lead text-muted">
          Buy and sell your favorite items through
          <span class="brand-name-intext">Broccoli</span>. Secured by
          smart contracts on the
          <img
            class="logo-inline"
            src="../assets/Images/ethereum-eth-logo.svg"
          />Ethereum blockchain.
        </p>
        <p>
          <a href="#" class="btn btn-primary my-2">Try it today!</a>
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

<script>
export default {};
</script>

<style>
.brand-name-top {
  color: #05a61b;
  font-weight: 900;
}
.brand-name-intext {
  color: rgb(6, 167, 27);
  font-weight: bold;
}
.bg-image{
  height: 100%;
  position: absolute;
  top: 7%;
  right: 10%;
  z-index: -1;
}
</style>
