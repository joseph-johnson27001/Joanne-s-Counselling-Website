<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <p class="footer-name">Joanne Barnuevo</p>
        <p class="footer-tagline">
          Supporting children, adolescents, and adults in-person and online.
        </p>
      </div>
      <div class="footer-meta">
        <p>
          <a
            href="mailto:joanneb.counselling@gmail.com"
            class="footer-email"
            >joanneb.counselling@gmail.com</a
          >
        </p>
        <p class="footer-copy">© 2026 Joanne Barnuevo</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.site-footer {
  display: flex;
  justify-content: center;
  color: var(--color-chrome-text);
  background: var(--color-chrome);
  border-top: 1px solid var(--color-chrome-border);
  padding: var(--space-7) var(--space-section-x);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-6);
  max-width: var(--max-width);
  width: 100%;
}

.footer-brand,
.footer-meta {
  min-width: 220px;
}

.footer-name {
  margin: 0 0 var(--space-3);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-md);
  color: var(--color-chrome-text);
  letter-spacing: var(--tracking-tight);
}

.footer-tagline,
.footer-copy {
  margin: 0;
  line-height: var(--leading-body);
  font-size: var(--text-sm);
  color: var(--color-chrome-muted);
}

.footer-meta p {
  margin: 0 0 var(--space-3);
}

.footer-meta p:last-child {
  margin-bottom: 0;
}

.footer-email {
  color: var(--color-chrome-text);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--text-sm);
  border-bottom: 1px solid transparent;
  transition:
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.footer-email:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.footer-email:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
  border-radius: 2px;
}

@media (max-width: 740px) {
  .footer-content {
    flex-direction: column;
    gap: var(--space-5);
  }
}
</style>
