<template>
  <nav class="navbar">
    <div class="navbar__resume">
      <div class="navbar__resume-profile">
        <p class="profile-icon">JC</p>
      </div>
    </div>
    <div class="navbar__menu-mobile">
      <button
        type="button"
        class="profile-icon-menu"
        @click.prevent="navbarMobile"
      >
        <i
          class="bx"
          :class="{ 'bx-menu-alt-right': !mobileNavbar, 'bx-x': mobileNavbar }"
        ></i>
      </button>
    </div>
    <div class="navbar__menu" :class="{ 'mobile-active': mobileNavbar }">
      <ul class="navbar__menu-options">
        <ButtonHeader
          v-for="(nav, index) in navigation"
          :key="index"
          :nav="nav"
          @click="handleClick"
        />
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ButtonHeader from "./pure/ButtonHeader.vue";
type TNavigation = {
  title: string;
  to: string;
};
const navigation: TNavigation[] = [
  { title: "Inicio", to: "/" },
  { title: "Sobre Mí", to: "/about-me" },
  { title: "Proyectos", to: "/projects" },
  { title: "Tecnologías", to: "/technologies" },
  { title: "Contacto", to: "/contact" },
];
const mobileNavbar = ref(false);

const navbarMobile = () => (mobileNavbar.value = !mobileNavbar.value);
const handleClick = () => (mobileNavbar.value = false);
</script>
<style scoped>
.navbar {
  min-width: 7rem;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  padding-top: 2rem;
  z-index: 999;
}
.navbar .navbar__resume {
  color: var(--color-text) !important;
  text-align: right;
}
.navbar__resume-profile {
  width: 100%;
  display: flex;
  justify-content: right;
}
.navbar__resume-profile .profile-icon {
  background: var(--color-text);
  color: var(--color-bg) !important;
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
}
.navbar-theme .theme-btn {
  color: var(--color-text) !important;
  background: transparent;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.navbar__menu-mobile {
  display: none;
}
.navbar__menu-options {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 800px) {
  .navbar__menu-mobile {
    display: block;
    margin: 0 1rem;
    z-index: 50 !important;
  }
  .navbar__menu-mobile .profile-icon-menu {
    color: var(--color-text);
    background: transparent;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }
  .navbar__menu {
    position: absolute;
    top: 0;
    left: -1rem;
    width: 50vw;
    height: 100vh;
    /* background: rgba(0, 0, 0, 0.6); */
    background: var(--color-bg);
    transform: translateX(-105%);
    transition: transform 0.3s ease-in;
    z-index: 25 !important;
  }
  .navbar__menu.mobile-active {
    transition: transform 0.3s ease-in;
    transform: translateX(0);
  }
  .navbar__menu-options {
    flex-direction: column;
    background: var(--navbar-bg);
    height: 100%;
    width: 15rem;
    padding-left: 0.5rem;
    padding-top: 4rem !important;
  }
  .navbar .navbar__resume {
    margin-left: 1rem;
  }
  .navbar__menu {
    margin: 0 1rem;
  }
}
@media screen and (max-width: 500px) {
  .navbar__menu-options {
    width: 100%;
  }
}
</style>
<!-- 288 -->
