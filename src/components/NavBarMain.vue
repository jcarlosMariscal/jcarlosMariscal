<template>
  <nav class="navbar">
    <div class="navbar__resume">
      <div class="navbar__resume-profile">
        <p class="profile-icon">JC</p>
      </div>
      <!-- <div class="profile-info">
        <h2>Carlos Mariscal</h2>
        <h3>Desarrollador Front-end</h3>
      </div> -->
      <div class="navbar-theme">
        <button type="button" class="theme-btn">
          <!-- <i class="bx bx-sun"></i> -->
          <i class="bx bx-moon"></i>
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
          <a href="" class="item">Inicio</a>
        </li>
        <li class="menu__option">
          <a href="" class="item">Acerca de</a>
        </li>
        <li class="menu__option">
          <a href="" class="item">Portafolio</a>
        </li>
        <li class="menu__option">
          <a href="" class="item">Contacto</a>
        </li>
        <li class="menu__option">
          <a href="" class="item"><span class="item-text">CV</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const smallNavbar = ref(false);
const mobileNavbar = ref(false);
const resizeNavbar = () => (smallNavbar.value = !smallNavbar.value);
const navbarMobile = () => (mobileNavbar.value = !mobileNavbar.value);
</script>

<style scoped>
.navbar {
  /* background: var(--color-navbar-bg); */
  /* opacity: 0.9; */
  width: 100%;
  height: 4rem;
  position: fixed;
  transition: all 0.5s ease-in;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: pink; */
}

.navbar .navbar__resume {
  color: var(--color-text) !important;
  /* background: aqua; */
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-left: 1rem;
}
.navbar__resume-profile {
  /* background: pink; */
  width: 100%;
  /* margin: 0 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar__resume-profile .profile-icon {
  background: var(--color-text);
  color: var(--color-navbar-bg) !important;
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
  /* background-color: var(--color-text);
  color: var(--color-navbar-bg); */
  color: var(--color-text) !important;
  background: transparent;
  /* color: blue !important; */
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
  /* background: pink; */
  margin: 0 1rem;
  /* padding: 0 1rem; */
  /* overflow-x: hidden; */
  /* display: flex; */
  /* flex-direction: row !; */
}
.navbar__menu-options {
  display: flex;
  gap: 1rem;
}
.navbar__menu-options .menu__option {
  /* display: flex !important; */
  /* flex-direction: row; */
  /* background: aqua; */
  /* margin: 1.5rem 0; */
}
.navbar__menu-options .menu__option .item {
  /* background: pink; */
  padding: 0 0.3rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.navbar__menu-options .menu__option .item {
  font-size: 1rem;
  line-height: 24px;
  transition: all 5s ease-in;
  padding: 0.5rem 0.2rem;
  color: var(--color-text);
  /* color: red; */
  font-weight: 500 !important;
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
    /* display: none; */
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
    /* display: flex; */
    /* gap: 1rem; */
    flex-direction: column;
    /* background: var(--color-navbar-bg); */
    background: #f5f5fa;
    height: 100%;
    width: 15rem;
    padding-left: 0.5rem;
    padding-top: 4rem !important;
  }
}
@media screen and (max-width: 500px) {
  .navbar__menu-options {
    /* height: 100%; */
    width: 100%;
  }
  .navbar__menu-options .menu__option .item {
    /* background-color: red; */
    /* height: 100%; */
    /* width: 100%; */
    display: flex;
    justify-content: center;
    /* text-align: center !important; */
  }
}
</style>
