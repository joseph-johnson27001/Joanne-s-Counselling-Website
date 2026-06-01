<template>
  <section id="services" class="section-block services-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">Services</p>
        <h2>Online & In-Person Sessions</h2>
      </div>

      <div class="service-grid">
        <Card>
          <img
            :src="chairImage"
            alt="Comfortable chair for individual counselling"
            class="service-card-image"
          />
          <h3>Counselling</h3>
          <p>
            One-on-one support for children, adolescents, and adults navigating
            life's challenges with a person-centered approach.
          </p>
        </Card>
        <Card>
          <img
            :src="playTherapyImage"
            alt="Play therapy for children"
            class="service-card-image"
          />
          <div class="card-heading-with-chip">
            <h3>Play Therapy</h3>
            <span class="chip">In training</span>
          </div>
          <p>
            Therapeutic exploration through play, art, and creative expression
            to help process emotions and build resilience.
          </p>
        </Card>
      </div>

      <div class="service-list">
        <p class="specialization-intro">
          I provide therapeutic support for a wide range of concerns, including:
        </p>
        <ul>
          <li>
            <strong>Anxiety & Stress:</strong> General, academic, and social
            anxiety, alongside stress management.
          </li>
          <li>
            <strong>Mood & Emotional Regulation:</strong> Persistent sadness,
            anger management, and emotional expression.
          </li>
          <li>
            <strong>Neurodiversity:</strong> Support for individuals with ADHD
            and ASD.
          </li>
          <li>
            <strong>Life Transitions:</strong> Navigating major life changes,
            including moving countries or changing schools.
          </li>
          <li>
            <strong>Identity & Self-Esteem:</strong> Gender and identity
            exploration, self-discovery, and building confidence.
          </li>
          <li>
            <strong>Relationships & Social Challenges:</strong> Family dynamics,
            relationship concerns, friendship difficulties, and bullying.
          </li>
          <li>
            <strong>Grief & Loss:</strong> Processing bereavement and other
            forms of loss.
          </li>
          <li>
            <strong>Daily Functioning:</strong> Addressing sleep issues and
            related behavioral challenges.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/ui/Card.vue";
import chairImage from "@/assets/images/chair.jpg";
import playTherapyImage from "@/assets/images/play_therapy.jpg";

export default {
  name: "ServicesSection",
  components: {
    Card,
  },
  data() {
    return {
      chairImage,
      playTherapyImage,
    };
  },
};
</script>

<style scoped>
.section-block {
  background: #fef7e8;
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

.specialization-intro {
  margin: 0 0 24px 0;
  color: #4d4338;
  line-height: 1.8;
  font-size: 1.02rem;
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

.card-heading-with-chip {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 12px;
}

.card-heading-with-chip h3 {
  margin: 0;
}

.chip {
  display: inline-block;
  background: whitesmoke;
  color: #444;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  height: fit-content;
  text-transform: uppercase;
}

@media (min-width: 760px) {
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
