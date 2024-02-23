<template>
  <div class="content-avatar">
    <img class="home-avatar" :src="avatar.url" alt="{{ avatar.name }}" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onUnmounted } from "vue";
const props = defineProps({
  avatar1: {
    type: String,
    required: true,
  },
  avatar2: { type: String, required: false },
  animate: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const avatar = ref({
  name: "Avatar 1",
  url: props.avatar1,
});
if (props.animate) {
  const avatar2 = props.avatar2 === undefined ? props.avatar1 : props.avatar2;

  const switchAvatar = () => {
    avatar.value.url =
      avatar.value.url === props.avatar1 ? avatar2 : props.avatar1;
    timer = setTimeout(switchAvatar, 1500);
  };

  let timer = setTimeout(switchAvatar, 1500);

  onUnmounted(() => {
    clearTimeout(timer);
  });
}
</script>

<style scoped lang="scss">
.content-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-second);
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  .home-avatar {
    transform: rotateY(180deg);
    width: 8rem;
    height: auto;
    object-fit: cover;
  }
}
</style>
