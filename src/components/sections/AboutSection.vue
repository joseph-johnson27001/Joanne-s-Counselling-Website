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
            A couple of students recently interviewed me for their GCSE
            assignment. One of them asked if I always knew I wanted to study
            psychology. Right away, my response was "I didn't!". Growing up in
            an Asian household, for me back then, meant balancing what my
            parents hoped for me (Ahem! medical school) with what I wanted for
            myself. At the time, (and crossing my fingers that I wasn't the only
            one) I didn't really have a clear answer. But what I later realized
            is how much I value human connection.
          </p>
          <p>
            This became clear while I was undertaking my Bachelor of Science in
            Psychology as an intern in a youth reception centre where I
            supported young people through assessments, facilitated group
            activities, and worked alongside a team to address emotional and
            behavioural needs. After a natural calamity in the Philippines, I
            trained as a Mental Health First Aid provider to volunteer and offer
            my support. These experiences gave me the chance to put theory into
            practice and helped clarify my path forward.
          </p>
          <p>
            Months later, as I was preparing to apply for my masters, life threw
            a curve ball and I have made the decision to move to Bangkok to
            support my sister through a health crisis. During that time, I
            started teaching as a kindergarten teacher, which gave me first-hand
            experience in child development and social-emotional learning.
            Working with young children further deepened my understanding how
            behaviour is a form of communication. This insight inspired me to
            pursue a certification in Therapeutic Play skills, enhancing my
            ability to connect with and support children in meaningful ways,
            meeting them where they are.
          </p>
          <p>
            By then, with a Master of Science in Counselling Psychology, I have
            gained experience working with individuals online and later in
            person as a school counsellor in international schools. These roles
            (moving to a new country, changes in careers and a global pandemic
            later) have allowed me to support clients from a wide range of
            cultures, backgrounds, and walks of life.
          </p>
          <p>
            I've learned to appreciate diversity and the unique strengths and
            stories each person brings into the counselling room. This lead me
            to the counsellor I am today, committed to creating a warm,
            non-judgmental space where children, adolescents, and adults can
            feel heard, supported, and empowered to grow.
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
