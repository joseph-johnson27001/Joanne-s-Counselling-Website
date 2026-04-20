<template>
  <article class="card card-base">
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
  padding: 28px;
}
</style>
