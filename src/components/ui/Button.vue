<template>
  <a
    v-if="href"
    :href="href"
    class="button"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <button v-else type="button" class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    href: {
      type: String,
      default: "",
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.95rem 1.65rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-accent);
  background: var(--color-accent);
  color: #fffaf4;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-sm);
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.button:hover {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.button:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}
</style>
