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
        <a class="secondary-link" href="#about">Learn more</a>
      </div>
    </div>

    <div class="hero-visual">
      <img
        src="https://picsum.photos/seed/joanne-hero/720/520"
        alt="Soft abstract illustration representing playful healing and connection"
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
  padding: 40px 40px !important;
  scroll-margin-top: 100px;
  background: #f5e9e2;
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
  color: #4d4338;
  line-height: 1.8;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}

.secondary-link {
  color: #4c3a2f;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  padding: 8px 4px;
}

.secondary-link::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #b86b47, #d4a574);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.secondary-link:hover::after {
  transform: scaleX(1);
}

.hero-visual {
  height: 400px;
  border-radius: 28px;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 116, 0.15) 0%,
    rgba(184, 107, 71, 0.1) 100%
  );
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(184, 107, 71, 0.12);
  border: 1px solid rgba(184, 107, 71, 0.08);
  transition: all 0.3s ease;
}

.hero-visual:hover {
  box-shadow: 0 28px 56px rgba(184, 107, 71, 0.16);
}

.hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 900px) {
  .hero-section {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 14px;
    padding: 50px 0 50px;
  }
}
</style>
