<template>
  <div class="card shadow card-product">
  <img :src="'assets/images/' + product.gambar" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.nama }}</h5>
    <p class="card-text">Price: Rp {{ product.harga }}</p>
    <a href="https://www.tokopedia.com/ptdss" class="btn btn-success"><b-icon-cart></b-icon-cart> Go Somewhere</a>
  </div>
</div>
</template>

<script>
export default {
    name: 'CardProduct',
    props: ['product'],
}
</script>

<style>

</style>