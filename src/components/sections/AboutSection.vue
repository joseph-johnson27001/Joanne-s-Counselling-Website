<template>
  <section id="about" class="section-block about-block">
    <div class="section-content">
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
            My path in psychology began with a Bachelor of Science in
            Psychology, shaped by volunteering at national mental health events
            and clinical internships with youth. Responding as a Mental Health
            First Aid volunteer during Typhoon Haiyan deepened my passion for
            practical, compassionate support.
          </p>
          <p>
            Moving to Bangkok to help my family, I taught in daycare and
            kindergarten settings, focusing on each child’s emotional world. The
            COVID-19 pandemic underscored the importance of connection,
            especially for expat families facing isolation and change.
          </p>
          <p>
            I completed my Master of Science in Counselling Psychology,
            researching parental efficacy and transactional analysis, and shared
            my work at conferences in Japan and Thailand.
          </p>
          <p>
            Now in private practice, my work is guided by play, artful
            listening, and genuine connection. I support children, adolescents,
            and adults in discovering strengths, navigating challenges, and
            embracing growth.
          </p>
        </div>

        <div class="about-visual visual-container">
          <img
            src="@/assets/images/Joanne_Cambodia.jpeg"
            alt="Joanne Barnuevo, MSCP - Counselor"
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
.section-block {
  background: #f5e9e2;
}

.about-grid {
  display: grid;
  gap: 48px;
  margin-top: 0;
}

.about-copy p {
  margin: 0 0 24px;
  line-height: 1.85;
  color: #4d4338;
  font-size: 1.02rem;
}

.about-copy p:last-child {
  margin-bottom: 0;
}

.about-visual {
  max-height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-visual .image-fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

@media (min-width: 900px) {
  .about-grid {
    grid-template-columns: 5fr 3fr;
    gap: 30px;
  }
}
</style>
