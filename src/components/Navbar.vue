<template>
  <div>
    <b-navbar toggleable type="light" variant="light">
      <div class="container">
        <div class="container-fluid">
          <img src="../assets/images/dss.png" alt="Logo" style="width: 70px" />

          <b-navbar-toggle target="navbar-toggle-collapse" style="border-color: #28a745">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" class="updown" icon="chevron-bar-up"></b-icon>
              <b-icon v-else class="updown" icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <router-link class="nav-link" to="/">Home</router-link>
              <router-link class="nav-link" to="/products"
                >Products</router-link
              >
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </b-navbar>

    <nav class="mobile-nav d-lg-none">
      <ul>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/products">Products</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.updown {
    color: #28a745;
}
</style>
