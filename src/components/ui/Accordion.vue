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
  margin-bottom: 1rem;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(45, 42, 36, 0.12);
  background: rgba(255, 255, 255, 0.95);
}

.summary {
  width: 100%;
  text-align: left;
  padding: 18px 22px;
  border: none;
  background: transparent;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.icon {
  transition: transform 0.2s ease;
}

.icon.open {
  transform: rotate(180deg);
}

.details {
  padding: 0 22px 18px;
  line-height: 1.75;
  color: #4a493f;
}
</style>
