<template>
  <div class="contact__content">
    <div class="content-main">
      <div class="contact__form">
        <FormComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormComponent from "@/components/ContactComponents/FormComponent.vue";
</script>

<style scoped>
.contact__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.content-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* CONTACT */
.contact__form {
  color: var(--color-text);
  width: 70%;
  margin: 1px auto;
  padding: 0 0.5rem;
}

@media screen and (max-width: 440px) {
  .contact__form {
    width: 100% !important;
  }
}
</style>
