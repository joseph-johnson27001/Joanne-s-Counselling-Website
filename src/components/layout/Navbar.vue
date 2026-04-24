<template>
  <header class="section-block navbar">
    <div class="navbar-inner">
      <div class="brand">
        <span>Joanne Barnuevo</span>
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
  width: 100%;
  background: #6a517d;
  backdrop-filter: blur(6px);
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  z-index: 50;
}

.navbar-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 1400px;
  width: 100%;
  padding: 15px 0px;
}

.brand {
  display: inline-flex;
  font-weight: 400;
  color: #faf7f3;
  font-family: "Allura", cursive;
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
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  cursor: pointer;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
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
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    display: none;
    flex-direction: column;
    gap: 0;
    padding: 20px 20px;
    border-radius: 0;
    background: whitesmoke;
    border-bottom: 1px solid #7474ac;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    z-index: 25;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 0;
    color: #444;
    border-bottom: 1px solid #d4d0cc;
    position: relative;
    transition: color 0.3s ease;
    font-weight: 400;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #7474ac;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 1;
  }

  .nav-links a:hover::after {
    transform: scaleX(1);
  }
}
</style>
