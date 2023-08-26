<template>
  <div class="container">
    <HomeMain />
    <!-- <hr class="custom-hr" /> -->
    <AboutMe />
    <ProjectsMain />
    <TechnologiesMain />
    <ContactMain />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script lang="ts" setup>
import HomeMain from "../components/HomeMain.vue";
import AboutMe from "../components/AboutMe.vue";
import ProjectsMain from "../components/ProjectsMain.vue";
import TechnologiesMain from "../components/TechnologiesMain.vue";
import ContactMain from "../components/ContactMain.vue";
</script>
<style>
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
.btn {
  background: transparent;
  border: 1px solid var(--color-primary) !important;
  color: var(--color-text);
  border: none;
  padding: 0.8rem 1.2rem;
  width: 8rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;
}
.btn:hover {
  background-position: 0 0;
  /* color: #333; */
  color: var(--permanent-white);
  transition: all 0.2s ease-in;
}
@media screen and (max-width: 700px) {
  .container {
    margin: 1rem 0.5rem;
  }
}
</style>
