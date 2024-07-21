<template>
  <div class="card">
    <div class="card__main">
      <img :src="require('../../assets/' + prop.card.image)" alt="" />
      <div class="developing" v-if="prop.card.developing">
        <i class="bx bx-cog"></i>
        <div class="developing-text">
          En desarrollo <span class="dot">.</span><span class="dot">.</span
          ><span class="dot">.</span>
        </div>
      </div>
    </div>
    <div class="card__details">
      <div class="card__detail-title">
        <h3>{{ prop.card.title }}</h3>
      </div>
      <div class="card__detail-options">
        <div class="option" v-for="(link, i) in prop.card.links" :key="i">
          <a
            :href="link.url"
            :title="link.name"
            v-html="link.icon"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
interface ICard {
  title: string;
  description: string;
  image: string;
  date: string;
  links: Array<{ name: string; url: string; icon: string }>;
  technologies: Array<{ name: string; icon: string }>;
  isActive: boolean;
  developing: boolean;
}
const prop = defineProps({
  card: {
    type: Object as () => ICard,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 100% !important;
  transition: transform 0.2s ease-in;
}
.card .card__main {
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: 0.3rem;
}
.card .card__main img {
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
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
  color: var(--color-white);
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
    opacity: 0;
    visibility: hidden;
    display: none;
  }
  33% {
    transform: translateY(-0.3rem);
  }
  66% {
    opacity: 1;
    visibility: visible;
    display: inline-block;
    color: var(--color-white);
  }
}
.card.show .card__main {
  /* transform: scale(); */
  transition: transform 0.2s ease-in;
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
  color: var(--color-primary);
  transition: all 0.1s ease-in;
}
</style>
<!-- 421 -->
