<template>
  <li class="menu__option">
    <router-link
      :to="props.nav.to"
      class="header-anim item"
      activeClass="item-active"
    >
      <span>{{ props.nav.title }}</span>
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
interface NavigationItem {
  title: string;
  to: string;
}

const props = defineProps({
  nav: {
    type: Object as () => NavigationItem,
    required: true,
  },
});
</script>

<style scoped>
.menu__option .item {
  text-align: center;
  /* width: 100%; */
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: right;
  font-weight: 600;
  line-height: 24px;
  transition: all 0.1s ease-in;
  padding: 0.5rem 0.2rem;
  color: var(--color-text);
  /* background-color: aqua; */
  /* border: 1px solid red; */
}
.menu__option .item:hover {
  color: var(--color-primary);
  /* border-bottom: 1px solid var(--color-primary); */
}
.item-active {
  /* color: var(--color-primary) !important; */
  /* border-bottom: 1px solid var(--color-primary); */
}
.item-active span {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-active span::before {
  content: "";
  position: absolute;
  left: -0.75rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--color-text);
  margin-bottom: 0.1rem;
}
@media screen and (max-width: 500px) {
  .menu__option .item {
    display: flex;
    justify-content: center;
  }
}
</style>
