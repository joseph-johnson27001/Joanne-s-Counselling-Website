<template>
  <section id="home" class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">
        Healing is play, listening is art, the rest is connection.
      </p>
      <h1>Welcome!</h1>
      <p class="hero-text">
        Person-centered support for children, adolescents, and adults in Bangkok
        and online. Every healing journey is unique. Whether you or your child
        are navigating change, seeking understanding, or simply needing a safe
        space, my practice is grounded in playful healing, attentive listening,
        and meaningful connection.
      </p>
      <div class="hero-actions">
        <Button href="#contact">Book a consultation</Button>
      </div>
    </div>

    <div class="hero-visual visual-container">
      <img
        src="@/assets/images/bike_image.jpeg"
        alt="Joanne Barnuevo practicing self-care and wellness"
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
  scroll-margin-top: 75px;
  background: #fef9f5;
  width: 100%;
}

@media (max-width: 900px) {
  .hero-section {
    padding: 50px 20px !important;
    scroll-margin-top: 70px;
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

@media (max-width: 640px) {
  .hero-actions {
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }
}

.hero-visual {
  height: 450px;
  width: 450px;
  overflow: hidden;
}

.hero-visual .image-fill {
  width: 100%;
  height: 100%;
  object-fit: cover !important;
  object-position: bottom !important;
}

@media (min-width: 900px) {
  .hero-section {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 14px;
    padding: 50px 20px;
  }
}
</style>
