<template>
  <article class="card" :class="{ interactive }">
    <slot />
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    interactive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.card.interactive {
  transition:
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-out);
}

.card.interactive:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
</style>
