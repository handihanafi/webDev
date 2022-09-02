<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Best Product</strong>,<br />
                for your Company
              </h2>
              <p>Come on, choose the product you ordered</p>
              <!-- <router-link class="btn btn-lg btn-success">Pesan</router-link> -->
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/factory.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-2">
          <img src="../assets/images/factory.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Best Product</strong>,<br />
                for your Company
              </h2>
              <p>Come on, choose the product you ordered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>