<template>
  <div class="accordion">
    <button
      class="summary"
      type="button"
      :aria-expanded="isOpen.toString()"
      :aria-controls="panelId"
      :id="buttonId"
      @click="toggle"
    >
      <span class="summary-label">{{ title }}</span>
      <span class="icon" :class="{ open: isOpen }" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
    <div
      :id="panelId"
      class="panel"
      :class="{ open: isOpen }"
      role="region"
      :aria-labelledby="buttonId"
      :aria-hidden="(!isOpen).toString()"
      :inert="!isOpen"
    >
      <div class="details">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
let accordionUid = 0;

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
    accordionUid += 1;
    return {
      isOpen: this.open,
      uid: accordionUid,
    };
  },
  computed: {
    buttonId() {
      return `accordion-btn-${this.uid}`;
    },
    panelId() {
      return `accordion-panel-${this.uid}`;
    },
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
  border-bottom: 1px solid var(--color-border);
}

.summary {
  width: 100%;
  text-align: left;
  padding: var(--space-5) 0;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  cursor: pointer;
  color: var(--color-ink);
  font-size: var(--text-base);
  letter-spacing: 0.01em;
  transition: color var(--duration-fast) var(--ease-out);
}

.summary:hover {
  color: var(--color-accent);
}

.summary:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
  border-radius: var(--radius-sm);
}

.summary-label {
  flex: 1;
  line-height: var(--leading-snug);
}

.icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-accent);
  transition: transform var(--duration-base) var(--ease-out);
}

.icon.open {
  transform: rotate(180deg);
}

.panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-base) var(--ease-out);
}

.panel.open {
  grid-template-rows: 1fr;
}

.details {
  overflow: hidden;
  min-height: 0;
  padding: 0;
  color: var(--color-ink-muted);
  line-height: var(--leading-body);
  font-size: var(--text-base);
}

.panel.open .details {
  padding-bottom: var(--space-5);
}

@media (prefers-reduced-motion: reduce) {
  .panel {
    transition: none;
  }

  .icon {
    transition: none;
  }
}
</style>
