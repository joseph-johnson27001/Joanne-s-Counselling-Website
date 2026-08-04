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
            Over the years, I've come to deeply appreciate the diversity and
            unique strengths each person brings to the counselling room. These
            experiences have shaped me into a counsellor who is committed to
            creating a warm, welcoming, and non-judgmental space where people
            can feel truly heard, supported, and empowered to grow in ways that
            are meaningful to them.
          </p>
          <!-- <p>
            I believe in ongoing professional development and adhere to the ethical standards of my affiliated organizations, which you can view here:
          </p>
          <p>
            <a href="https://drive.google.com/file/d/1PnoG0H1E7hb4leTSO0QpEF3wYPFY6gTM/view?pli=1" target="_blank">ASCA Ethical Standards</a>
          </p>
          <p>
            <a href="https://playtherapy.org.uk/wp-content/uploads/2025/08/PTUK-Ethical-Framework.pdf" target="_blank">Play Therapy UK Ethical Framework</a>
          </p> -->
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
