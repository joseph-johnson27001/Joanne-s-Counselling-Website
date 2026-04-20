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
}

.page-shell {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px 72px;
}

@media (min-width: 820px) {
  .page-shell {
    padding: 0 32px 88px;
  }
}
</style>
