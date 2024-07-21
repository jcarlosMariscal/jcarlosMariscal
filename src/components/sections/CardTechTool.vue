<template>
  <div class="card" :class="variant">
    <img :src="prop.icon" alt="" />
    <p>{{ prop.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const prop = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 100px;
  /* width: 100%; */
  height: 75px;
  /* padding: 0 0.2rem; */
  transition: transform 0.2s ease-in;
  background: var(--color-bg-second);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.card.dev {
  animation: cardDev 5s infinite alternate;
}
.card.tool {
  animation: cardTool 5s infinite alternate;
}
@keyframes cardDev {
  0% {
    border: 1px solid transparent;
  }
  50% {
    border: 1px solid var(--color-primary);
  }
  100% {
    border: 1px solid transparent;
  }
}
@keyframes cardTool {
  0% {
    border: 1px solid transparent;
  }
  50% {
    border: 1px solid var(--color-secondary);
  }
  100% {
    border: 1px solid transparent;
  }
}
@media screen and (max-width: 540px) {
  .card {
    width: 100px;
    flex-direction: column;
  }
}
</style>
