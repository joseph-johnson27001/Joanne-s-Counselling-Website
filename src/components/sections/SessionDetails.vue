<template>
  <section id="sessions" class="section-block sessions-block">
    <div class="section-heading">
      <p class="eyebrow">Session details</p>
      <h2>Thoughtful support built around your needs.</h2>
    </div>

    <div class="sessions-grid">
      <div class="detail-list">
        <div class="detail-item">
          <h3>Duration</h3>
          <p>1 hour</p>
        </div>
        <div class="detail-item">
          <h3>Location</h3>
          <p>Bangkok and online</p>
        </div>
        <div class="detail-item">
          <h3>Payment</h3>
          <p>Bank transfer</p>
        </div>
        <div class="detail-item">
          <h3>Cancellation</h3>
          <p>Please notify at least 24 hours in advance to avoid session charges.</p>
        </div>
      </div>

      <div class="session-visual" role="img" aria-label="Image placeholder for session information and support">
        <span>Visual placeholder</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SessionDetails',
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

.sessions-grid {
  display: grid;
  gap: 30px;
}

.detail-list {
  display: grid;
  gap: 18px;
}

.detail-item {
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(45, 42, 36, 0.1);
}

.detail-item h3 {
  margin: 0 0 10px;
  color: #4c3a2f;
}

.detail-item p {
  margin: 0;
  color: #55503f;
  line-height: 1.7;
}

.session-visual {
  min-height: 320px;
  border-radius: 32px;
  background: rgba(167, 150, 123, 0.14);
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #7d604f;
}

@media (min-width: 900px) {
  .sessions-grid {
    grid-template-columns: 1fr 0.9fr;
  }
}
</style>
