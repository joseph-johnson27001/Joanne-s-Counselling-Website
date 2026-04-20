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
        <a href="#services" @click="closeMenu">Services</a>
        <a href="#faq" @click="closeMenu">FAQ</a>
        <a href="#about" @click="closeMenu">About</a>
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
  background: #4f6a49;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.navbar-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: min(1600px, 100%);
  margin: 0 auto;
  padding: 20px 40px;
}

@media (max-width: 900px) {
  .navbar-inner {
    padding: 20px;
  }
}

.brand {
  display: inline-flex;
  font-weight: 400;
  color: #faf7f3;
  font-family: "Euphoria Script", cursive;
  font-size: 2rem;
  line-height: 1.05;
}

.menu-toggle {
  display: none;
  border: none;
  background: transparent;
  color: #faf7f3;
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
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: capitalize;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #8fa87a;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-links a:hover {
  color: #8fa87a;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 820px) {
  .brand {
    font-size: 1.8rem;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: none;
    flex-direction: column;
    gap: 0;
    padding: 20px 20px;
    border-radius: 0;
    background: #faf7f3;
    border-bottom: 1px solid #8fa87a;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    z-index: 25;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 0;
    color: #8fa87a;
    border-bottom: 1px solid #d4d0cc;
  }

  .nav-links a:last-child {
    border-bottom: none;
  }
}
</style>
