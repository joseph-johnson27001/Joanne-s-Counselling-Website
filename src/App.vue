<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #f5e9e2;
  font-family:
    "Open Sans",
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
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
  font-family: "Times New Roman", Times, serif;
}

a {
  color: inherit;
}

button,
input,
textarea {
  font: inherit;
}
</style>
