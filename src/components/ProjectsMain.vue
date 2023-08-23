<template>
  <div class="projects">
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
          <div class="card__details">
            <div class="card__detail-title">
              <h3>Lorem ipsum dolor sit.</h3>
            </div>
            <div class="card__detail-options">
              <div class="option"><a href="/">GitHub</a></div>
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
          <div class="card__details">
            <div class="card__detail-title">
              <h3>Lorem ipsum dolor sit.</h3>
            </div>
            <div class="card__detail-options">
              <div class="option"><a href="/">GitHub</a></div>
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
  border-left: 0.3rem solid var(--color-text);
  padding-left: 0.8rem;
  /* position: relative; */
}

.projects .projects__content .content-name h3 {
  font-size: 2.5rem;
  /* background-color: aqua; */
  color: var(--color-text);
}
.content__cards {
  background: aqua;
  height: auto;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-radius: 0.3rem !important;
}
.card .card__main img {
  border-radius: 0.3rem;
  width: 100%;
}
.card .card__main .main-text {
  border-radius: 0.3rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  width: 100%;
  height: 100%;
  transform: translateX(200%);
  transition: transform 0.3s ease-in;
}
.card:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in;
}
.card .card__main:hover .main-text {
  transform: translateX(0);
  transition: transform 0.3s ease-in;
}
.card .card__main .main-text p {
  margin: 0.5rem;
}

.content__information .information-text {
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
