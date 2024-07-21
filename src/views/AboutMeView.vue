<template>
  <div class="aboutMe__content">
    <!-- <div class="content-name"><h3>Sobre Mí</h3></div> -->
    <div class="content__information">
      <div class="information-text">
        <p>
          Soy Ing. en Desarrollo y Gestión de Software, actualmente me
          desenvuelvo como desarrollador web y tengo experiencia de 2 años en
          este ambito.
        </p>
        <p>
          Apasionado por la tecnología y el continúo aprendizaje, estoy en
          busqueda de retos y nuevas oportunidades que no solo me permitan
          crecer profesionalmente, sino también aportar valor a los proyectos
          que participo.
        </p>
        <p>
          Durante mi trayecto profesional, he sido parte de talentosos equipos
          en los que he contribuido en una variedad de proyectos. Mi experiencia
          abarca en desarrollo frontend, donde he trabajado con tecnologías como
          <span class="learned">HTML</span>, <span class="learned">CSS</span> y
          <span class="learned">JavaScript</span> , así como con frameworks como
          <span class="learned">Vue JS</span> . Además, he utilizado
          herramientas como <span class="learned">Tailwind</span> y
          <span class="learned">Bootstrap</span> para crear interfaces modernas
          y atractivas. En el backend he trabajado con
          <span class="learned">PHP</span> y <span class="learned">MySQL</span>,
          y he explorado las capacidades de
          <span class="learned">Firebase</span> para proyectos en tiempo real,
          como <span class="learned">Realtime Database</span> y
          <span class="learned">Firestore Database</span>, así como la
          implementación de sistemas de autenticación y la integración con
          proveedores de autenticación de terceros como Google y Facebook.
        </p>
        <p>
          Soy una persona adaptable y de aprendizaje rápido, cualidades que me
          permiten abordar nuevos desafíos con confianza. Actualmente en mi
          lista de tecnologías por aprender se encuentran
          <span class="learning">React JS</span>,
          <span class="learning">Node JS</span> ,
          <span class="learning">Material UI</span>, y
          <span class="learning">JAVA</span>.
        </p>
      </div>
      <div class="information-avatar">
        <AvatarComponent :avatar1="avatar" :animate="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AvatarComponent from "@/components/pure/AvatarComponent.vue";
import avatar from "@/assets/about-avatar.png";
</script>

<style scoped>
.aboutMe__content {
  padding: 0 1rem;
}

.content__information {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* padding: 1rem; */
}
.content__information .information-text {
  color: var(--color-text);
}
.content__information .information-text h4 {
  font-size: 1.5rem;
  line-height: 2.5rem;
}
.content__information .information-text p {
  /* font-size: 0.9rem; */
  line-height: 1.5rem;
  margin: 1rem 0;
  font-weight: normal !important;
  text-align: justify;
}
span.learned {
  color: var(--color-primary);
}
span.learning {
  color: var(--color-secondary);
}
.content__information .information-avatar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content__information .information-avatar img {
  width: 10rem;
  object-fit: cover;
  transform: translateY(-60px);
}
@media screen and (max-width: 1000px) {
  .content__information {
    /* display: flex !important;
    flex-direction: column !important;
    align-items: center;
    justify-content: center; */
    padding: 0 !important;
  }
  .content__information .information-text {
    /* width: 95%; */
  }
}
@media screen and (max-width: 800px) {
  .aboutMe__content {
    padding: 0;
  }
}
@media screen and (max-width: 700px) {
  .content__information .information-text {
    width: 100%;
  }
  .content__information {
    padding: 0 2rem;
  }
}
@media screen and (max-width: 550px) {
  .content__information .information-avatar {
    margin-top: 2rem;
    /* width: 90%; */
  }
}
</style>
