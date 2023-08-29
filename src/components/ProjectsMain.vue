<template>
  <div class="projects" id="proyectos">
    <div class="projects__content">
      <div class="content-name"><h3>Proyectos</h3></div>
      <div class="content__cards">
        <div class="card">
          <div class="card__main">
            <img
              src="https://portfolio-miguelaeb.vercel.app/images/AluraGeek__preview.png"
              alt=""
            />
            <!-- <div class="card__main-img"></div> -->
            <div class="main-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                ex?
              </p>
            </div>
          </div>
          <!-- <div class="card__technologies">
            <p class="technologie vue"><i class="fa-brands fa-vuejs"></i></p>
            <p class="technologie css3">
              <i class="fa-brands fa-css3-alt"></i>
            </p>
            <p class="technologie js"><i class="fa-brands fa-square-js"></i></p>
          </div> -->
          <div class="card__details">
            <div class="card__detail-title">
              <h3>Lorem ipsum dolor sit.</h3>
            </div>
            <div class="card__detail-options">
              <div class="option">
                <a href="/"><i class="fa-brands fa-github"></i></a>
              </div>
              <div class="option">
                <a href="/"
                  ><i class="fa-solid fa-arrow-up-right-from-square"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__main">
            <img
              src="https://portfolio-miguelaeb.vercel.app/images/blogr_project.png"
              alt=""
            />
            <!-- <div class="card__main-img"></div> -->
            <div class="main-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                ex?
              </p>
            </div>
          </div>
          <!-- <div class="card__technologies">
            <p class="technologie vue">
              <img
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vue_icon_130078.png"
                alt=""
                width="30"
              />
            </p>
            <p class="technologie firebase"><i class="bx bxl-firebase"></i></p>
            <p class="technologie html5"><i class="fa-brands fa-html5"></i></p>
            <p class="technologie css3">
              <i class="fa-brands fa-css3-alt"></i>
            </p>
            <p class="technologie js"><i class="fa-brands fa-square-js"></i></p>
          </div> -->
          <div class="card__details">
            <div class="card__detail-title">
              <h3>Lorem ipsum dolor sit.</h3>
            </div>
            <div class="card__detail-options">
              <div class="option">
                <a href="/"><i class="fa-brands fa-github"></i></a>
              </div>
              <div class="option">
                <a href="/"
                  ><i class="fa-solid fa-arrow-up-right-from-square"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.projects {
  width: 100%;
  min-height: 80vh;
  height: auto;
  padding-top: 5rem;
  position: relative;
}
.projects::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  opacity: 0.3;
}
.projects__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background: red !important; */
}
.projects .projects__content .content-name {
  /* background-color: purple; */
  padding: 0.5rem 0;
  border-left: 0.4rem solid var(--color-text);
  padding-left: 0.5rem;
  /* position: relative; */
}

.projects .projects__content .content-name h3 {
  font-size: 1.8rem;
  /* background-color: aqua; */
  color: var(--color-text);
}
.content__cards {
  /* background: aqua; */
  height: auto;
  padding: 1rem 0;
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}
.card {
  width: 400px;
  height: auto;
  overflow: hidden;
  transition: transform 0.2s ease-in;
}
.card .card__main {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
}
.card .card__main img {
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
}
.card .card__main .main-text {
  border-radius: 0.3rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 3px !important;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  /* width: 100%; */
  /* height: 98%; */
  transform: translateX(200%);
  transition: transform 0.3s ease-in;
}
.card .card__main:hover {
  /* transform: scale(); */
  transition: transform 0.2s ease-in;
}
.card .card__main:hover .main-text {
  transform: translateX(0);
  transition: transform 0.3s ease-in;
}
.card .card__main .main-text p {
  margin: 0.5rem;
}
.card__technologies {
  margin: 0.3rem 0;
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  /* background: var(--navbar-bg); */
}
.card__technologies .technologie {
  font-size: 1.8rem;
  color: var(--color-text);
}
.technologie {
  filter: grayscale(100%);
  /* transform: scale(1); */
  animation: imageBrightnessChange 1s infinite alternate;
  position: relative;
  /* transition: all; */
  /* background-color: aqua; */
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1 !important;
}
.technologie:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 1px;
  /* bor */
  /* background: transparent; */
  border: 1px solid var(--color-text);
  border-radius: 50%;
  /* Ajusta el tamaño del borde con base en la escala inversa */
  /* border-width: 1px / 80; */
  z-index: -1 !important;
  /* animation: imageBrightnessChange2 3s infinite alternate; */
  /* animation-delay: 2s; */
  /* margin: 100px; */
  /* display: block; */
  /* width: 16px; */
  /* height: 16px; */
  /* border-radius: 100%; */
  /* background: yellow; */
  /* cursor: pointer; */
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 2s infinite;
  /* opacity: 0; */
  /* width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: red !important;
  animation: shadowAnimation 2s infinite alternate; */
}
@keyframes shadowAnimation {
  0% {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
}

.technologie:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 1px;
  /* bor */
  background: transparent;
  border: 1px solid var(--color-text);
  border-radius: 50%;
  /* Ajusta el tamaño del borde con base en la escala inversa */
  border-width: 1px / 80;
  z-index: -1 !important;
  animation: imageBrightnessChange3 3.5s infinite alternate;
  animation-delay: 2s;
}
/* .technologie.vue:hover {
  filter: none;
} */
@keyframes imageBrightnessChange {
  from {
    filter: grayscale(100%); /* Brillo inicial (blanco y negro) */
    transform: scale(1);
  }
  to {
    filter: grayscale(0%); /* Brillo final (imagen a color) */
    transform: scale(1.15);
  }
}
@keyframes imageBrightnessChange2 {
  0% {
    width: 1px;
    height: 1px;
    opacity: 0.2;
  }
  /* 25% {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 1;
  }
  50% {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 1;
  }
  75% {
    width: 2rem;
    height: 2rem;
    opacity: 1;
  } */
  50% {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 1;
  }
  100% {
    width: 1px;
    height: 1px;
    opacity: 0;
  }
}
@keyframes imageBrightnessChange3 {
  0% {
    width: 1px;
    height: 1px;
    opacity: 0.2;
  }
  /* 25% {
    width: 2rem;
    height: 2rem;
    opacity: 1;
  }
  50% {
    width: 2.3rem;
    height: 2.3rem;
    opacity: 1;
  }
  75% {
    width: 1.6rem;
    height: 1.6rem;
    opacity: 1;
  } */
  50% {
    width: 2rem;
    height: 2rem;
    opacity: 1;
  }
  100% {
    width: 1px;
    height: 1px;
    opacity: 0;
  }
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    /* opacity: 0; */
  }
  70% {
    -moz-box-shadow: 0 0 0 2rem rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 2rem rgba(204, 169, 44, 0);
    /* opacity: 1; */
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    /* opacity: 0; */
  }
}
.card__details {
  /* background: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
.card__details .card__detail-title {
  color: var(--color-text);
  margin: 0 0.5rem;
}
.card__details .card__detail-options {
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.card__details .card__detail-options .option a {
  color: var(--color-text);
  font-size: 1.3rem;
}

@media screen and (max-width: 1000px) {
  .content__information {
    /* height: 100%; */
    display: flex !important;
    flex-direction: column !important;
    align-items: center;
    justify-content: center;
    /* gap: 1rem; */
    /* background: red !important; */
  }
}
@media screen and (max-width: 700px) {
  .content__information {
    /* width: 100%; */
    padding: 0 2rem;
  }
}
</style>
