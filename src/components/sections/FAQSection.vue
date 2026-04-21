<template>
  <section id="faq" class="section-block faq-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Questions families and clients often ask.</h2>
      </div>

      <div class="accordion-list">
        <Accordion title="What is your approach to counseling?">
          <p>
            My approach to counselling is person-centred and integrative. During
            sessions, we focus on understanding unique experiences, needs, and
            goals, and work on creating a warm, trusting environment where you
            feel heard and supported. I draw from different therapeutic methods
            that can span from cognitive-behavioural techniques to creative
            activities, so the therapeutic work is tailored to what works best
            for you. Your experience guides your sessions, and I adapt my
            approach to support you in the way that feels most helpful.
          </p>
        </Accordion>

        <Accordion title="How do I book an appointment?">
          <p>
            You can reach me by sending an email to
            <a href="mailto:joanneb.counselling@gmail.com" class="email-link"
              >joanneb.counselling@gmail.com</a
            >. A simple introduction is all that's needed.
          </p>
        </Accordion>

        <Accordion title="What age groups do you work with?">
          <p>Children (ages 4+), adolescents, and adults.</p>
        </Accordion>

        <Accordion title="Do you offer online sessions?">
          <p>Yes, in-person and online options are available.</p>
        </Accordion>
      </div>
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
  background: #fde8e0;
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

.email-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: #0052a3;
}

@media (max-width: 900px) {
  .accordion-list {
    grid-template-columns: 1fr;
  }
}
</style>
