<template>
  <section id="services" class="section-block services-block">
    <div class="section-heading">
      <p class="eyebrow">Services</p>
      <h2>Healing is play. Listening is art. The rest is connection.</h2>
      <p class="subtitle">
        I offer counseling for children, adolescents, and adults with a person-centered, integrative approach.
      </p>
    </div>

    <div class="service-grid">
      <Card>
        <h3>Children (ages 4–18)</h3>
        <p>Support for school issues, anxiety, emotion regulation, and social skills.</p>
      </Card>
      <Card>
        <h3>Adolescents</h3>
        <p>Guidance through identity, relationships, stress, and transitions.</p>
      </Card>
      <Card>
        <h3>Adults</h3>
        <p>Individual support for life changes, grief, self-esteem, and expat challenges.</p>
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
          <li>Anxiety, depression, life transitions, relocation, expat issues</li>
          <li>Emotion regulation, self-esteem, identity development, relationships</li>
          <li>Grief, stress management, ADHD, autism support, parenting, school concerns</li>
          <li>Bullying, social skills, mindfulness, cultural adaptation, LGBTQIA+ support</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/ui/Card.vue'

export default {
  name: 'ServicesSection',
  components: {
    Card,
  },
}
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
  margin: 0 0 36px;
  color: #4d4338;
  line-height: 1.7;
}

.service-grid {
  display: grid;
  gap: 24px;
  margin-bottom: 34px;
}

.service-grid h3 {
  margin-top: 0;
}

.service-list {
  display: grid;
  gap: 28px;
}

.service-list h4 {
  margin-bottom: 14px;
  color: #4c3a2f;
}

.service-list ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #51463d;
}

.service-list li {
  margin-bottom: 0.9rem;
  line-height: 1.7;
}

@media (min-width: 760px) {
  .service-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .service-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
