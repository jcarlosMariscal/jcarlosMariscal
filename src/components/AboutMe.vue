<template>
  <div class="aboutMe" id="sobre-mi">
    <div class="aboutMe__content">
      <div class="content-name"><h3>Sobre Mí</h3></div>
      <div class="content__information">
        <div class="information-text">
          <h4>Hola, soy Juan Carlos. Encantado de conocerte.</h4>
          <p>
            Soy Ing. en Desarrollo y Gestión de Software, actualmente me
            desenvuelvo como desarrollador web y tengo experiencia de 2 años en
            este ambito.
          </p>
          <p>
            Apasionado por la tecnología y el continúo aprendizaje, estoy en
            busqueda de retos y nuevas oportunidades que me permitan crecer
            personal y profesionalmente.
          </p>
          <p>
            En anteriores trabajos he formado parte de grandes equipos donde he
            participado en diferentes proyectos, en donde ademas de aplicar mis
            conocimientos, también he adquirido muy buena experiencia en
            desarrollo web, las cuáles incluyen
            <span class="learned">HTML</span>,
            <span class="learned">CSS</span> ,
            <span class="learned">JavaScript</span> , marcos como
            <span class="learned">Tailwind</span> y
            <span class="learned">Bootstrap</span>, librerías como
            <span class="learned">Vue JS</span>. En el backend he trabajado con
            <span class="learned">PHP</span>,
            <span class="learned">MySQL</span> y
            <span class="learned">Firebase</span>.
          </p>
          <p>
            Soy una persona adaptable y que aprende rápido, por lo que otros
            tecnologías que me interesa aprender es
            <span class="learning">React JS</span>,
            <span class="learning">Node JS</span> ,
            <span class="learning">Material UI</span>, y
            <span class="learning">JAVA</span>.
          </p>
        </div>
        <div class="information-avatar">
          <img src="../assets/about-avatar.webp" alt="Avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.aboutMe {
  width: 100%;
  min-height: 80vh;
  height: auto;
  /* background: pink; */
  padding-top: 5rem;
  position: relative;
}
.aboutMe::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  opacity: 0.3;
}
.aboutMe__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background: red !important; */
}
.aboutMe .aboutMe__content .content-name {
  /* background-color: purple; */
  padding: 0.5rem 0;
  border-left: 0.4rem solid var(--color-text);
  padding-left: 0.5rem;
  /* position: relative; */
}

.aboutMe .aboutMe__content .content-name h3 {
  font-size: 1.8rem;
  /* background-color: aqua; */
  color: var(--color-text);
}
.content__information {
  /* background: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.content__information .information-text {
  width: 60%;
  color: var(--color-text);
}
.content__information .information-text h4 {
  font-size: 1.5rem;
  line-height: 2.5rem;
}
.content__information .information-text p {
  font-size: 0.9rem;
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
  /* background: aqua; */
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content__information .information-avatar img {
  /* background: purple; */
  width: 80%;
  height: 100%;
  object-fit: cover;
  transform: translateY(-60px);
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
