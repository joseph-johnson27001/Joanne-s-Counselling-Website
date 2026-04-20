<template>
  <div class="home-page">
    <Navbar />

    <main class="page-shell">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
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
};
</script>

<style scoped>
.home-page {
  background: #f5e9e2;
  color: #2f2a24;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-shell {
  margin: 0 auto;
  padding: 0 0 80px;
  width: 100%;
  flex: 1;
}

@media (min-width: 820px) {
  .page-shell {
    padding: 0 0 100px;
  }
}

@media (min-width: 1400px) {
  .page-shell {
    padding: 0 0 120px;
  }
}
</style>
