<template>
  <section id="about" class="section-block about-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">About</p>
        <h2>Joanne Barnuevo</h2>
        <p class="subtitle credentials">
          MSc Counselling Psychology · BACP · ISCA · PTUK
        </p>
      </div>

      <div class="about-grid">
        <div class="about-copy">
          <p>
            Hi, I'm Joanne. My roots are in the Philippines, and since moving to
            Bangkok in 2017, it has become my home. My journey into counselling
            began through volunteer work as Psychological First-Aid (PFA) and
            Mental Health &amp; Psychosocial Support (MHPSS) provider and has
            since been shaped by experience in education, school counselling, as
            well as my own journey of adapting to a new country.
          </p>
          <p>
            I hold a Master of Science in Counselling Psychology and currently
            support children, adolescents, and adults in my private practice. I
            am an Individual Member of the British Association for Counselling
            and Psychotherapy (BACP) and a member of the International School
            Counselor Association (ISCA) and Play Therapy UK (PTUK).
          </p>
          <p>
            My practice is grounded in attentive listening, creative activities,
            and genuine connection — a warm, non-judgmental space where you can
            feel heard, supported, and free to grow in ways that are meaningful
            to you, at your own pace.
          </p>
        </div>

        <div class="about-visual visual-container">
          <img
            src="@/assets/images/Joanne_Cambodia.jpeg"
            alt="Joanne Barnuevo, MSc Counselling Psychology — counsellor in Bangkok"
            class="image-fill"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about-block {
  background: var(--color-band-sage);
}

.credentials {
  font-size: var(--text-sm);
  letter-spacing: 0.02em;
  color: var(--color-ink-subtle);
}

.about-grid {
  display: grid;
  gap: var(--space-7);
  align-items: start;
}

.about-copy p {
  margin: 0 0 var(--space-5);
  line-height: var(--leading-body);
  color: var(--color-ink-muted);
  font-size: var(--text-base);
}

.about-copy p:last-child {
  margin-bottom: 0;
}

.about-visual {
  overflow: hidden;
  aspect-ratio: 4 / 5;
  max-width: 420px;
  margin: 0 auto;
  width: 100%;
}

.about-visual .image-fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

@media (min-width: 960px) {
  .about-grid {
    grid-template-columns: 1.35fr 0.9fr;
    gap: var(--space-8);
    align-items: center;
  }

  .about-visual {
    max-width: none;
    margin: 0;
    aspect-ratio: 4 / 5;
  }
}
</style>
