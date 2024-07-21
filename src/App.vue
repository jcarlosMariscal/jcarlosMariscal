<template>
  <div class="content">
    <NavBarMain />
    <div class="bg-gradient">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
    </div>
    <div class="container">
      <div class="container-header">
        <div class="container-resume">
          <span class="resume-name">Carlos Mariscal</span>
          <span>-</span>
          <span class="resume-rol">Web Developer</span>
        </div>
        <div class="container-theme">
          <button type="button" class="theme-btn" @click.prevent="changeTheme">
            <i
              class="bx"
              :class="{ 'bx-sun': darkMode, 'bx-moon': !darkMode }"
            ></i>
            <span class="theme-btn-text">{{
              darkMode ? "Light" : "Dark"
            }}</span>
          </button>
        </div>
      </div>
      <div class="container-main">
        <div class="container-section">
          <router-view />
        </div>
      </div>
      <div class="container-footer">
        <p>Copyright © 2024 <a href="">Carlos Mariscal</a></p>
        <SocialNetworks />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import NavBarMain from "./components/NavBarMain.vue";
import SocialNetworks from "./components/sections/SocialNetworks.vue";
const theme = ref<"light" | "dark">("light");
const darkMode = ref(false);
const changeTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.value);
  updateTheme(theme.value);
};

const updateTheme = (value: string) => {
  darkMode.value = value === "light" ? false : true;
  document.documentElement.setAttribute("data-theme", value);
};
onMounted(() => {
  const localTheme = localStorage.getItem("theme");
  theme.value = localTheme === "light" ? "light" : "dark";
  updateTheme(theme.value);
});
</script>
<style>
@import "assets/css/theme.css";
@import "assets/css/style.css";
.content {
  display: flex;
  position: relative;
}
.bg-gradient .bg1 {
  position: absolute;
  right: 4rem;
  top: 16rem;
  background: linear-gradient(
    -45deg,
    #10075a,
    #2982b6,
    #ff3300,
    #ad2fad,
    #111110,
    #eeefff
  );
  background-size: 400% 400%;
  animation: gradient-anim 15s ease infinite;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  filter: blur(100px);
}
.bg-gradient .bg2 {
  position: absolute;
  right: 20rem;
  top: 7.5rem;
  background: linear-gradient(
    -45deg,
    #069906,
    #061388,
    #cfec29,
    #111110,
    #111110
  );
  background-size: 400% 400%;
  animation: gradient-anim 15s ease infinite;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  filter: blur(100px);
}
.bg-gradient .bg3 {
  position: absolute;
  right: 30rem;
  top: 23rem;
  background: linear-gradient(
    -45deg,
    #10a14c,
    #4a0fb8,
    #cf60b3,
    #c40740,
    #eeefff,
    #eeefff
  );
  background-size: 400% 400%;
  animation: gradient-anim 15s ease infinite;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  filter: blur(100px);
}
@keyframes gradient-anim {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.container-theme .theme-btn {
  color: var(--color-text) !important;
  background: transparent;
  font-size: 1.3rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.theme-btn-text {
  font-size: 1rem;
  margin-left: 0.3rem;
}
.content-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 11rem;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: var(--color-text);
}
.content-footer p a {
  color: var(--color-primary);
}
.content-footer p a:hover {
  color: var(--color-secondary);
}
.container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.container-header,
.container-main,
.container-footer {
  margin: 0 2rem;
}
.container-main {
  height: calc(100vh - 4rem);
  box-shadow: rgba(75, 85, 85, 0.2) 0px 1px 4px 0px;
  overflow: auto;
  overflow: -moz-scrollbars-none; /* Para navegadores basados en Mozilla */
  -ms-overflow-style: none; /* Para Internet Explorer y Edge */
}
.container-main::-webkit-scrollbar {
  display: none; /* Para navegadores basados en WebKit como Chrome y Safari */
}
.container-header {
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-footer {
  height: 2rem;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  color: var(--color-text);
}
.container-footer p a {
  color: var(--color-secondary);
}
.container-resume {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-weight: bold;
  z-index: 500;
}
.container-section {
  padding: 1rem 1.5rem;
}

@media screen and (max-width: 1000px) {
  .bg-gradient .bg1 {
    position: absolute;
    right: 4rem;
    top: 16rem;
  }
  .bg-gradient .bg2 {
    position: absolute;
    right: 20rem;
    top: 5rem;
    z-index: inherit;
  }
  .bg-gradient .bg3 {
    position: absolute;
    right: 20rem !important;
    bottom: 5rem !important;
    z-index: inherit;
  }
}
@media screen and (max-width: 800px) {
  .content {
    flex-direction: column;
  }
  .container {
    width: auto !important;
    height: auto !important;
  }
  .container-header {
    display: none !important;
  }
  .container-main {
    height: auto !important;
    margin: 0.5rem !important;
  }
  .bg-gradient {
    display: none;
  }
  .container-footer {
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0 !important;
  }
}
@media screen and (max-width: 400px) {
  .container-main {
    margin: 0.1rem !important;
  }
}
@media screen and (max-width: 900px) {
  .container {
    margin: 1rem 1.5rem;
  }
}
.my-toast-popup {
  background-color: var(
    --color-primary
  ) !important; /* Cambia el color de fondo que desees */
}

.my-toast-title {
  font-weight: normal;
  font-size: 0.9rem !important;
  color: var(
    --color-text
  ) !important; /* Cambia el color del texto que desees */
}
::-webkit-scrollbar {
  width: 10px;
  pad: 2px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: var(--color-text);
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-secondary);
}
</style>
