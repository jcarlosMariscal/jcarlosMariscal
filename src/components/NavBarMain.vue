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
          <a href="" class="header-anim item draw">Inicio</a>
        </li>
        <li class="menu__option">
          <a href="" class="header-anim item draw">Acerca de</a>
        </li>
        <li class="menu__option">
          <a href="" class="header-anim item draw">Portafolio</a>
        </li>
        <li class="menu__option">
          <a href="" class="header-anim item draw">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const darkMode = ref(false);
const mobileNavbar = ref(false);
const navbarMobile = () => (mobileNavbar.value = !mobileNavbar.value);
const changeTheme = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.style.setProperty("--color-text", "#ececee");
    document.documentElement.style.setProperty("--color-bg", "#141414");
    document.documentElement.style.setProperty(
      "--navbar-bg",
      "rgba(20, 20, 20, 0.96)"
    );
    document.documentElement.style.setProperty(
      "--background-image",
      `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 8%, 1)'/><path d='M9 20.502h0A7.5 7.5 0 0 1 1.5 28 7.5 7.5 0 0 0-6 35.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1-21 35.5h0a7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 0-6 20.502h0a7.5 7.5 0 1 1 15 0zm15 0h0A7.5 7.5 0 0 1 16.5 28a7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 20.502h0c0-2.072-.84-3.947-2.197-5.303A7.477 7.477 0 0 0 1.5 13.002a7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1-6 5.503h0a7.5 7.5 0 1 1 15 0h0c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196c2.07 0 3.945.84 5.303 2.197A7.471 7.471 0 0 1 24 20.502zm15 0h0A7.5 7.5 0 0 1 31.5 28a7.5 7.5 0 0 0-7.5 7.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 35.5h0a7.5 7.5 0 0 1 7.5-7.5 7.5 7.5 0 0 0 7.5-7.498h0a7.5 7.5 0 1 1 15 0zm0-30h0A7.5 7.5 0 0 1 31.5-2 7.5 7.5 0 0 0 24 5.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 5.5h0A7.5 7.5 0 0 1 16.5-2 7.5 7.5 0 0 0 24-9.498h0a7.5 7.5 0 1 1 15 0zm-22.5 37.5a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303A7.477 7.477 0 0 0 1.5 28.002 7.5 7.5 0 0 0 9 20.503c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196zm15-15a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303a7.477 7.477 0 0 0-5.303-2.197A7.5 7.5 0 0 0 24 5.503c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196z'  stroke-width='1.5' stroke='hsla(126, 23%, 49%, 0.01)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`
    );
  } else {
    document.documentElement.style.setProperty("--color-text", "#141414");
    document.documentElement.style.setProperty("--color-bg", "#ececee");
    document.documentElement.style.setProperty(
      "--navbar-bg",
      "rgba(236, 236, 238, 0.96)"
    );
    document.documentElement.style.setProperty(
      "--background-image",
      `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(240, 6%, 93%, 1)'/><path d='M9 20.502h0A7.5 7.5 0 0 1 1.5 28 7.5 7.5 0 0 0-6 35.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1-21 35.5h0a7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 0-6 20.502h0a7.5 7.5 0 1 1 15 0zm15 0h0A7.5 7.5 0 0 1 16.5 28a7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 20.502h0c0-2.072-.84-3.947-2.197-5.303A7.477 7.477 0 0 0 1.5 13.002a7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1-6 5.503h0a7.5 7.5 0 1 1 15 0h0c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196c2.07 0 3.945.84 5.303 2.197A7.471 7.471 0 0 1 24 20.502zm15 0h0A7.5 7.5 0 0 1 31.5 28a7.5 7.5 0 0 0-7.5 7.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 35.5h0a7.5 7.5 0 0 1 7.5-7.5 7.5 7.5 0 0 0 7.5-7.498h0a7.5 7.5 0 1 1 15 0zm0-30h0A7.5 7.5 0 0 1 31.5-2 7.5 7.5 0 0 0 24 5.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 5.5h0A7.5 7.5 0 0 1 16.5-2 7.5 7.5 0 0 0 24-9.498h0a7.5 7.5 0 1 1 15 0zm-22.5 37.5a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303A7.477 7.477 0 0 0 1.5 28.002 7.5 7.5 0 0 0 9 20.503c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196zm15-15a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303a7.477 7.477 0 0 0-5.303-2.197A7.5 7.5 0 0 0 24 5.503c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196z'  stroke-width='1.5' stroke='hsla(126, 23%, 49%, 0.02)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`
    );
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  transition: all 0.5s ease-in;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.draw:hover::after {
  /* border-bottom-color: var(--color-primary); */
  /* border-left-color: var(--color-secondary); */
  /* transition: border-color 0s ease-out 0.5s, width 0.15s ease-out 0.5s, */
  /* height 0.25s ease-out 0.75s; */
}
</style>
