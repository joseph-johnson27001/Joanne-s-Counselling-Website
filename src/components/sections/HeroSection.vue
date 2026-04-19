<template>
  <section id="home" class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">Healing is play, listening is art, the rest is connection.</p>
      <h1>Welcome to Joanne Barnuevo Counselling</h1>
      <p class="hero-text">
        Person-centered support for children, adolescents, and adults in Bangkok and online.
        Every healing journey is unique. Whether you or your child are navigating change, seeking understanding,
        or simply needing a safe space, my practice is grounded in playful healing, attentive listening,
        and meaningful connection.
      </p>
      <div class="hero-actions">
        <Button href="#contact">Book a consultation</Button>
        <a class="secondary-link" href="#about">Learn more</a>
      </div>
    </div>

    <div class="hero-visual" role="img" aria-label="Illustration placeholder for playful healing and connection">
      <span>Image placeholder</span>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  name: 'HeroSection',
  components: {
    Button,
  },
}
</script>

<style scoped>
.hero-section {
  display: grid;
  gap: 32px;
  align-items: center;
  padding: 60px 0 40px;
}

.eyebrow {
  margin: 0 0 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #846754;
  font-size: 0.9rem;
}

h1 {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 3.8rem);
  line-height: 1.05;
}

.hero-text {
  margin: 24px 0;
  color: #4d4338;
  line-height: 1.75;
  max-width: 720px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.secondary-link {
  color: #4c3a2f;
  font-weight: 600;
  text-decoration: underline;
}

.hero-visual {
  min-height: 320px;
  border-radius: 32px;
  background: rgba(184, 107, 71, 0.12);
  display: grid;
  place-items: center;
  color: #7d604f;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media (min-width: 900px) {
  .hero-section {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>
