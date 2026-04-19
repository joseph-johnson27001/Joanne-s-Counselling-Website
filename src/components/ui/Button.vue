<template>
  <a
    v-if="href"
    :href="href"
    class="button"
    :target="external ? '_blank' : '_self'"
    rel="noopener noreferrer"
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
  padding: 0.95rem 1.7rem;
  border-radius: 999px;
  border: none;
  background: #b86b47;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
  background: #a35f3f;
}
</style>
