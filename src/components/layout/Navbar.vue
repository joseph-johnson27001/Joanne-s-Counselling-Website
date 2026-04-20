<template>
  <header class="navbar">
    <div class="navbar-inner">
      <div class="brand">
        <span>Joanne Counselling</span>
      </div>

      <button
        class="menu-toggle"
        type="button"
        @click="toggleMenu"
        :aria-expanded="menuOpen.toString()"
        aria-label="Toggle navigation"
      >
        <svg v-if="!menuOpen" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 7h18M3 12h18M3 17h18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <nav
        class="nav-links"
        :class="{ open: menuOpen }"
        aria-label="Primary site navigation"
      >
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#services" @click="closeMenu">Services</a>
        <a href="#faq" @click="closeMenu">FAQ</a>
        <a href="#contact" @click="closeMenu">Contact</a>
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
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  background: #eedacf;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(45, 42, 36, 0.08);
}

.navbar-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: min(1600px, 100%);
  margin: 0 auto;
  padding: 20px 24px;
}

.brand {
  display: inline-flex;
  font-weight: 500;
  color: #b86b47;
  font-family: "Euphoria Script", cursive;
  font-size: 3rem;
  line-height: 1.05;
}

.menu-toggle {
  display: none;
  border: none;
  background: transparent;
  color: #4c3a2f;
  font-size: 1.5rem;
  cursor: pointer;
}

.menu-toggle svg {
  width: 1.5rem;
  height: 1.5rem;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
}

.nav-links a {
  color: #4c3a2f;
  text-decoration: none;
  font-weight: 600;
}

.nav-links a:hover {
  color: #b86b47;
}

@media (max-width: 820px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 4px);
    right: 24px;
    left: 24px;
    display: none;
    flex-direction: column;
    gap: 12px;
    padding: 20px 20px;
    border-radius: 22px;
    background: rgba(245, 233, 226, 0.98);
    box-shadow: 0 18px 40px rgba(45, 42, 36, 0.12);
    z-index: 25;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid rgba(45, 42, 36, 0.08);
  }

  .nav-links a:last-child {
    border-bottom: none;
  }
}
</style>
