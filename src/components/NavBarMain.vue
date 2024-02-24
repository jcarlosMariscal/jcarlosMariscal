<template>
  <nav class="navbar">
    <div class="navbar__resume">
      <div class="navbar__resume-profile">
        <p class="profile-icon">JC</p>
      </div>
      <div class="navbar-theme">
        <button type="button" class="theme-btn" @click.prevent="changeTheme">
          <i
            class="bx"
            :class="{ 'bx-sun': darkMode, 'bx-moon': !darkMode }"
          ></i>
        </button>
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
import { onMounted, ref } from "vue";
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
const theme = ref<"light" | "dark">("light");
const darkMode = ref(false);

const updateTheme = (value: string) => {
  darkMode.value = value === "light" ? false : true;
  document.documentElement.setAttribute("data-theme", value);
};
onMounted(() => {
  const localTheme = localStorage.getItem("theme");
  theme.value = localTheme === "light" ? "light" : "dark";
  updateTheme(theme.value);
});

const changeTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.value);
  updateTheme(theme.value);
};
const navbarMobile = () => (mobileNavbar.value = !mobileNavbar.value);
const handleClick = () => (mobileNavbar.value = false);
</script>
<style scoped>
.navbar {
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg);
  z-index: 999;
}
.navbar .navbar__resume {
  color: var(--color-text) !important;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-left: 2rem;
}
.navbar__resume-profile {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-radius: 50%;
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
.navbar__menu {
  margin: 0 2rem;
}
.navbar__menu-options {
  display: flex;
  gap: 2rem;
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
