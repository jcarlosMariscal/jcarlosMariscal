<template>
  <NavBarMain />
  <div class="container">
    <router-view />
  </div>
  <FooterMain />
</template>
<script setup lang="ts">
import NavBarMain from "./components/NavBarMain.vue";
import FooterMain from "./components/FooterMain.vue";
</script>
<style>
@import "assets/css/theme.css";
@import "assets/css/style.css";
.container {
  height: auto;
  margin: 1rem 8rem;
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
