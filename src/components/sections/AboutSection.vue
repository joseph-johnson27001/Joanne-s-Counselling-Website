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
            My name is Joanne. My roots are in the Philippines, but I have been
            living and working in Bangkok since 2017. My journey into
            counselling began in 2021, shaped by years of working in education
            and mental health, as well as my own experiences adapting to a new
            country and embracing diverse cultures. I hold a Master of Science
            in Counselling Psychology and am currently training in therapeutic
            play.
          </p>
          <p>
            I support children, adolescents, and adults who are navigating a
            wide range of challenges, including general, academic, and social
            anxiety, stress, anger, persistent sadness, ADHD, ASD, grief and
            loss, bereavement, relationship and family concerns, bullying,
            friendship difficulties, sleep issues, transitions such as moving
            countries or schools, confidence, gender and identity and
            self-discovery. Having experienced firsthand the impact of change
            and new environments, I bring empathy and understanding to my work.
          </p>
          <p>
            Over the years, I've come to deeply appreciate the diversity and
            unique strengths each person brings to the counselling room. These
            experiences have shaped me into a counsellor who is committed to
            creating a warm, welcoming, and non-judgmental space. Here,
            children, adolescents, and adults can feel truly heard, supported,
            and empowered to grow in ways that are meaningful to them.
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
