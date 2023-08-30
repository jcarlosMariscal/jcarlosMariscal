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
        <li class="menu__option">
          <a href="#inicio" class="header-anim item draw">Inicio</a>
        </li>
        <li class="menu__option">
          <a href="#sobre-mi" class="header-anim item draw">Sobre mí</a>
        </li>
        <li class="menu__option">
          <a href="#proyectos" class="header-anim item draw">Proyectos</a>
        </li>
        <li class="menu__option">
          <a href="#tecnologias" class="header-anim item draw">Tecnologías</a>
        </li>
        <li class="menu__option">
          <a href="#contacto" class="header-anim item draw">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const darkMode = ref(true);
const mobileNavbar = ref(false);
const darkModeActivated = () => {
  document.documentElement.style.setProperty("--color-text", "#ececee");
  document.documentElement.style.setProperty("--color-bg", "#141414");
  document.documentElement.style.setProperty("--color-bg-second", "#181717");
  document.documentElement.style.setProperty(
    "--navbar-bg",
    "rgba(20, 20, 20, 0.8)"
  );
};
const lightModeActivated = () => {
  document.documentElement.style.setProperty("--color-text", "#141414");
  document.documentElement.style.setProperty("--color-bg", "#ececee");
  document.documentElement.style.setProperty("--color-bg-second", "#e8e8f8");
  document.documentElement.style.setProperty(
    "--navbar-bg",
    "rgba(236, 236, 238, 0.8)"
  );
};
onMounted(() => {
  if (darkMode.value) {
    darkModeActivated();
  } else {
    lightModeActivated();
  }
});

const navbarMobile = () => (mobileNavbar.value = !mobileNavbar.value);
const changeTheme = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    darkModeActivated();
  } else {
    lightModeActivated();
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  /* transition: all 0.5s ease-in; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--navbar-bg);
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
  background: var(--gradient-background);
  color: var(--permanent-white) !important;
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.3rem;
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
.navbar__menu-options .menu__option .item {
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 24px;
  transition: all 0.1s ease-in;
  padding: 0.5rem 0.2rem;
  color: var(--color-text);
  font-weight: 500 !important;
  /* background-color: aqua; */
  /* border: 1px solid red; */
}
.navbar__menu-options .menu__option .item:hover {
  color: var(--color-primary);
  /* border-bottom: 1px solid var(--color-primary); */
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
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.04);
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
  .navbar__menu-options .menu__option .item {
    display: flex;
    justify-content: center;
  }
}

/* Source --: https://www.sliderrevolution.com/resources/css-border-animation/ ++ CSS Border transitions [Draw] ++ */
.header-anim {
  background: none;
  border: 0;
  box-sizing: border-box;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
  padding: 0.5rem 1rem !important;
}
.header-anim::before,
.header-anim::after {
  box-sizing: inherit;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}
.draw {
  transition: color 0.25s;
}
.draw::before,
.draw::after {
  border: 2px solid transparent;
  width: 0;
  height: 0;
}
.draw::before {
  top: 0;
  left: 0;
}
.draw::after {
  bottom: 0;
  right: 0;
}
.draw:hover {
  color: var(--color-primary);
}
.draw:hover::before,
.draw:hover::after {
  width: 100%;
  height: 100%;
}
.draw:hover::before {
  border-bottom-color: var(--color-primary);
  /* border-right-color: var(--color-primary); */
  /* border-left-color: var(--color-primary); */
  border-top-color: var(--color-primary);
  transition: width 0.15s ease-out, height 0.25s ease-out 0.0001s;
}
/* .draw:hover::after { */
/* border-bottom-color: var(--color-primary); */
/* border-left-color: var(--color-secondary); */
/* transition: border-color 0s ease-out 0.5s, width 0.15s ease-out 0.5s, */
/* height 0.25s ease-out 0.75s; */
/* } */
</style>
