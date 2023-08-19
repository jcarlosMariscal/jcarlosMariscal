<template>
  <nav class="navbar" :class="{ small: smallNavbar }">
    <div class="navbar__resume">
      <div class="navbar__resume-profile">
        <p class="profile-icon">JC</p>
      </div>
      <div class="profile-info">
        <h2>Carlos Mariscal</h2>
        <h3>Desarrollador Front-end</h3>
      </div>
      <button
        type="button"
        class="profile-icon-menu"
        @click.prevent="navbarMobile"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <div class="navbar__menu" :class="{ show: mobileNavbar }">
      <ul class="navbar__menu-options">
        <li class="menu__option">
          <a href="" class="item"
            ><i class="item-icon fa-solid fa-house"></i
            ><span class="item-text">Inicio</span></a
          >
        </li>
        <li class="menu__option">
          <a href="" class="item"
            ><i class="item-icon fa-solid fa-user"></i
            ><span class="item-text">Acerca de</span></a
          >
        </li>
        <li class="menu__option">
          <a href="" class="item"
            ><i class="item-icon fa-solid fa-folder-open"></i
            ><span class="item-text">Portafolio</span></a
          >
        </li>
        <li class="menu__option">
          <a href="" class="item"
            ><i class="item-icon fa-solid fa-envelope"></i
            ><span class="item-text">Contacto</span></a
          >
        </li>
        <li class="menu__option">
          <a href="" class="item"
            ><i class="item-icon fa-solid fa-file-lines"></i
            ><span class="item-text">CV</span></a
          >
        </li>
      </ul>
    </div>
    <div class="navbar__socials">
      <div class="social-newtworks">
        <a href="#" class="network network-facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" class="network network-linkedin">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" class="network network-github">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#" class="network network-instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" class="network network-xtwitter">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
    <div class="navbar__controller" :class="{ active: smallNavbar }">
      <button
        type="button"
        class="btn-controller"
        @click.prevent="resizeNavbar"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
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
  background: var(--color-navbar-bg);
  opacity: 0.9;
  width: 20vw;
  height: 100vh;
  position: fixed;
  transition: all 0.5s ease-in;
}

