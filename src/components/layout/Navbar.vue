<template>
  <header class="navbar">
    <div class="navbar-inner">
      <a
        href="#home"
        class="brand"
        @click.prevent="scrollToSection('home')"
        aria-label="Joanne Barnuevo — home"
      >
        <img
          src="@/assets/images/jb_icon.png"
          alt="Joanne Barnuevo — counsellor in Bangkok"
          class="logo"
        />
      </a>

      <button
        class="menu-toggle"
        type="button"
        @click="toggleMenu"
        :aria-expanded="menuOpen.toString()"
        aria-controls="primary-nav"
        aria-label="Toggle navigation"
      >
        <svg v-if="!menuOpen" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 7h18M3 12h18M3 17h18"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <nav
        id="primary-nav"
        class="nav-links"
        :class="{ open: menuOpen }"
        aria-label="Primary site navigation"
      >
        <a @click.prevent="scrollToSection('home')">Home</a>
        <a @click.prevent="scrollToSection('services')">Services</a>
        <a @click.prevent="scrollToSection('about')">About</a>
        <a @click.prevent="scrollToSection('faq')">FAQ</a>
        <a @click.prevent="scrollToSection('contact')">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: var(--color-chrome-soft);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border-bottom: 1px solid var(--color-chrome-border);
  display: flex;
  justify-content: center;
  padding: 0 var(--space-section-x);
}

.navbar-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  max-width: var(--max-width);
  width: 100%;
  padding: 0.65rem 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: var(--radius-sm);
}

.brand:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.logo {
  height: 42px;
  width: auto;
  object-fit: contain;
}

.menu-toggle {
  display: none;
  border: none;
  background: transparent;
  color: var(--color-chrome-text);
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-sm);
  line-height: 0;
}

.menu-toggle:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.menu-toggle svg {
  width: 1.35rem;
  height: 1.35rem;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.25rem;
  align-items: center;
}

.nav-links a {
  color: var(--color-chrome-text);
  text-decoration: none;
  font-weight: 400;
  font-size: var(--text-sm);
  letter-spacing: 0.02em;
  position: relative;
  font-family: var(--font-body);
  cursor: pointer;
  padding: 0.35rem 0;
  opacity: 0.88;
  transition: opacity var(--duration-fast) var(--ease-out);
  border-radius: var(--radius-sm);
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-base) var(--ease-out);
  opacity: 0.7;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

.nav-links a:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
  opacity: 1;
}

@media (max-width: 820px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 1px);
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    display: none;
    flex-direction: column;
    gap: 0;
    padding: var(--space-3) var(--space-section-x) var(--space-5);
    background: var(--color-chrome);
    border-bottom: 1px solid var(--color-chrome-border);
    box-shadow: var(--shadow-md);
    z-index: 25;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 0.9rem 0;
    color: var(--color-chrome-text);
    border-bottom: 1px solid var(--color-chrome-border);
    opacity: 0.9;
    font-size: var(--text-base);
  }

  .nav-links a:last-child {
    border-bottom: none;
  }

  .nav-links a::after {
    display: none;
  }
}
</style>
