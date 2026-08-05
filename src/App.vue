<template>
  <router-view />
</template>

<script>
import "./styles/tokens.css";
import "./styles/sections.css";

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
  background: var(--color-ground);
  font-family: var(--font-body);
  color: var(--color-ink);
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-display);
  color: var(--color-ink);
  font-weight: 500;
  letter-spacing: var(--tracking-tight);
}

p {
  margin: 0 0 var(--space-5) 0;
  line-height: var(--leading-body);
  font-size: var(--text-base);
  color: var(--color-ink-muted);
}

a {
  color: inherit;
  transition: color var(--duration-fast) var(--ease-out);
}

a:focus-visible,
button:focus-visible,
summary:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

button,
input,
textarea {
  font: inherit;
}

::selection {
  background: var(--color-accent-soft);
  color: var(--color-ink);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