.navbar .navbar__resume {
  /* background: purple; */
  text-align: center;
  padding: 2rem 0;
  color: var(--color-text);
  overflow-x: hidden;
}
.navbar__resume-profile {
  /* background: pink; */
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar__resume-profile .profile-icon {
  background: var(--color-text);
  color: var(--color-navbar-bg);
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.3rem;
}
.navbar__resume .profile-info {
  text-align: center;
  padding: 0.5rem;
  transition: all 5s ease-in;
  /* overflow: hidden; */
  /* animation: aparecer 5s ease-in; */
  animation: aparecer 4s ease-in !important;
}
@keyframes aparecer {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
.navbar__resume .profile-info h2 {
  /* color: var(--color-text); */
  font-weight: bold;
  margin: 1rem 0;
  font-size: 1.5rem;
  margin: 0.1rem;
}
.navbar__resume .profile-info h3 {
  font-size: 1rem;
}
.navbar__resume .profile-icon-menu {
  display: none;
}
.navbar__menu {
  /* background: pink; */
  padding: 0 1rem;
  overflow-x: hidden;
}
.navbar__menu-options .menu__option {
  /* background: aqua; */
  margin: 1.5rem 0;
}
.navbar__menu-options .menu__option .item {
  /* background: pink; */
  /* padding: 0 1rem; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.navbar__menu-options .menu__option .item .item-icon {
  /* background: var(--color-text); */
  color: var(--color-text);
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.3rem;
}
.navbar__menu-options .menu__option .item .item-text {
  transition: all 5s ease-in;
  padding: 0.5rem 0.2rem;
  color: var(--color-text);
  font-weight: bold;
}
.navbar__socials {
  margin-top: 3rem;
  padding: 0 1rem;
}
.navbar__socials .social-newtworks {
  /* padding: 0 1rem; */
  /* background: aqua; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.navbar__socials .social-newtworks .network {
  /* padding: 0 1rem; */
  background: var(--color-text);
  color: var(--color-navbar-bg);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease-in;
}
.network.network-facebook:hover {
  background: #3b5998 !important;
  transition: all 0.3s ease-in;
}
.network.network-linkedin:hover {
  background: #0077b5 !important;
  transition: all 0.3s ease-in;
}
.network.network-github:hover {
  background: #211f1f !important;
  transition: all 0.3s ease-in;
}
.network.network-instagram:hover {
  background: #dd2a7b !important;
  transition: all 0.3s ease-in;
}
.network.network-xtwitter:hover {
  background: #000 !important;
  transition: all 0.3s ease-in;
}

.navbar__controller {
  position: absolute;
  top: 12vh;
  right: -4%;
  cursor: pointer;
}
.navbar__controller .btn-controller {
  /* position: absolute;
  top: 15%;
  right: -5%; */
  background: linear-gradient(
    90deg,
    rgba(76, 175, 86, 1) 0%,
    rgba(70, 173, 122, 1) 100%
  );
  color: var(--color-navbar-bg);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  outline: none;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.navbar__controller .btn-controller i {
  transition: all 0.5s ease-in;
  transform: rotate(360deg);
}
.navbar__controller.active .btn-controller i {
  transition: all 0.5s ease-in;
  transform: rotate(180deg);
}

.navbar.small {
  transition: all 1s ease-in;
  width: 4rem;
}
.navbar.small .navbar__resume-profile,
.navbar.small .navbar__menu-options .menu__option .item {
  justify-content: center;
  padding: 0;
}
.navbar.small .navbar__resume .profile-info {
  transition: all 5s ease-in;
  display: none;
}
.navbar.small .navbar__menu-options .menu__option .item .item-text {
  transition: all 5s ease-in;
  display: none;
}
.navbar.small .navbar__controller {
  /* position: absolute; */
  /* top: 15vh; */
  right: -20%;
}

@media screen and (max-width: 1000px) {
  .navbar {
    transition: all 0.5s ease-in;
    width: 4rem;
  }
  .navbar .navbar__resume-profile,
  .navbar .navbar__menu-options .menu__option .item {
    justify-content: center;
    padding: 0;
  }
  .navbar .navbar__resume .profile-info {
    transition: all 5s ease-in;
    display: none;
  }
  .navbar .navbar__menu-options .menu__option .item .item-text {
    transition: all 5s ease-in;
    display: none;
  }
  .navbar .navbar__controller {
    /* position: absolute; */
    /* top: 15vh; */
    right: -20%;
  }
  .navbar__socials {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .navbar {
    background: transparent;
    /* background: aquamarine; */
    opacity: 0.9;
    width: 100vw;
    height: 100vh;
    position: relative;
    transition: all 0.5s ease-in;
    z-index: 1;
  }
  .navbar .navbar__resume {
    height: 3rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .navbar__resume .navbar__resume-profile {
    width: auto;
  }
  .navbar__resume .profile-icon-menu {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    font-size: 1.5rem;
    border: none;
    background: var(--color-text);
    color: var(--color-navbar-bg);
    border-radius: 0.3rem;
    cursor: pointer;
  }
  .navbar .navbar__menu {
    width: 92%;
    height: 90vh;
    position: absolute;
    /* display: none; */
    background: rgba(0, 0, 0, 0.2);
    /* background: aquamarine; */
    /* width: 100vw; */
    /* height: 90vh; */
    overflow: hidden;
    transform: translateX(-100%);
    transition: 0.5s ease-in;
  }
  .navbar .navbar__menu.show {
    transform: translateX(0);
    transition: 0.5s ease-in;
  }
  /* .navbar .navbar__menu-options { */
  /* transition: all 5s ease-in; */
  /* display: block; */
  /* background: purple !important; */
  /* } */
  .navbar .navbar__menu-options .menu__option .item {
    /* transition: all 5s ease-in; */
    /* display: block; */
    /* background: orange; */
    width: 50%;
    justify-content: flex-start;
  }
  .navbar .navbar__menu-options .menu__option .item .item-text {
    transition: all 5s ease-in;
    display: block;
  }
  .navbar .navbar__controller {
    display: none;
  }
}
</style>
