<template>
  <div class="content">
    <NavBarMain />
    <div class="container">
      <div class="container-resume">
        <span class="resume-name">Carlos Mariscal</span>
        <span>-</span>
        <span class="resume-rol">Web Developer</span>
      </div>
      <div class="container-section">
        <router-view />
      </div>
    </div>
    <div class="content-theme">
      <button type="button" class="theme-btn" @click.prevent="changeTheme">
        <i class="bx" :class="{ 'bx-sun': darkMode, 'bx-moon': !darkMode }"></i>
        <span class="theme-btn-text">{{ darkMode ? "Light" : "Dark" }}</span>
      </button>
    </div>
    <div class="content-footer">
      <p>Copyright © 2024 <a href="">Carlos Mariscal</a></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import NavBarMain from "./components/NavBarMain.vue";
// import FooterMain from "./components/FooterMain.vue";
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
  /* background: pink; */
  display: flex;
  position: relative;
}
.content-theme {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 2rem;
  margin-bottom: 0.4rem;
  /* background: orange; */
}
.content-theme .theme-btn {
  color: var(--color-text) !important;
  background: transparent;
  /* width: 1.8rem; */
  /* height: 1.8rem; */
  font-size: 1.3rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.theme-btn-text {
  font-size: 0.9rem;
  margin-left: 0.3rem;
}
.content-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 11rem;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  /* background: orange; */
  color: var(--color-text);
}
.content-footer p a {
  color: var(--color-primary);
}
.content-footer p a:hover {
  color: var(--color-secondary);
}
.container {
  /* min-height: 50rem; */
  /* max-height: 50rem; */
  height: calc(100vh - 4.1rem);
  width: 100%;
  margin: 1.5rem;
  /* background: yellow; */
  /* padding: 1.5rem; */
  border: 1px solid var(--color-border);
  overflow: auto;
  overflow: -moz-scrollbars-none; /* Para navegadores basados en Mozilla */
  -ms-overflow-style: none; /* Para Internet Explorer y Edge */
  /* -ms-overflow-style: none; */
  /* background: green; */
}
.container::-webkit-scrollbar {
  display: none; /* Para navegadores basados en WebKit como Chrome y Safari */
}

.container-resume {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: sticky;
  top: 0;
  /* width: 100%; */
  /* background: blue; */
  background: var(--color-bg);
  color: var(--color-text);
  opacity: 0.95;
  padding: 0.5rem 1.5rem;

  z-index: 500;
}
.resume-name {
  font-size: 2rem;
}
.container-section {
  padding: 1rem 1.5rem;
}
.btn {
  color: var(--color-text);
  border: none;
  padding: 0.8rem 1.2rem;
  width: 8rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;
}
.btn:hover {
  background-position: 0 0;
  color: var(--color-white);
  transition: all 0.2s ease-in;
}
.btn-contact {
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
}
.btn-cv {
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-secondary) 50%,
    var(--color-secondary)
  );
}
.btn-send {
  /* text-align: center; */
  width: 70%;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
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
@media screen and (max-width: 650px) {
  .btn-send {
    width: 100% !important;
  }
}
</style>
