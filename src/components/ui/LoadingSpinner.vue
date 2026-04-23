<template>
  <div v-if="isLoading" class="loading-spinner">
    <div class="spinner"></div>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e9e2 100%);
  z-index: 10;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(176, 136, 112, 0.2);
  border-top: 4px solid #b08870;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
