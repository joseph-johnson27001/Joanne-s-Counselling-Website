<template>
  <div class="home-page">
    <Navbar />

    <main class="page-shell">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import FAQSection from "@/components/sections/FAQSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
    HeroSection,
    AboutSection,
    ServicesSection,
    FAQSection,
    ContactSection,
  },
  mounted() {
    this.setupReveal();
  },
  beforeUnmount() {
    if (this._revealObserver) {
      this._revealObserver.disconnect();
    }
  },
  methods: {
    setupReveal() {
      const targets = this.$el.querySelectorAll(
        ".section-block:not(.hero-block)",
      );
      targets.forEach((el) => el.classList.add("reveal"));

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        targets.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      this._revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              this._revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );

      targets.forEach((el) => this._revealObserver.observe(el));
    },
  },
};
</script>

<style scoped>
.home-page {
  color: var(--color-ink);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-ground);
}

.page-shell {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  flex: 1;
}
</style>
