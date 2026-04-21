<template>
  <router-view />
</template>

<script>
import "./styles/sections.css";

export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Alex+Brush&family=Allura&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #f5e9e2;
  font-family: "Montserrat", sans-serif;
  color: #2f2a24;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #f5e9e2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
}

a {
  color: inherit;
  transition: color 0.2s ease;
}

button,
input,
textarea {
  font: inherit;
}
</style>
