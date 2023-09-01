<template>
  <div class="technologies" id="tecnologias">
    <div class="technologies__content">
      <div class="content-name"><h3>Tecnologías</h3></div>
      <div class="content__cards">
        <!-- <h5>Desarrollo</h5> -->
        <div class="cards">
          <div class="card dev">
            <img src="../assets/tech-icons/html5.png" alt="" />
            <p>HTML</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/css3.png" alt="" />
            <p>CSS</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/sass.png" alt="" />
            <p>SASS</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/js.png" alt="" />
            <p>JavaScript</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/vue.png" alt="" />
            <p>Vue JS</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/react.png" alt="" />
            <p>React JS</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/tailwind.png" alt="" />
            <p>Tailwind</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/bootstrap.png" alt="" />
            <p>Bootstrap</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/php.png" alt="" />
            <p>PHP</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/sql.png" alt="" />
            <p>SQL</p>
          </div>
          <div class="card dev">
            <img src="../assets/tech-icons/node.png" alt="" />
            <p>Node JS</p>
          </div>
        </div>
        <div class="cards">
          <div class="card tool">
            <img src="../assets/tech-icons/github.png" alt="" />
            <p>GitHub</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/git.png" alt="" />
            <p>Git</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/gitlab.png" alt="" />
            <p>GitLab</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/xd.png" alt="" />
            <p>Adobe XD</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/firebase.png" alt="" />
            <p>Firebase</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/vscode.png" alt="" />
            <p>VS Code</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/slack.png" alt="" />
            <p>Slack</p>
          </div>
          <div class="card tool">
            <img src="../assets/tech-icons/bitbucket.png" alt="" />
            <p>Bitbucket</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.technologies {
  width: 100%;
  min-height: 50vh;
  height: auto;
  padding-top: 5rem;
  position: relative;
  /* background-color: aqua; */
}
.technologies::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  opacity: 0.3;
}
.technologies__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background: red !important; */
}
.technologies .technologies__content .content-name {
  /* background-color: purple; */
  padding: 0.5rem 0;
  border-left: 0.4rem solid var(--color-text);
  padding-left: 0.5rem;
  /* position: relative; */
}

.technologies .technologies__content .content-name h3 {
  font-size: 1.8rem;
  /* background-color: aqua; */
  color: var(--color-text);
}
/* .content__cards { */
/* text-align: center !important;
  background: aqua;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important; */
/* } */
.cards {
  /* background: red; */
  color: var(--color-text);
  height: auto;
  padding: 1rem 0;
  width: 100% !important;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.card {
  width: 200px;
  height: 70px;
  overflow: hidden;
  transition: transform 0.2s ease-in;
  /* background: pink !important; */
  background: var(--color-bg-second);
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.card.dev {
  /* border: 1px solid var(--color-primary); */
  /* transition: animation 0.5s ease-in; */
  animation: cardDev 5s infinite alternate;
}
.card.tool {
  /* border: 1px solid var(--color-secondary); */
  animation: cardDev2 5s infinite alternate;
}
@keyframes cardDev {
  0% {
    border: 1px solid transparent;
  }
  50% {
    border: 1px solid var(--color-primary);
    /* box-shadow: var(--color-primary) 0px 1px 2px 0px inset; */
  }
  100% {
    border: 1px solid transparent;
  }
}
@keyframes cardDev2 {
  0% {
    border: 1px solid transparent;
  }
  50% {
    border: 1px solid var(--color-secondary);
    /* box-shadow: var(--color-secondary) 0px 1px 2px 0px inset; */
  }
  100% {
    border: 1px solid transparent;
  }
}
.card .card__main {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
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

@media screen and (max-width: 440px) {
  .card {
    width: 100%;
  }
}
</style>
