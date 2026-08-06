<template>
  <section id="services" class="section-block services-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">Services</p>
        <h2>Online & In-Person Sessions</h2>
      </div>

      <article class="counselling-panel">
        <div class="panel-image visual-container">
          <img
            :src="chairImage"
            alt="Comfortable counselling room for in-person therapy sessions in Bangkok"
            class="image-fill"
          />
        </div>

        <div class="panel-copy">
          <h3 class="panel-title">Individual Counselling</h3>
          <p>
            One-on-one support for children, adolescents, and adults navigating
            life's challenges with a person-centred approach — through
            conversation, creative activities, or a blend of both.
          </p>

          <ul class="session-highlights">
            <li v-for="item in sessionHighlights" :key="item">{{ item }}</li>
          </ul>
        </div>
      </article>

      <div class="specializations">
        <div class="spec-grid">
          <article
            v-for="spec in specializations"
            :key="spec.title"
            class="spec-item"
          >
            <h4>{{ spec.title }}</h4>
            <p>{{ spec.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chairImage from "@/assets/images/chair.jpg";

export default {
  name: "ServicesSection",
  data() {
    return {
      chairImage,
      sessionHighlights: [
        "Online and in-person sessions in Bangkok",
        "Children (ages 4+), adolescents, and adults",
        "Person-centred, integrative, and creative methods",
      ],
      specializations: [
        {
          title: "Anxiety & Stress",
          description:
            "General, academic, and social anxiety, alongside stress management.",
        },
        {
          title: "Mood & Emotional Regulation",
          description:
            "Persistent sadness, anger management, and emotional expression.",
        },
        {
          title: "Neurodiversity",
          description: "Support for individuals with ADHD and ASD.",
        },
        {
          title: "Life Transitions",
          description:
            "Navigating major life changes, including moving countries or changing schools.",
        },
        {
          title: "Identity & Self-Esteem",
          description:
            "Gender and identity exploration, self-discovery, and building confidence.",
        },
        {
          title: "Relationships & Social Challenges",
          description:
            "Family dynamics, relationship concerns, friendship difficulties, and bullying.",
        },
        {
          title: "Grief & Loss",
          description: "Processing bereavement and other forms of loss.",
        },
        {
          title: "Daily Functioning",
          description:
            "Addressing sleep issues and related behavioral challenges.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-block {
  background: var(--color-band-warm);
}

.counselling-panel {
  display: grid;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
  align-items: center;
}

.panel-image {
  width: 100%;
  aspect-ratio: 4 / 3;
}

.panel-image .image-fill {
  object-fit: cover;
  object-position: center;
}

.panel-title {
  margin: 0 0 var(--space-4);
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--color-ink);
}

.panel-copy p {
  margin: 0 0 var(--space-5);
  line-height: var(--leading-body);
  color: var(--color-ink-muted);
  font-size: var(--text-base);
}

.session-highlights {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-3);
}

.session-highlights li {
  position: relative;
  padding-left: 1.15rem;
  color: var(--color-ink-muted);
  line-height: var(--leading-body);
  font-size: var(--text-sm);
}

.session-highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
}

.specializations {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-7);
}

.spec-grid {
  display: grid;
  gap: var(--space-5) var(--space-7);
}

.spec-item {
  padding: 0;
  border: none;
  background: transparent;
}

.spec-item h4 {
  margin: 0 0 var(--space-2);
  font-size: var(--text-base);
  font-weight: 500;
  font-family: var(--font-body);
  color: var(--color-ink);
  letter-spacing: 0;
}

.spec-item p {
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
  line-height: var(--leading-body);
}

@media (min-width: 768px) {
  .counselling-panel {
    grid-template-columns: minmax(260px, 42%) 1fr;
    gap: var(--space-7);
  }

  .panel-image {
    aspect-ratio: 5 / 6;
  }

  .spec-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1100px) {
  .spec-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--space-8);
  }
}
</style>
