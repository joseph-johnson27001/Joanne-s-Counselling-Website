<template>
  <div class="accordion">
    <button class="summary" type="button" @click="toggle">
      <span>{{ title }}</span>
      <span class="icon" :class="{ open: isOpen }">▾</span>
    </button>
    <div v-if="isOpen" class="details">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.accordion {
  margin-bottom: 12px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(184, 107, 71, 0.1);
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
}

.accordion:hover {
  border-color: rgba(184, 107, 71, 0.2);
  box-shadow: 0 6px 20px rgba(45, 42, 36, 0.08);
}

.summary {
  width: 100%;
  text-align: left;
  padding: 20px 24px;
  border: none;
  background: transparent;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #2f2a24;
  font-size: 0.95rem;
  letter-spacing: 0.2px;
  transition: all 0.3s ease;
}

.summary:hover {
  color: #b86b47;
}

.icon {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #b86b47;
  font-size: 1.2rem;
}

.icon.open {
  transform: rotate(180deg);
}

.details {
  padding: 0 24px 20px 24px;
  line-height: 1.8;
  color: #4a493f;
  animation: slideDown 0.3s ease forwards;
}

@keyframes slideDown {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
