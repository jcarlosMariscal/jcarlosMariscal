<template>
  <div class="main__content">
    <div class="main__content-avatar">
      <img
        class="home-avatar"
        :src="avatar.url"
        alt="{{ avatar.name }}"
        @mouseenter="changeAvatar()"
        @mouseleave="resetAvatar()"
      />
    </div>
    <div class="main__content-resume">
      <h1 class="resume__title">
        !Hola! Soy <span class="title-name">Juan Carlos</span>, Desarrollador
        Web.
      </h1>
      <p class="resume__description">
        Soy Ing. en Desarrollo y Gestión de Software, con actual enfoque en
        desarrollo web. Me apasiona la tecnología y el desarrollo, y estoy
        constantemente aprendiendo sobre las últimas tendencias. Me interesa
        contribuir en proyectos innovadores y seguir creciendo profesionalmente.
      </p>
      <SocialNetworks />
      <div class="resume__btns">
        <LinkComponent text="Contáctame" className="btn-contact" />
        <LinkComponent
          text="Curriculum"
          to="/CV_CarlosMariscal.pdf"
          download="CV_CarlosMariscal.pdf"
          className="btn-cv"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LinkComponent from "@/components/pure/LinkComponent.vue";
import SocialNetworks from "@/components/HomeComponents/SocialNetworks.vue";

const avatar = ref({
  name: "Avatar 1",
  url: require("../assets/greeting-avatar.png"),
});
const changeAvatar = () => {
  avatar.value.url = require("../assets/greeting-avatar2.png");
};
const resetAvatar = () => {
  avatar.value.url = require("../assets/greeting-avatar.png");
};
</script>

<style scoped lang="scss">
.main__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}
.main__content-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-second);
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  .home-avatar {
    transform: rotateY(180deg);
    width: 8rem;
    height: auto;
    object-fit: cover;
  }
}
.main__content-resume {
  color: var(--color-text);
}
.resume__title {
  font-size: 2.5rem;
  line-height: 3rem;
  .title-name {
    font-weight: bold;
    color: var(--color-secondary);
  }
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
@media screen and (max-width: 1120px) {
  .resume__title {
    font-size: 2.3rem;
  }
}
@media screen and (max-width: 1000px) {
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
  .resume__btns {
    justify-content: space-between;
  }
}
@media screen and (max-width: 700px) {
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
@media screen and (max-width: 400px) {
  .resume__btns {
    flex-direction: column;
  }
}
</style>
<!-- 328 -->
