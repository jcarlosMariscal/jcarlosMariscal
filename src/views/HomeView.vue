<template>
  <div class="container">
    <HomeMain />
    <!-- <hr class="custom-hr" /> -->
    <AboutMe />
    <ProjectsMain />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script lang="ts" setup>
import HomeMain from "../components/HomeMain.vue";
import AboutMe from "../components/AboutMe.vue";
import ProjectsMain from "../components/ProjectsMain.vue";
</script>
<style scoped>
.container {
  /* background: aqua; */
  height: auto;
  margin: 1rem 3rem;
}
.custom-hr {
  width: 100%;
  height: 1.5px;
  background: var(--color-text);
  opacity: 0.4;
  border: none;
}
@media screen and (max-width: 700px) {
  .container {
    margin: 1rem 0.5rem;
  }
}
</style>
