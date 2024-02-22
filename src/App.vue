<template>
  <NavBarMain />
  <div class="container">
    <router-view />
  </div>
  <FooterMain />
</template>
<script setup lang="ts">
// import NavBar from "./components/NavBar.vue";
import NavBarMain from "./components/NavBarMain.vue";
import FooterMain from "./components/FooterMain.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");
:root {
  --color-bg: #ececee;
  --permanent-white: #ececee;
  --permanent-dark: #141414;
  --color-text: #141414;
  --color-bg-second: #e8e8f8;
  --navbar-bg: rgba(236, 236, 238, 0.8);
  --color-primary: #0da175;
  --color-secondary: #109bbd;
  --gradient-background: -webkit-linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  --font-family: "Poppins", sans-serif;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}
html {
  font-family: var(--font-family);
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  background-color: var(--color-bg);
  background-size: 40px 40px;
  background-image: radial-gradient(
    transparent 25px,
    var(--color-bg-second) 25px,
    var(--color-bg-second) 30px,
    transparent 30px
  );
}
.container {
  /* background: aqua; */
  height: auto;
  margin: 1rem 3rem;
}
.custom-hr {
  width: 100%;
  height: 1.5px;
  background: var(--color-text);
  opacity: 0.4;
  border: none;
}
.btn {
  background: transparent;
  border: 1px solid var(--color-primary) !important;
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
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    var(--color-primary) 50%,
    var(--color-primary)
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;
}
.btn:hover {
  background-position: 0 0;
  /* color: #333; */
  color: var(--permanent-white);
  transition: all 0.2s ease-in;
}
@media screen and (max-width: 700px) {
  .container {
    margin: 1rem 0.5rem;
  }
}
.custom-color {
  fill: var(--color-text);
  width: 5rem !important;
  height: 5rem !important;
}
.my-toast-popup {
  background-color: var(
    --color-bg
  ) !important; /* Cambia el color de fondo que desees */
}

.my-toast-title {
  color: var(
    --color-text
  ) !important; /* Cambia el color del texto que desees */
}
::-webkit-scrollbar {
  width: 10px;
  pad: 2px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: var(--color-text);
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-secondary);
}
</style>
