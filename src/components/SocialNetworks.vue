<template>
  <div class="social__networks">
    <a
      href="https://www.instagram.com/karlrm_16/"
      target="_blank"
      rel="noopener noreferrer"
      class="network"
      ><i class="bx bxl-instagram"></i
    ></a>
    <a
      href="https://www.facebook.com/KarlosDragneel/"
      target="_blank"
      rel="noopener noreferrer"
      class="network"
      ><i class="bx bxl-facebook"></i
    ></a>
    <a
      href="https://www.linkedin.com/in/jcarlosmariscal/"
      target="_blank"
      rel="noopener noreferrer"
      class="network"
      ><i class="bx bxl-linkedin"></i
    ></a>
    <a
      href="https://github.com/jcarlosMariscal"
      target="_blank"
      rel="noopener noreferrer"
      class="network"
      ><i class="bx bxl-github"></i
    ></a>
    <a
      href="https://twitter.com/jc_zmar"
      target="_blank"
      rel="noopener noreferrer"
      class="network"
      ><i class="bx bxl-twitter"></i
    ></a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.social__networks {
  width: 100%;
  /* background-color: aliceblue; */

  display: flex;
  align-items: center;
  gap: 1.5rem;
}
@media screen and (max-width: 1000px) {
  .social__networks {
    justify-content: center;
  }
}
.social__networks .network {
  font-size: 2rem;
  color: var(--color-text);
  transition: all 0.3s ease-in;
}
.social__networks .network:hover {
  background: var(--gradient-background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in;
}
</style>
