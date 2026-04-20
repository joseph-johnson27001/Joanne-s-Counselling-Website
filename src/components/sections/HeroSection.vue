<template>
  <section id="home" class="section-block hero-block">
    <div class="section-content">
      <div class="hero-content">
        <div class="hero-copy">
          <p class="eyebrow">
            Healing is play, listening is art, the rest is connection.
          </p>
          <h1>Welcome!</h1>
          <p class="hero-text">
            Whether you've wandered here out of curiosity while searching for a
            certain kind of counselling or are simply looking for a space to see
            what feels right for you, I'm glad you're here. My practice is
            grounded in attentive listening, creative activities, and genuine
            connection—offering a safe environment where you can feel supported,
            grow, and connect in your own way and at your own pace.
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
      </div>
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
.hero-block {
  background: #fef9f5;
}

.hero-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 12px;
  align-items: center;
}

@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: start;
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

.hero-visual .image-fill {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
}

@media (max-width: 640px) {
  .hero-actions {
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
