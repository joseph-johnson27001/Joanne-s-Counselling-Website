<template>
  <div
    class="loading-spinner"
    :class="{ visible: isLoading }"
    role="status"
    aria-live="polite"
    :aria-hidden="(!isLoading).toString()"
  >
    <span class="visually-hidden">Loading</span>
    <div class="spinner" aria-hidden="true"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.loading-spinner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-ground);
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity var(--duration-slow) var(--ease-out),
    visibility var(--duration-slow) var(--ease-out);
}

.loading-spinner.visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.spinner {
  width: 28px;
  height: 28px;
  border: 2px solid var(--color-accent-soft);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    border-top-color: var(--color-accent);
    opacity: 0.7;
  }
}
</style>
