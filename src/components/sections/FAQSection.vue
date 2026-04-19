<template>
  <section id="faq" class="section-block faq-block">
    <div class="section-heading">
      <p class="eyebrow">FAQ</p>
      <h2>Questions families and clients often ask.</h2>
    </div>

    <div class="accordion-list">
      <Accordion title="What is your approach to counseling?">
        <p>My person-centered approach means I create a supportive space where you can share your story at your own pace. Healing often begins with playful exploration, attentive listening, and building trust in our connection.</p>
      </Accordion>

      <Accordion title="How do I book an appointment?">
        <p>Email me at joanneb.counselling@gmail.com. A simple introduction is all that’s needed.</p>
      </Accordion>

      <Accordion title="What age groups do you work with?">
        <p>Children (4–18), adolescents, and adults.</p>
      </Accordion>

      <Accordion title="Do you offer online sessions?">
        <p>Yes, in-person and online options are available.</p>
      </Accordion>

      <Accordion title="What is your cancellation policy?">
        <p>Please notify me at least 24 hours in advance to avoid session charges.</p>
      </Accordion>

      <Accordion title="Is parental consent required for minors?">
        <p>Yes, in Thailand, parental or legal guardian consent is required for anyone under 20.</p>
      </Accordion>
    </div>
  </section>
</template>

<script>
import Accordion from '@/components/ui/Accordion.vue'

export default {
  name: 'FAQSection',
  components: {
    Accordion,
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
  margin: 0 0 28px;
  font-size: clamp(2rem, 3vw, 2.6rem);
}

.accordion-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}

.accordion-list p {
  margin: 0;
}
</style>
