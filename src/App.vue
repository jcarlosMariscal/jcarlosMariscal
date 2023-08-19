<template>
  <!-- <NavBar /> -->
  <NavBarMain />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>
<script setup lang="ts">
// import NavBar from "./components/NavBar.vue";
import NavBarMain from "./components/NavBarMain.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");
:root {
  --color-bg: #ececee;
  --permanent-white: #ececee;
  --color-text: #141414;
  --background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(240, 6%, 93%, 1)'/><path d='M9 20.502h0A7.5 7.5 0 0 1 1.5 28 7.5 7.5 0 0 0-6 35.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1-21 35.5h0a7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 0-6 20.502h0a7.5 7.5 0 1 1 15 0zm15 0h0A7.5 7.5 0 0 1 16.5 28a7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 20.502h0c0-2.072-.84-3.947-2.197-5.303A7.477 7.477 0 0 0 1.5 13.002a7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1-6 5.503h0a7.5 7.5 0 1 1 15 0h0c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196c2.07 0 3.945.84 5.303 2.197A7.471 7.471 0 0 1 24 20.502zm15 0h0A7.5 7.5 0 0 1 31.5 28a7.5 7.5 0 0 0-7.5 7.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 35.5h0a7.5 7.5 0 0 1 7.5-7.5 7.5 7.5 0 0 0 7.5-7.498h0a7.5 7.5 0 1 1 15 0zm0-30h0A7.5 7.5 0 0 1 31.5-2 7.5 7.5 0 0 0 24 5.5h0a7.5 7.5 0 0 1-7.5 7.499 7.476 7.476 0 0 1-5.304-2.196A7.482 7.482 0 0 1 9 5.5h0A7.5 7.5 0 0 1 16.5-2 7.5 7.5 0 0 0 24-9.498h0a7.5 7.5 0 1 1 15 0zm-22.5 37.5a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303A7.477 7.477 0 0 0 1.5 28.002 7.5 7.5 0 0 0 9 20.503c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196zm15-15a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303a7.477 7.477 0 0 0-5.303-2.197A7.5 7.5 0 0 0 24 5.503c0 2.07.84 3.945 2.196 5.303a7.476 7.476 0 0 0 5.304 2.196z'  stroke-width='1.5' stroke='hsla(126, 23%, 49%, 0.02)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
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
  background-image: var(--background-image);
  font-family: "Poppins", sans-serif;
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
</style>
