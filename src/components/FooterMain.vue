<template>
  <div class="footer">
    <div class="footer__social">
      <SocialNetworks />
    </div>
    <div class="footer__copyright">
      <p>Copyright © 2024 <a href="">Carlos Mariscal</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SocialNetworks from "./HomeComponents/SocialNetworks.vue";
</script>

<style scoped>
.footer {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  opacity: 0.1;
}
.footer__social,
.footer__copyright {
  padding: 0.5rem;
}
.footer__copyright p {
  color: var(--color-text);
  font-size: 1rem;
}
.footer__copyright p a {
  color: var(--color-primary);
}
.footer__copyright p a:hover {
  color: var(--color-secondary);
}
</style>
