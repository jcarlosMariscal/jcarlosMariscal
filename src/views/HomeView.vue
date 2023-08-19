<template>
  <div class="container">
    <HomeMain />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script lang="ts" setup>
import HomeMain from "../components/HomeMain.vue";
</script>
<style scoped>
.container {
  /* background: aqua; */
  height: auto;
  margin: 1rem 3rem;
}
@media screen and (max-width: 700px) {
  .container {
    margin: 1rem 0.5rem;
  }
}
</style>
