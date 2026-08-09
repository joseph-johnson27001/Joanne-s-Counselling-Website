<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-meta">
        <p class="footer-meta-heading">Memberships &amp; ethics</p>
        <ul class="membership-list">
          <li v-for="item in memberships" :key="item.org">
            <span class="membership-org">{{ item.org }}</span>
            <span class="membership-role">{{ item.role }}</span>
            <a
              :href="item.href"
              class="membership-link"
              target="_blank"
              rel="noopener noreferrer"
              >{{ item.linkLabel }}</a
            >
          </li>
        </ul>
      </div>

      <div class="footer-top">
        <div class="footer-brand">
          <p class="footer-name">Joanne Barnuevo</p>
          <p class="footer-tagline">
            Supporting children, adolescents, and adults in-person and online.
          </p>
        </div>
        <p class="footer-copy">© 2026 Joanne Barnuevo</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      memberships: [
        {
          org: "BACP",
          role: "Individual Member",
          linkLabel: "Ethical Framework",
          href: "https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/",
        },
        {
          org: "PTUK",
          role: "Play Therapy UK",
          linkLabel: "Ethical Framework",
          href: "https://playtherapy.org.uk/wp-content/uploads/2025/08/PTUK-Ethical-Framework.pdf",
        },
        {
          org: "ISCA",
          role: "International School Counsellor Association",
          linkLabel: "ASCA Ethical Standards",
          href: "https://drive.google.com/file/d/1PnoG0H1E7hb4leTSO0QpEF3wYPFY6gTM/view",
        },
      ],
    };
  },
};
</script>

<style scoped>
.site-footer {
  color: var(--color-chrome-text);
  background: var(--color-chrome);
  border-top: 1px solid var(--color-chrome-border);
  padding: var(--space-7) var(--space-section-x) var(--space-6);
}

.footer-inner {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: var(--space-6);
}

.footer-meta {
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--color-chrome-border);
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  gap: var(--space-4) var(--space-6);
}

.footer-brand {
  max-width: 36rem;
}

.footer-name {
  margin: 0 0 var(--space-2);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-md);
  color: var(--color-chrome-text);
  letter-spacing: var(--tracking-tight);
}

.footer-tagline {
  margin: 0;
  line-height: var(--leading-body);
  font-size: var(--text-sm);
  color: var(--color-chrome-muted);
}

.footer-copy {
  margin: 0;
  font-size: 0.8rem;
  color: var(--color-chrome-muted);
}

.footer-meta-heading {
  margin: 0 0 var(--space-4);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-chrome-muted);
}

.membership-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-5);
  grid-template-columns: 1fr;
}

.membership-list li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  min-width: 0;
}

.membership-org {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-chrome-text);
  letter-spacing: 0.02em;
}

.membership-role {
  font-size: 0.8rem;
  color: var(--color-chrome-muted);
  line-height: 1.4;
}

.membership-link {
  margin-top: 0.15rem;
  color: var(--color-accent);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  border-bottom: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.membership-link:hover {
  color: var(--color-accent-hover);
}

.membership-link:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
  border-radius: 2px;
}

@media (min-width: 720px) {
  .membership-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-6);
  }
}
</style>
