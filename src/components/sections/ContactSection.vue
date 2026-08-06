<template>
  <section id="contact" class="section-block contact-block">
    <div class="section-content">
      <div class="contact-layout">
        <div class="section-heading">
          <p class="eyebrow">Contact</p>
          <h2>Ready To Connect?</h2>
          <p class="subtitle">
            Booking is simple. Send a message to
            <a href="mailto:joanneb.counselling@gmail.com" class="brand-link"
              >joanneb.counselling@gmail.com</a
            >
            with a brief introduction and what you’d like to share in
            counselling. I’ll respond with next steps and available times.
          </p>
        </div>

        <div class="contact-action">
          <Button href="mailto:joanneb.counselling@gmail.com">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/Button.vue";

export default {
  name: "ContactSection",
  components: {
    Button,
  },
};
</script>

<style scoped>
.contact-block {
  background: var(--color-band-moss);
}

.contact-layout {
  display: grid;
  gap: var(--space-6);
  align-items: end;
}

.section-heading {
  margin-bottom: 0;
}

.contact-action {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

@media (min-width: 900px) {
  .contact-layout {
    grid-template-columns: 1.4fr 1fr;
    gap: var(--space-8);
  }

  .contact-action {
    align-items: flex-end;
    text-align: right;
  }
}
</style>
