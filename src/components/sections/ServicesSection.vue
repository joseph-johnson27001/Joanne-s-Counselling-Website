<template>
  <section id="services" class="section-block services-block">
    <div class="section-heading">
      <p class="eyebrow">Services</p>
      <h2>Healing is play. Listening is art. The rest is connection.</h2>
      <p class="subtitle">
        I offer counseling for children, adolescents, and adults with a
        person-centered, integrative approach.
      </p>
    </div>

    <div class="service-grid">
      <Card>
        <img
          src="https://picsum.photos/seed/joanne-children/480/320"
          alt="Children's counseling placeholder image"
          class="service-card-image"
        />
        <h3>Children (ages 4–18)</h3>
        <p>
          Support for school issues, anxiety, emotion regulation, and social
          skills.
        </p>
      </Card>
      <Card>
        <img
          src="https://picsum.photos/seed/joanne-adolescents/480/320"
          alt="Adolescents counseling placeholder image"
          class="service-card-image"
        />
        <h3>Adolescents</h3>
        <p>
          Guidance through identity, relationships, stress, and transitions.
        </p>
      </Card>
      <Card>
        <img
          src="https://picsum.photos/seed/joanne-adults/480/320"
          alt="Adults counseling placeholder image"
          class="service-card-image"
        />
        <h3>Adults</h3>
        <p>
          Individual support for life changes, grief, self-esteem, and expat
          challenges.
        </p>
      </Card>
    </div>

    <div class="service-list">
      <div>
        <h4>Types of counseling</h4>
        <ul>
          <li>Individual sessions</li>
          <li>Group sessions</li>
          <li>Parent guidance</li>
        </ul>
      </div>

      <div>
        <h4>Areas of specialization</h4>
        <ul>
          <li>
            Anxiety, depression, life transitions, relocation, expat issues
          </li>
          <li>
            Emotion regulation, self-esteem, identity development, relationships
          </li>
          <li>
            Grief, stress management, ADHD, autism support, parenting, school
            concerns
          </li>
          <li>
            Bullying, social skills, mindfulness, cultural adaptation, LGBTQIA+
            support
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/ui/Card.vue";

export default {
  name: "ServicesSection",
  components: {
    Card,
  },
};
</script>

<style scoped>
.section-block {
  background: #faf7f3;
}

.service-grid {
  display: grid;
  gap: 28px;
  margin-bottom: 64px;
}

.service-card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  margin-bottom: 18px;
}

.service-grid h3 {
  font-size: 1.3rem;
}

.service-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
}

.service-list h4 {
  margin: 0 0 18px 0;
  color: #4c3a2f;
  font-size: 1.1rem;
  letter-spacing: 0.3px;
}

.service-list ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #51463d;
}

.service-list li {
  margin-bottom: 12px;
  line-height: 1.8;
  font-size: 0.95rem;
}

@media (min-width: 760px) {
  .service-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .service-list {
    grid-template-columns: 1fr !important;
  }
}
</style>
