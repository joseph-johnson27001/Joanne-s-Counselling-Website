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
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.88);
  padding: 24px;
  box-shadow: 0 16px 30px rgba(45, 42, 36, 0.08);
  border: 1px solid rgba(184, 107, 71, 0.12);
}
</style>
