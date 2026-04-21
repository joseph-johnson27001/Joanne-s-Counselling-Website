<template>
  <section id="home" class="section-block hero-block">
    <video ref="heroVideo" class="hero-video" autoplay muted loop playsinline>
      <source
        src="https://cdn.pixabay.com/video/2020/09/01/48770-456522652_large.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div class="section-content">
      <div class="hero-content">
        <div class="hero-copy">
          <p class="eyebrow">
            Healing is play, listening is art, the rest is connection.
          </p>
          <h1>Welcome</h1>
          <p class="hero-text">
            Whether you've wandered here out of curiosity while searching for a
            certain kind of counselling or are simply looking for a space to see
            what feels right for you, I'm glad you're here.
          </p>
          <p class="hero-text">
            My practice is grounded in attentive listening, creative activities,
            and genuine connection—offering a safe environment where you can
            feel supported, grow, and connect in your own way and at your own
            pace.
          </p>
          <div class="hero-actions">
            <Button href="#contact">Book a consultation</Button>
          </div>
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
  // mounted() {
  //   if (this.$refs.heroVideo) {
  //     this.$refs.heroVideo.playbackRate = 0.4;
  //   }
  // },
};
</script>

<style scoped>
.hero-block {
  background: #fef9f5;
  position: relative;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-block::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  pointer-events: none;
}

.section-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 80dvh;
}

.hero-copy {
  opacity: 0;
  animation: fadeInUp 1.2s linear forwards;
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 12px;
  align-items: center;
  justify-content: start;
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
  color: white;
}

h1 {
  margin: 0 0 24px 0;
  font-size: clamp(5rem, 6vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: white;
}

.hero-text {
  margin: 0 0 32px 0;
  line-height: 1.8;
  font-size: 1.05rem;
  color: white;
}

.hero-tex {
  color: white;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  padding-top: 20px;
}

.hero-actions :deep(.button) {
  background: #585e86;
  color: white;
  border: 1px solid #fff;
  font-weight: 400;
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
