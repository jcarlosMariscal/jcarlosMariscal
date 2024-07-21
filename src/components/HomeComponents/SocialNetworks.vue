<template>
  <!-- <div class="resume__social"></div> -->
  <div class="social__networks">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.link"
      target="_blank"
      rel="noopener noreferrer"
      class="network"
      ><i :class="'bx ' + social.iconClass"></i
    ></a>
  </div>
</template>

<script lang="ts" setup>
type TSocial = {
  iconClass: string;
  link: string;
};
const socials: TSocial[] = [
  { iconClass: "bxl-instagram", link: "https://www.instagram.com/karlrm_16/" },
  {
    iconClass: "bxl-facebook",
    link: "https://www.facebook.com/KarlosDragneel/",
  },
  {
    iconClass: "bxl-linkedin",
    link: "https://www.linkedin.com/in/jcarlosmariscal/",
  },
  { iconClass: "bxl-github", link: "https://github.com/jcarlosMariscal" },
  { iconClass: "bxl-twitter", link: "https://twitter.com/jc_zmar" },
];
</script>

<style scoped>
.social__networks {
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 1rem;
}
@media screen and (max-width: 1000px) {
  .social__networks {
    justify-content: center;
  }
}
.social__networks .network {
  font-size: 1.4rem;
  color: var(--color-text);
  transition: all 0.3s ease-in;
}
.social__networks .network:hover {
  color: var(--color-primary);
  transition: all 0.1s ease-in;
}
.resume__social {
  margin: 1.5rem 0;
}
</style>
