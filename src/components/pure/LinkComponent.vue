<template>
  <a
    href="#contacto"
    :to="to"
    :download="download"
    class="btn btn-anim"
    :class="className"
    >{{ props.text }}
  </a>
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
