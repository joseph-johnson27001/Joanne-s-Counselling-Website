<template>
  <section id="home" class="section-block hero-block">
    <LoadingSpinner :isLoading="isVideoLoading" />
    <video
      ref="heroVideo"
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      @loadstart="onVideoLoadStart"
      @canplay="onVideoCanPlay"
      @play="onVideoPlay"
    >
      <source src="@/assets/videos/grass-boomerang.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-scrim" aria-hidden="true"></div>
    <div class="section-content">
      <div class="hero-content">
        <div class="hero-copy" :class="{ 'animate-in': !isVideoLoading }">
          <p class="eyebrow">
            Healing is play, listening is art, the rest is connection.
          </p>
          <h1>Joanne Barnuevo</h1>
          <p class="hero-text">
            Person-centred counselling for children, adolescents, and adults —
            in person and online, at your pace.
          </p>
          <div class="hero-actions">
            <Button href="#contact">Get in touch</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/Button.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

export default {
  name: "HeroSection",
  components: {
    Button,
    LoadingSpinner,
  },
  data() {
    return {
      isVideoLoading: true,
      visibilityHandler: null,
    };
  },
  methods: {
    onVideoLoadStart() {
      this.isVideoLoading = true;
    },
    onVideoCanPlay() {
      this.isVideoLoading = false;
    },
    onVideoPlay() {
      this.isVideoLoading = false;
    },
  },
  mounted() {
    if (this.$refs.heroVideo) {
      const playPromise = this.$refs.heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay prevented — expected on some iOS versions
        });
      }

      this.visibilityHandler = () => {
        if (!document.hidden && this.$refs.heroVideo) {
          this.$refs.heroVideo.play();
        }
      };
      document.addEventListener("visibilitychange", this.visibilityHandler);
    }
  },
  beforeUnmount() {
    if (this.visibilityHandler) {
      document.removeEventListener("visibilitychange", this.visibilityHandler);
    }
  },
};
</script>

<style scoped>
.hero-block {
  background: var(--color-ground);
  position: relative;
  overflow: hidden;
  min-height: min(88dvh, 820px);
  display: flex;
  align-items: center;
  padding-top: clamp(72px, 12vw, 120px);
  padding-bottom: clamp(72px, 12vw, 120px);
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: var(--color-scrim);
}

.section-content {
  position: relative;
  z-index: 3;
  width: 100%;
}

.hero-content {
  max-width: 36rem;
}

.hero-copy {
  opacity: 0;
}

.hero-copy.animate-in {
  animation: fadeInUp 1.4s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  animation-delay: 0.35s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.eyebrow {
  margin: 0 0 var(--space-4);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.78);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  font-weight: 600;
}

h1 {
  margin: 0 0 var(--space-5);
  font-size: var(--text-hero);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 500;
}

.hero-text {
  margin: 0 0 var(--space-6);
  line-height: var(--leading-body);
  font-size: var(--text-md);
  color: rgba(255, 255, 255, 0.88);
  max-width: 32rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  align-items: center;
}

.hero-actions :deep(.button) {
  background: #fff8f0;
  color: var(--color-ink);
  border-color: #fff8f0;
  font-weight: 500;
}

.hero-actions :deep(.button:hover) {
  background: #fff3e6;
  border-color: #fff3e6;
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .hero-video {
    object-position: 35% bottom;
  }
}

@media (max-width: 640px) {
  .hero-block {
    min-height: 78dvh;
  }

  .hero-actions {
    width: 100%;
  }

  .hero-actions :deep(.button) {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy.animate-in {
    animation: none;
    opacity: 1;
  }
}
</style>
