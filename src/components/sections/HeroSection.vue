<template>
  <section id="home" class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">
        Healing is play, listening is art, the rest is connection.
      </p>
      <h1>Welcome to Joanne Counselling</h1>
      <p class="hero-text">
        Person-centered support for children, adolescents, and adults in Bangkok
        and online. Every healing journey is unique. Whether you or your child
        are navigating change, seeking understanding, or simply needing a safe
        space, my practice is grounded in playful healing, attentive listening,
        and meaningful connection.
      </p>
      <div class="hero-actions">
        <Button href="#contact">Book a consultation</Button>
        <a class="underline-link" href="#about">Learn more</a>
      </div>
    </div>

    <div class="hero-visual visual-container">
      <img
        src="https://picsum.photos/seed/joanne-hero/720/520"
        alt="Soft abstract illustration representing playful healing and connection"
        class="image-fill"
      />
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/Button.vue";

export default {
  name: "HeroSection",
  components: {
    Button,
  },
};
</script>

<style scoped>
.hero-section {
  display: grid;
  gap: 12px;
  align-items: start;
  padding: 80px 40px !important;
  scroll-margin-top: 80px;
  background: #faf7f3;
}

@media (max-width: 900px) {
  .hero-section {
    padding: 50px 20px !important;
    scroll-margin-top: 50px;
  }
}

.eyebrow {
  margin: 0 0 24px;
  font-size: 0.8rem;
}

h1 {
  margin: 0 0 24px 0;
  font-size: clamp(2.8rem, 6vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.hero-text {
  margin: 0 0 32px 0;
  line-height: 1.8;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}

.hero-visual {
  height: 400px;
}

@media (min-width: 900px) {
  .hero-section {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 14px;
    padding: 50px 20px;
  }
}
</style>
