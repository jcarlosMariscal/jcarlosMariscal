<template>
  <!-- <NavBar /> -->
  <NavBarMain />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
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
  /* width: 15px; */
  background: var(--color-bg);
  /* -webkit-border-radius: 10px; */
  /* border-radius: 10px; */
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
