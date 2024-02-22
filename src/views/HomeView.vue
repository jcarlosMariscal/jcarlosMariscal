<template>
  <div class="home__main" id="inicio">
    <div class="main__content">
      <div
        class="main__content-avatar"
        :class="{ hover: avatarHover, normal: !avatarHover }"
      >
        <img
          class="home-avatar"
          :class="{ hover: avatarHover, normal: !avatarHover }"
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
          contribuir en proyectos innovadores y seguir creciendo
          profesionalmente.
        </p>
        <div class="resume__social">
          <SocialNetworks />
        </div>
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
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import LinkComponent from "@/components/pure/LinkComponent.vue";
import SocialNetworks from "@/components/HomeComponents/SocialNetworks.vue";

const avatarHover: Ref<boolean> = ref(false);
const avatar = ref({
  name: "Avatar 1",
  url: require("../assets/greeting-avatar.webp"),
});
const changeAvatar = () => {
  avatar.value.url = require("../assets/greeting-avatar2.webp");
  avatarHover.value = true;
};
const resetAvatar = () => {
  avatar.value.url = require("../assets/greeting-avatar.webp");
  avatarHover.value = false;
};
</script>

<style scoped>
.home__main {
  width: 100%;
  min-height: 70vh;
  height: auto;
  /* background: aquamarine; */
  display: flex;
  align-items: center;
}
.home__main .main__content {
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 1rem;
  /* background-color: aqua; */
}
.main__content-avatar {
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 5s ease-in;
  /* background: purple; */
}
.main__content-avatar .home-avatar {
  /* background-color: aqua; */
  transform: rotateY(180deg);
  width: 80%;
  height: 100%;
  object-fit: cover;
}
.main__content-avatar .home-avatar.hover {
  /* transform: ; */
  /* transition: all 0.00000001s ease-in; */
  transform: scale(1.2) translateY(-30px) rotateY(180deg);
}
.home-avatar:hover {
  /* transition: all 5s ease-in; */
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
  /* color: blue; */
  font-weight: bold !important;
  background: var(--gradient-background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.resume__description {
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5rem;
}
.resume__social {
  margin: 1.5rem 0;
}
.resume__btns {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
}

.btn-cv {
  border: 1px solid var(--color-secondary) !important;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-secondary) 50%,
    var(--color-secondary)
  );
}
/* .btn-cv:hover {
  background: var(--color-secondary);
  color: var(--permanent-white);
} */
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
  .resume__btns {
    justify-content: space-between;
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
/* Blue Shadow */
@-moz-keyframes blue {
  0%,
  100% {
    -moz-box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7),
      inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7),
      inset 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  50% {
    -moz-box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

@-webkit-keyframes blue {
  0%,
  100% {
    -webkit-box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7),
      inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7),
      inset 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  50% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

@-o-keyframes blue {
  0%,
  100% {
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7),
      inset 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

@keyframes primary {
  0%,
  100% {
    box-shadow: 0px 0px 4px 1px var(--color-primary),
      inset 0px 0px 1px var(--color-secondary);
  }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
}
@keyframes secondary {
  0%,
  100% {
    box-shadow: 0px 0px 4px 1px var(--color-secondary),
      inset 0px 0px 1px var(--color-primary);
  }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0),
      inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
}
/* Button */

/* Blue Background */
.btn-anim {
  -webkit-animation: primary 3s infinite;
  -moz-animation: primary 3s infinite;
  -o-animation: primary 3s infinite;
  animation: primary 3s infinite;
}
.btn-anim.btn-cv {
  /* text-shadow: 0px 1px 0px var(--color-secondary); */
  -webkit-animation: secondary 3s infinite;
  -moz-animation: secondary 3s infinite;
  -o-animation: secondary 3s infinite;
  animation: secondary 3s infinite;
}
@media screen and (max-width: 400px) {
  .resume__btns {
    flex-direction: column;
  }
  .resume__btns .btn {
    width: 100%;
  }
}
</style>
<!-- 328 -->
