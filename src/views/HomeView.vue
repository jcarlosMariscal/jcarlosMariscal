<template>
  <div class="home__main">
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
.home__main {
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  // flex-direction: row;
  // flex-direction: column;
  // background: aqua;
  align-items: center;
  .main__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
.main__content-avatar {
  // border-radius: 100%;
  // width: 10;
  // height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3e3f3f;
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  // border: 1px solid white;
  // transition: all 5s ease-in;
  .home-avatar {
    transform: rotateY(180deg);
    width: 8rem;
    height: auto;
    object-fit: cover;
    // background-color: pink;
    // &.hover {
    //   transform: scale(1.2) translateY(-30px) rotateY(180deg);
    // }
  }
}
.main__content-resume {
  width: 75%;
  color: var(--color-text);
}

.resume__title {
  font-size: 3rem;
  line-height: 3.5rem;
  .title-name {
    font-weight: bold !important;
    background: var(--gradient-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
    &-avatar {
      width: 35%;
    }
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

@media screen and (max-width: 400px) {
  .resume__btns {
    flex-direction: column;

    .btn {
      width: 100%;
    }
  }
}
</style>
<!-- 328 -->
