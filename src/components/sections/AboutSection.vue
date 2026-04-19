<template>
  <section id="about" class="section-block about-block">
    <div class="section-heading">
      <p class="eyebrow">About</p>
      <h2>Joanne Barnuevo, MSCP</h2>
      <p class="subtitle">
        Counselor | Person-Centered | Integrative | Therapeutic Play Skills
        (PTUK/PTI)
      </p>
    </div>

    <div class="about-grid">
      <div class="about-copy">
        <p>
          My path in psychology began with a Bachelor of Science in Psychology,
          shaped by volunteering at national mental health events and clinical
          internships with youth. Responding as a Mental Health First Aid
          volunteer during Typhoon Haiyan deepened my passion for practical,
          compassionate support.
        </p>
        <p>
          Moving to Bangkok to help my family, I taught in daycare and
          kindergarten settings, focusing on each child’s emotional world. The
          COVID-19 pandemic underscored the importance of connection, especially
          for expat families facing isolation and change.
        </p>
        <p>
          I completed my Master of Science in Counselling Psychology,
          researching parental efficacy and transactional analysis, and shared
          my work at conferences in Japan and Thailand.
        </p>
        <p>
          Now in private practice, my work is guided by play, artful listening,
          and genuine connection. I support children, adolescents, and adults in
          discovering strengths, navigating challenges, and embracing growth.
        </p>
      </div>

      <div class="about-visual">
        <img
          src="https://picsum.photos/seed/joanne-about/640/520"
          alt="Portrait-style image placeholder representing Joanne's counseling background"
        />
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
.section-block {
  padding: 60px 0;
}

.section-heading {
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 14px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #846754;
  font-size: 0.85rem;
}

h2 {
  margin: 0 0 16px;
  font-size: clamp(2rem, 3vw, 2.6rem);
}

.subtitle {
  margin: 0;
  color: #5a4f45;
}

.about-grid {
  display: grid;
  gap: 28px;
  margin-top: 32px;
}

.about-copy p {
  margin: 0 0 18px;
  line-height: 1.8;
  color: #4d4338;
}

.about-visual {
  min-height: 300px;
  border-radius: 28px;
  background: rgba(167, 150, 123, 0.12);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.about-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr 0.9fr;
  }
}
</style>
