<template>
  <div class="projects__content">
    <div class="content__cards">
      <!-- <ProjectsComponent -->
      <!-- <CardProject -->
      <CardProject
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        @handleClick="toggleContent"
        :class="{ show: card.isActive }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardProject from "@/components/ProjectsComponents/CardProject.vue";
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

const cards: Ref<Array<Card>> = ref([]);

// console.log(cards);

cards.value = data;
const toggleContent = (card: Card) => {
  console.log("recibiendo");

  card.isActive = !card.isActive;
};
</script>

<style scoped>
.projects__content {
  /* padding: 1rem; */
  display: flex;
  justify-content: center;
}
.content__cards {
  /* background: aqua; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
@media screen and (max-width: 1300px) {
  .content__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 600px) {
  .content__cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
<!-- 469 -->
