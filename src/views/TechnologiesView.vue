<template>
  <div class="technologies__content">
    <div class="content__cards">
      <div class="cards">
        <CardTechTool
          v-for="(tech, index) in techs"
          :key="index"
          :title="tech.title"
          :icon="tech.icon"
          variant="dev"
        />
      </div>
      <div class="cards">
        <CardTechTool
          v-for="(tool, index) in tools"
          :key="index"
          :title="tool.title"
          :icon="tool.icon"
          variant="tool"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardTechTool from "@/components/TechComponents/CardTechTool.vue";
import html5Icon from "@/assets/tech-icons/html5.png";
import css from "@/assets/tech-icons/css3.png";
import sass from "@/assets/tech-icons/sass.png";
import javascript from "@/assets/tech-icons/js.png";
import vue from "@/assets/tech-icons/vue.png";
import react from "@/assets/tech-icons/react.png";
import tailwind from "@/assets/tech-icons/tailwind.png";
import bootstrap from "@/assets/tech-icons/bootstrap.png";
import php from "@/assets/tech-icons/php.png";
import sql from "@/assets/tech-icons/sql.png";
import node from "@/assets/tech-icons/node.png";
import github from "@/assets/tech-icons/github.png";
import git from "@/assets/tech-icons/git.png";
import gitlab from "@/assets/tech-icons/gitlab.png";
import xd from "@/assets/tech-icons/xd.png";
import firebase from "@/assets/tech-icons/firebase.png";
import vscode from "@/assets/tech-icons/vscode.png";
import slack from "@/assets/tech-icons/slack.png";
import bitbucket from "@/assets/tech-icons/bitbucket.png";
import azure from "@/assets/tech-icons/azure.png";
import typescript from "@/assets/tech-icons/typescript.png";
const techs = [
  // <img src="../../assets/tech-icons/html5.png" alt="" />
  { title: "HTML", icon: html5Icon },
  { title: "CSS", icon: css },
  { title: "SASS", icon: sass },
  { title: "Javascript", icon: javascript },
  { title: "Typescript", icon: typescript },
  { title: "Vue JS", icon: vue },
  { title: "React JS", icon: react },
  { title: "Tailwind", icon: tailwind },
  { title: "Bootstrap", icon: bootstrap },
  { title: "PHP", icon: php },
  { title: "SQL", icon: sql },
  { title: "Node JS", icon: node },
];
const tools = [
  { title: "GitHub", icon: github },
  { title: "Git", icon: git },
  { title: "Gitlab", icon: gitlab },
  { title: "Adobe XD", icon: xd },
  { title: "Firebase", icon: firebase },
  { title: "VS Code", icon: vscode },
  { title: "Slack", icon: slack },
  { title: "Bitbucket", icon: bitbucket },
  { title: "Azure", icon: azure },
];
</script>

<style scoped>
.technologies__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.cards {
  color: var(--color-text);
  height: auto;
  padding: 0.5rem 0;
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
