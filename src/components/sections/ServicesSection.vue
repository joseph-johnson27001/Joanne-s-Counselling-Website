<template>
  <section id="services" class="section-block services-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">Services</p>
        <!-- <h2>Healing is play. Listening is art. The rest is connection.</h2> -->
        <!-- <p class="subtitle">
          I offer tailored counselling through individual sessions and play
          therapy for children, adolescents, and adults.
        </p> -->
        <p>
          I work with a wide range of concerns. Whether you're navigating
          anxiety, life transitions, relationship challenges, or simply seeking
          support for growth, I'm here to help.
        </p>
      </div>

      <div class="service-grid">
        <Card>
          <img
            src="https://picsum.photos/seed/joanne-individual/480/320"
            alt="Individual counselling placeholder image"
            class="service-card-image"
          />
          <h3>Individual Counselling</h3>
          <p>
            One-on-one support for children, adolescents, and adults navigating
            life's challenges with a person-centered approach.
          </p>
        </Card>
        <Card>
          <img
            src="https://picsum.photos/seed/joanne-play-therapy/480/320"
            alt="Play therapy placeholder image"
            class="service-card-image"
          />
          <h3>Play Therapy</h3>
          <p>
            Therapeutic exploration through play, art, and creative expression
            to help process emotions and build resilience.
          </p>
        </Card>
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

@media (min-width: 760px) {
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
