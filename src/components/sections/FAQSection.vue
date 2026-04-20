<template>
  <section id="faq" class="section-block faq-block">
    <div class="section-heading">
      <p class="eyebrow">FAQ</p>
      <h2>Questions families and clients often ask.</h2>
    </div>

    <div class="accordion-list">
      <Accordion title="What is your approach to counseling?">
        <p>
          My person-centered approach means I create a supportive space where
          you can share your story at your own pace. Healing often begins with
          playful exploration, attentive listening, and building trust in our
          connection.
        </p>
      </Accordion>

      <Accordion title="How do I book an appointment?">
        <p>
          Email me at joanneb.counselling@gmail.com. A simple introduction is
          all that’s needed.
        </p>
      </Accordion>

      <Accordion title="What age groups do you work with?">
        <p>Children (4–18), adolescents, and adults.</p>
      </Accordion>

      <Accordion title="Do you offer online sessions?">
        <p>Yes, in-person and online options are available.</p>
      </Accordion>

      <Accordion title="What is your cancellation policy?">
        <p>
          Please notify me at least 24 hours in advance to avoid session
          charges.
        </p>
      </Accordion>

      <Accordion title="Is parental consent required for minors?">
        <p>
          Yes, in Thailand, parental or legal guardian consent is required for
          anyone under 20.
        </p>
      </Accordion>
    </div>
  </section>
</template>

<script>
import Accordion from "@/components/ui/Accordion.vue";

export default {
  name: "FAQSection",
  components: {
    Accordion,
  },
};
</script>

<style scoped>
.section-block {
  background: #faf7f3;
  padding: 40px 40px;
  scroll-margin-top: 100px;
}

.accordion-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 0;
}

.accordion-list p {
  margin: 0;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .accordion-list {
    grid-template-columns: 1fr;
  }
}
</style>
