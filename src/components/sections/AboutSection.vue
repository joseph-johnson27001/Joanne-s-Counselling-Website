<template>
  <section id="about" class="section-block about-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">About</p>
        <h2>Joanne Barnuevo</h2>
        <p class="credentials">MSc Counselling Psychology</p>
      </div>

      <div class="about-grid">
        <div class="about-copy">
          <p>
            Hi, I'm Joanne. My roots are in the Philippines, and since moving to
            Bangkok in 2017, it has become my home. My journey into counselling
            began through volunteer work as a Psychological First-Aid (PFA) and
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
            Over the years, I've come to deeply appreciate the diversity and
            unique strengths each person brings to the counselling room. These
            experiences have shaped me into a counsellor who is committed to
            creating a warm, welcoming, and non-judgmental space where people
            can feel truly heard, supported, and empowered to grow in ways that
            are meaningful to them.
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

.about-block :deep(h2) {
  margin-bottom: var(--space-2);
}

.credentials {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--color-ink-subtle);
  line-height: 1.4;
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
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: none;
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
