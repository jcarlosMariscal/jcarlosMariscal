<template>
  <div class="projects" id="proyectos">
    <div class="projects__content">
      <div class="content-name"><h3>Proyectos</h3></div>
      <div class="content__cards">
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
          :class="{ show: card.isActive }"
        >
          <div class="card__main">
            <img :src="require('../assets/' + card.image)" alt="" />
            <div class="main-btn" v-if="!card.developing">
              <button @click="toggleContent(card)" class="btn-arrow">
                <i class="bx bx-left-arrow-circle"></i>
              </button>
            </div>
            <div class="developing" v-if="card.developing">
              <i class="bx bx-cog"></i>
              <div class="developing-text">
                En desarrollo <span class="dot">.</span
                ><span class="dot">.</span><span class="dot">.</span>
              </div>
            </div>
            <!-- <div class="card__main-img"></div> -->
            <div class="main-text">
              <p class="text-date">{{ card.date }}</p>
              <p class="text-description">
                {{ card.description }}
              </p>
              <div class="text-technologies">
                <div
                  class="technologie"
                  v-for="(tech, i) in card.technologies"
                  :key="i"
                  :title="tech.name"
                >
                  <p class="icon" v-html="tech.icon"></p>
                  <p class="name">{{ tech.name }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card__details">
            <div class="card__detail-title">
              <h3>{{ card.title }}</h3>
            </div>
            <div class="card__detail-options">
              <div class="option" v-for="(link, i) in card.links" :key="i">
                <a :href="link.url" :title="link.name" v-html="link.icon"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import data from "@/assets/data/projects.json";

interface Card {
  title: string;
  description: string;
  image: string;
  date: string;
  links: Array<{ name: string; url: string; icon: string }>;
  technologies: Array<{ name: string; icon: string }>;
  isActive: boolean;
  developing: boolean;
}
console.log(data);

const cards: Ref<Array<Card>> = ref([]);

cards.value = data;
const toggleContent = (card: Card) => {
  card.isActive = !card.isActive;
};
</script>

<style scoped>
.projects {
  width: 100%;
  min-height: 50vh;
  height: auto;
  padding-top: 5rem;
  position: relative;
  margin-bottom: 3rem;
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
  width: 500px;
  height: auto;
  overflow: hidden;
  transition: transform 0.2s ease-in;
}
.card .card__main {
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 0.3rem;
}
.card .card__main img {
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}
.card .card__main .main-btn {
  position: absolute;
  bottom: 0.5rem;
  right: 0.3rem;
  z-index: 100;
}
.card .card__main .main-btn button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  border: none;
  /* transition: all 0.1s ease-in; */
  background: var(--permanent-white);
}
.card .card__main .main-btn button i {
  background: var(--gradient-background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card .card__main .main-btn button:hover {
  transition: all 0.3s ease-in;
  background: var(--gradient-background);
  cursor: pointer;
}
.card .card__main .main-btn button:hover i {
  background: transparent;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  color: var(--permanent-white);
}

.btn-arrow {
  animation: arrow-rotate 0.8s both !important;
}
@keyframes arrow-rotate {
  0% {
    transform: rotate(540deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes arrow-rotate-reverse {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(540deg);
  }
}
.developing {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  color: var(--permanent-white);
}
.developing i {
  font-size: 3rem;
  animation: cdot 2s infinite linear;
}
@keyframes cdot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.developing .developing-text {
  /* margin: 0 auto; */
  /* width: 120px; */
  /* background: aqua; */
  /* width: 100%; */
  /* text-align: center; */
  font-size: 1rem;
}
.dot {
  font-size: 2rem;
  color: transparent;
  display: inline-block;
  animation: bouncing 700ms infinite ease-out forwards;
  animation-fill-mode: forwards;
}
.dot:nth-child(2) {
  animation-delay: 125ms;
}
.dot:nth-child(3) {
  animation-delay: 250ms;
}
@keyframes bouncing {
  0% {
    /* transform: none; */
    opacity: 0;
    visibility: hidden;
    display: none;
    /* color: transparent; */
  }
  33% {
    transform: translateY(-0.3rem);
  }
  66% {
    /* transform: none; */
    opacity: 1;
    visibility: visible;
    display: inline-block;
    color: var(--permanent-white);
  }
}

.card .card__main .main-text {
  border-radius: 0.3rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0px !important;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.4); */
  box-shadow: var(--color-secondary) 0px 12px 10px -10px;
  border: 1px solid var(--color-secondary);
  background: var(--color-bg);
  color: var(--color-text);
  /* width: 100%; */
  /* height: 98%; */
  /* border-bottom: 1px solid var(--color-text); */
  transform: translateX(200%);
  transition: transform 0.3s ease-in;
}
.card .card__main .main-text p {
  margin: 0.5rem;
}
.card .card__main .main-text .text-date {
  /* background: aqua; */
  padding: 0.3rem 0.3rem;
  text-align: right;
  font-size: 1rem;
}
.card .card__main .main-text .text-description {
  /* background: purple; */
  padding: 0 0.3rem;
  text-align: justify;
  font-size: 0.95rem;
  line-height: 1.3rem;
}
.card .card__main .main-text .text-technologies {
  margin: 0 0.5rem;
  margin-top: -0.1rem;
  /* background: pink; */
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  /* gap: rem; */
  overflow-x: scroll;
  overflow-y: hidden;
  /* background: var(--navbar-bg); */
}
.card .card__main .main-text .text-technologies::-webkit-scrollbar {
  width: 5px; /* Cambia el ancho de la barra de desplazamiento */
}
.card .card__main .main-text .text-technologies::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

.card .card__main .main-text .text-technologies::-webkit-scrollbar-track {
  background: transparent;
  opacity: 0.1 !important;
}

.card .card__main .main-text .text-technologies::-webkit-scrollbar-thumb {
  background: var(--color-text);
  border-radius: 5px;
}

.card .card__main .main-text .text-technologies::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-secondary);
}
.card .card__main .main-text .text-technologies .technologie {
  font-size: 2rem;
  color: var(--color-text);
  /* background-color: pink; */
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
}
.technologie .icon {
  position: relative;
  /* transition: all; */
  /* background-color: aqua !important; */
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1 !important;
}
.technologie .name {
  margin-top: -0.4rem !important;
  font-size: 0.6rem;
  /* background-color: orange; */
}

/* .technologie.vue:hover {
  filter: none;
} */

.card.show {
  /* box-shadow: var(--color-secondary) 0px 1px 2px 0px; */

  transition: box-shadow 0.3s ease-in;
  /* animation: box-sh 1s infinite alternate; */
}
@keyframes box-sh {
  0% {
    box-shadow: var(--color-secondary) 0px 1px 4px,
      var(--color-primary) 0px 2px 8px;
  }
  100% {
    box-shadow: var(--color-primary) 0px 1px 4px,
      var(--color-secondary) 0px 2px 8px;
  }
}
.card.show .card__main {
  /* transform: scale(); */
  transition: transform 0.2s ease-in;
}
.card.show .card__main .main-text {
  transform: translateX(0);
  transition: transform 0.3s ease-in;
}
.card.show .card__main .main-btn .btn-arrow {
  animation: arrow-rotate-reverse 0.8s both !important;
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
  transition: all 0.2s ease-in;
}
.card__details .card__detail-options .option a:hover {
  background: var(--gradient-background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in;
}
@media screen and (max-width: 1150px) {
  .card {
    /* width: 40%; */
    width: 400px;
    /* height: auto;
  overflow: hidden;
  transition: transform 0.2s ease-in; */
  }
  .card .card__main {
    height: 250px;
  }
}
@media screen and (max-width: 940px) {
  .card {
    width: 60%;
    /* height: auto;
  overflow: hidden;
  transition: transform 0.2s ease-in; */
  }
  .card .card__main {
    height: 300px;
  }
}
@media screen and (max-width: 700px) {
  .card {
    width: 80%;
    /* height: auto;
  overflow: hidden;
  transition: transform 0.2s ease-in; */
  }
  .card .card__main {
    height: 300px;
  }
}
@media screen and (max-width: 590px) {
  .card {
    width: 100%;
  }
  .card .card__main {
    height: 250px;
  }
  .card .card__main .main-text .text-date,
  .card .card__main .main-text .text-description {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 400px) {
  .card .card__main {
    height: 300px;
  }
}
</style>
