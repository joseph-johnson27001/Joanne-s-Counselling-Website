<template>
  <section id="contact" class="section-block contact-block">
    <div class="section-heading">
      <p class="eyebrow">Contact</p>
      <h2>Ready to connect?</h2>
      <p class="subtitle">
        Booking is simple. Send a message to joanneb.counselling@gmail.com with
        a brief introduction and what you’d like to share in counseling. I’ll
        respond with next steps and available times.
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

      <div class="contact-card image-placeholder-card">
        <img
          src="https://picsum.photos/seed/joanne-contact/640/420"
          alt="Contact and counseling placeholder image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.section-block {
  background: #f5e9e2;
  padding: 40px 40px;
  scroll-margin-top: 100px;
}

.contact-grid {
  display: grid;
  gap: 32px;
}

.contact-card {
  padding: 32px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(184, 107, 71, 0.08);
  box-shadow: 0 8px 24px rgba(45, 42, 36, 0.06);
  transition: all 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 16px 40px rgba(45, 42, 36, 0.1);
  border-color: rgba(184, 107, 71, 0.16);
}

.contact-card h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.1rem;
}

.contact-card ul {
  margin: 0;
  padding-left: 1.5rem;
  line-height: 1.85;
}

.contact-card li {
  margin-bottom: 8px;
}

.contact-card p {
  margin: 0;
  line-height: 1.8;
  color: #4d4338;
}

.image-placeholder-card {
  min-height: 280px;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: #7d604f;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 116, 0.15) 0%,
    rgba(184, 107, 71, 0.1) 100%
  );
  font-weight: 700;
  border: 1px solid rgba(184, 107, 71, 0.08);
  box-shadow: 0 8px 24px rgba(45, 42, 36, 0.06);
}

.image-placeholder-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px;
  }
}
</style>
