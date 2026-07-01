<template>
  <section id="services" class="section-block services-block">
    <div class="section-content">
      <div class="section-heading">
        <p class="eyebrow">Services</p>
        <h2>Online & In-Person Sessions</h2>
      </div>

      <article class="counselling-panel card-base">
        <h3 class="panel-title">Individual Counselling</h3>

        <div class="panel-image visual-container">
          <img
            :src="chairImage"
            alt="Comfortable chair in a warm counselling space"
            class="image-fill"
          />
        </div>

        <div class="panel-body">
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
            class="spec-card"
          >
            <span
              class="spec-accent"
              :style="{ background: spec.accent }"
              aria-hidden="true"
            ></span>
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
          accent: "linear-gradient(135deg, #d4af74 0%, #b86b47 100%)",
        },
        {
          title: "Mood & Emotional Regulation",
          description:
            "Persistent sadness, anger management, and emotional expression.",
          accent: "linear-gradient(135deg, #c4a8d4 0%, #9b7bb8 100%)",
        },
        {
          title: "Neurodiversity",
          description: "Support for individuals with ADHD and ASD.",
          accent: "linear-gradient(135deg, #8fa87a 0%, #6d9460 100%)",
        },
        {
          title: "Life Transitions",
          description:
            "Navigating major life changes, including moving countries or changing schools.",
          accent: "linear-gradient(135deg, #e8b896 0%, #c9886a 100%)",
        },
        {
          title: "Identity & Self-Esteem",
          description:
            "Gender and identity exploration, self-discovery, and building confidence.",
          accent: "linear-gradient(135deg, #a8c4d4 0%, #7a9bb8 100%)",
        },
        {
          title: "Relationships & Social Challenges",
          description:
            "Family dynamics, relationship concerns, friendship difficulties, and bullying.",
          accent: "linear-gradient(135deg, #d4c4a8 0%, #b8a07a 100%)",
        },
        {
          title: "Grief & Loss",
          description: "Processing bereavement and other forms of loss.",
          accent: "linear-gradient(135deg, #b8a8c4 0%, #8a7a9b 100%)",
        },
        {
          title: "Daily Functioning",
          description:
            "Addressing sleep issues and related behavioral challenges.",
          accent: "linear-gradient(135deg, #a8d4c4 0%, #7ab8a0 100%)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-block {
  background: #fef7e8;
}

.counselling-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 64px;
  padding: 28px;
  transition: none;
}

.counselling-panel:hover {
  box-shadow:
    0 8px 24px rgba(45, 42, 36, 0.08),
    0 2px 8px rgba(45, 42, 36, 0.04);
  border-color: rgba(184, 107, 71, 0.08);
}

.panel-title {
  margin: 0;
  font-size: 1.35rem;
  color: #4c3a2f;
}

.panel-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  height: auto;
  box-shadow: none;
}

.panel-image .image-fill {
  object-fit: cover;
  object-position: center;
}

.panel-body p {
  margin: 0 0 22px;
  line-height: 1.85;
  color: #4d4338;
  font-size: 1.02rem;
}

.session-highlights {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.session-highlights li {
  position: relative;
  padding-left: 22px;
  color: #51463d;
  line-height: 1.7;
  font-size: 0.95rem;
}

.session-highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8fa87a 0%, #b86b47 100%);
}


.spec-grid {
  display: grid;
  gap: 18px;
}

.spec-card {
  position: relative;
  padding: 24px 24px 24px 28px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(184, 107, 71, 0.08);
  box-shadow:
    0 8px 24px rgba(45, 42, 36, 0.08),
    0 2px 8px rgba(45, 42, 36, 0.04);
  overflow: hidden;
}

.spec-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
}

.spec-card h4 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  color: #4c3a2f;
}

.spec-card p {
  margin: 0;
  color: #6b5f54;
  font-size: 0.92rem;
  line-height: 1.65;
}

@media (min-width: 640px) {
  .spec-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .counselling-panel {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "image title"
      "image body";
    gap: 0;
    align-items: start;
    padding: 0;
    overflow: hidden;
  }

  .panel-title {
    grid-area: title;
    align-self: end;
    padding: 32px 32px 12px 28px;
    font-size: 1.4rem;
  }

  .panel-image {
    grid-area: image;
    aspect-ratio: unset;
    height: auto;
    align-self: stretch;
    border-radius: 24px 0 0 24px;
  }

  .panel-body {
    grid-area: body;
    padding: 0 32px 32px 28px;
  }
}

@media (min-width: 1024px) {
  .counselling-panel {
    grid-template-columns: minmax(280px, 38%) 1fr;
  }

  .panel-title {
    padding: 36px 36px 12px 32px;
    font-size: 1.45rem;
  }

  .panel-body {
    padding: 0 36px 36px 32px;
  }
}

@media (min-width: 1100px) {
  .spec-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
