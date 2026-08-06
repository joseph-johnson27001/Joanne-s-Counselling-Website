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
          <p class="hero-quote">
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
            and genuine connection, offering a safe environment where you can
            feel supported, become unstuck, and connect in your own way and at
            your own pace.
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
  min-height: min(92dvh, 900px);
  display: flex;
  align-items: center;
  padding-top: clamp(88px, 11vw, 128px);
  padding-bottom: clamp(64px, 9vw, 112px);
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
  max-width: min(48rem, 100%);
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

.hero-quote {
  margin: 0 0 var(--space-4);
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0.01em;
  color: rgba(255, 252, 246, 0.88);
  text-transform: none;
  max-width: 40rem;
}

h1 {
  margin: 0 0 var(--space-5);
  font-size: clamp(2.5rem, 5.5vw, 3.75rem);
  line-height: 1.1;
  letter-spacing: var(--tracking-tight);
  color: #fffef9;
  font-family: var(--font-display);
  font-weight: 500;
}

.hero-text {
  margin: 0 0 var(--space-4);
  line-height: 1.75;
  font-size: clamp(0.98rem, 1.4vw, 1.08rem);
  color: rgba(255, 250, 244, 0.9);
  max-width: none;
}

.hero-text:last-of-type {
  margin-bottom: var(--space-6);
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
  .hero-block {
    min-height: auto;
    align-items: flex-end;
    padding-top: clamp(96px, 18vw, 140px);
    padding-bottom: clamp(48px, 8vw, 72px);
  }

  .hero-video {
    object-position: 35% bottom;
  }

  .hero-scrim {
    background: linear-gradient(
      180deg,
      rgba(48, 34, 22, 0.28) 0%,
      rgba(48, 34, 22, 0.55) 42%,
      rgba(48, 34, 22, 0.78) 100%
    );
  }

  .hero-content {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .hero-actions {
    width: 100%;
  }

  .hero-actions :deep(.button) {
    width: 100%;
  }

  h1 {
    font-size: clamp(2.25rem, 11vw, 2.75rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy.animate-in {
    animation: none;
    opacity: 1;
  }
}
</style>
