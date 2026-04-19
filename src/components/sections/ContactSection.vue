<template>
  <section id="contact" class="section-block contact-block">
    <div class="section-heading">
      <p class="eyebrow">Contact</p>
      <h2>Ready to connect?</h2>
      <p class="subtitle">
        Booking is simple. Send a message to joanneb.counselling@gmail.com with a brief introduction and what you’d like to share in counseling. I’ll respond with next steps and available times.
      </p>
    </div>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Office Hours</h3>
        <ul>
          <li>Monday: 9:00–17:00</li>
          <li>Friday: 15:00–19:00</li>
          <li>Saturday: 9:00–16:00</li>
        </ul>
      </div>

      <div class="contact-card">
        <h3>Location</h3>
        <p>Bangkok (address provided upon booking)</p>
      </div>

      <div class="contact-card">
        <h3>Languages</h3>
        <p>English and Tagalog</p>
      </div>

      <div class="contact-card image-placeholder-card" role="img" aria-label="Illustration placeholder for contacting Joanne">
        <span>Contact image placeholder</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
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
  margin: 0 0 34px;
  color: #4d4338;
  line-height: 1.75;
}

.contact-grid {
  display: grid;
  gap: 24px;
}

.contact-card {
  padding: 26px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(45, 42, 36, 0.1);
}

.contact-card h3 {
  margin-top: 0;
}

.contact-card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.image-placeholder-card {
  min-height: 220px;
  display: grid;
  place-items: center;
  color: #7d604f;
  background: rgba(167, 150, 123, 0.14);
  font-weight: 700;
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
