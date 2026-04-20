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
  padding: 1rem 2rem;
  border-radius: 999px;
  border: 2px solid #b86b47;
  background: #b86b47;
  color: white;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  box-shadow: 0 8px 20px rgba(184, 107, 71, 0.2);
}

.button:hover {
  background: #a35f3f;
  border-color: #a35f3f;
  box-shadow: 0 12px 32px rgba(184, 107, 71, 0.3);
}

.button:active {
  box-shadow: 0 8px 20px rgba(184, 107, 71, 0.2);
}
</style>
