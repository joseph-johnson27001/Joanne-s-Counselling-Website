<template>
  <section id="about" class="section-block about-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">About</p>
        <h2>Joanne Barnuevo</h2>
        <!-- <p class="subtitle">
          Counselor | Person-Centered | Integrative | Therapeutic Play Skills
          (PTUK/PTI)
        </p> -->
      </div>

      <div class="about-grid">
        <div class="about-copy">
          <p>
            My counselling journey may have began in the Philippines but it has since taken me across borders and cultures. I have lived, studied, and worked in both the Philippines and Thailand, gaining experience in youth support, education, and mental health. For the past 9 years, I have made Bangkok my home, where I've worked in international schools supporting children, adolescents and families from diverse backgrounds that continue to shape my approach to counselling.
          </p>
          <p>
            It all started during my final year of University where I interned at a youth reception centre, supporting young people through collaborating with a multidisciplinary team to address emotional and behavioural needs. Following a natural calamity, which is quite common in the Philippines, I trained as a Mental Health First Aid provider and volunteered in crisis support, which became a meaningful first step for me to put theory into practice.
          </p>
          <p>
            Life eventually brought me to Bangkok, where I initially worked as a kindergarten teacher. This deepened my understanding of child development and inspired me to pursue Therapeutic Play Skills training alongside my Master of Science in Counselling Psychology.
          </p>
          <p>
            I have since worked as a school counsellor in international schools, supporting students from early years through adolescence, as well as families and staff. During COVID, I also provided online counselling for adults, adapting my approach to maintain meaningful connection and continuity of care during uncertain times. My work has included individual and group counselling, wellbeing programmes and intervention development, and serving as a Designated Safeguarding Lead, always with a focus on holistic, culturally responsive care.
          </p>
          <p>
            My approach is integrative, drawing from person-centered, play-based, and evidence-informed modalities. I have supported clients through transitions, cross-cultural challenges, grief, trauma, relationship changes, and periods of feeling disconnected or searching for meaning.
          </p>
          <p>
            I've learned to appreciate the unique strengths and stories each person brings into my counselling room. This lead me to the counsellor I am today, committed to creating a warm, non-judgmental space where children, adolescents, and adults can feel heard, supported, and empowered to grow.
          </p>
          <p>
            I believe in ongoing professional development and adhere to the ethical standards of my affiliated organizations, which you can view here:
          </p>
          <p>
            <a href="https://drive.google.com/file/d/1PnoG0H1E7hb4leTSO0QpEF3wYPFY6gTM/view?pli=1" target="_blank">ASCA Ethical Standards</a>
          </p>
          <p>
            <a href="https://playtherapy.org.uk/wp-content/uploads/2025/08/PTUK-Ethical-Framework.pdf" target="_blank">Play Therapy UK Ethical Framework</a>
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
  background: #f0e8f5;
}

.about-grid {
  display: grid;
  gap: 48px;
  margin-top: 0;
  align-items: start;
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  max-height: 500px;
  margin: 0 auto;
}

.about-visual .image-fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

@media (min-width: 1200px) {
  .about-visual {
    aspect-ratio: auto;
    max-height: none;
    margin: 0;
  }
}

@media (min-width: 1200px) {
  .about-grid {
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
}
</style>
