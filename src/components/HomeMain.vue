<template>
  <div class="home__main">
    <div class="main__content">
      <div class="main__content-avatar">
        <img src="https://i.stack.imgur.com/QQcdg.png" alt="Avatar" />
      </div>
      <div class="main__content-resume">
        <h1 class="resume__title">
          !Hola! Soy <span class="title-name">Juan Carlos</span>, Desarrollador
          Web.
        </h1>
        <p class="resume__description">
          Ing. en Desarrollo y Gestión de Software, con actual enfoque en
          desarrollo web. Me mantengo en constante aprendizaje sobre nuevas
          tecnologías en el desarrollo.
        </p>
        <div class="resume__btns">
          <button type="button" class="btn btn-contact">Contáctame</button>
          <button type="button" class="btn btn-cv">Curriculum</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.home__main {
  width: 100%;
  min-height: 80vh;
  height: auto;
}
.home__main .main__content {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.main__content-avatar {
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__content-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main__content-resume {
  width: 50%;
  color: var(--color-text);
}
.resume__title {
  font-size: 3rem;
  line-height: 3.5rem;
}
.resume__title .title-name {
  color: blue;
}
.resume__description {
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5rem;
}
.resume__btns {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
}
.btn {
  background: blue;
  border: 1px solid blue !important;
  color: var(--permanent-white);
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
}
.btn:hover {
  transition: all 0.2s ease-in;
  background: transparent;
  color: blue;
}
.btn-cv {
  background: transparent;
  border: 1px solid red !important;
  color: red;
}
.btn-cv:hover {
  background: red;
  color: var(--permanent-white);
}
@media screen and (max-width: 1120px) {
  .resume__title {
    font-size: 2.3rem;
  }
}
@media screen and (max-width: 1000px) {
  .main__content {
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap: 1rem;
  }
  .main__content-avatar {
    width: 35%;
  }
  .resume__title {
    font-size: 2rem;
    text-align: center;
  }
  .resume__description {
    text-align: center;
  }
  .main__content-resume {
    width: 95%;
  }
}
@media screen and (max-width: 700px) {
  .main__content-avatar {
    width: 50%;
  }
  .resume__title {
    font-size: 1.8rem;
    text-align: center;
  }
  .resume__description {
    text-align: center;
  }
  .main__content-resume {
    width: 95%;
  }
  .resume__btns {
    justify-content: space-between;
  }
}
@media screen and (max-width: 500px) {
  .main__content-avatar {
    width: 80%;
  }
}
</style>
