<template>
  <a
    v-if="download"
    :to="to"
    :download="download"
    class="btn"
    :class="className"
    >{{ props.text }}
  </a>
  <router-link to="contact" class="btn" v-if="!download" :class="className">{{
    props.text
  }}</router-link>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  text: { type: String, required: true },
  className: { type: String, required: true },
  to: { type: String, required: false },
  download: { type: String, required: false },
});
</script>
<style>
.btn {
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
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;
}
.btn:hover {
  background-position: 0 0;
  color: var(--color-white);
  transition: all 0.2s ease-in;
}
.btn-contact {
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
}
.btn-cv {
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-secondary) 50%,
    var(--color-secondary)
  );
}
.btn-send {
  width: 70%;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
}
@media screen and (max-width: 650px) {
  .btn-send {
    width: 100% !important;
  }
}
</style>
