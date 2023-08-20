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
          <button type="button" class="btn btn-contact btn-anim">
            Contáctame
          </button>
          <button type="button" class="btn btn-cv btn-anim">Curriculum</button>
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
.resume__btns {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
}
.btn {
  background: transparent;
  border: 1px solid var(--color-primary) !important;
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
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;
}
.btn:hover {
  background-position: 0 0;
  /* color: #333; */
  color: var(--permanent-white);
  transition: all 0.2s ease-in;
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
.btn-anim {
  /* text-align: center; */
  /* padding: 10px 20px; */
  /* text-decoration: none; */
  /* color: #000; */
  /* font-weight: bold; */
  /* -webkit-border-radius: 10px; */
  /* -moz-border-radius: 10px 0; */
  /* border-radius: 10px 0; */
  /* margin-right: 20px; */
}

/* Blue Background */
.btn-anim {
  /* text-shadow: 0px 1px 0px var(--color-primary); */
  /* background-image: -webkit-linear-gradient(top, #87e0fd, #53cbf1); */
  /* background-image: -moz-linear-gradient(top, #87e0fd, #53cbf1); */
  /* background-image: -o-linear-gradient(top, #87e0fd, #53cbf1); */
  /* background-image: linear-gradient(to bottom, #87e0fd, #53cbf1); */
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
</style>
