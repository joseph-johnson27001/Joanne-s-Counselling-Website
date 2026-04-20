<template>
  <article class="card">
    <slot />
  </article>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  padding: 28px;
  border: 1px solid rgba(184, 107, 71, 0.08);
  box-shadow:
    0 8px 24px rgba(45, 42, 36, 0.08),
    0 2px 8px rgba(45, 42, 36, 0.04);
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.card:hover {
  box-shadow:
    0 16px 40px rgba(45, 42, 36, 0.12),
    0 4px 12px rgba(45, 42, 36, 0.06);
  border-color: rgba(184, 107, 71, 0.16);
}
</style>
