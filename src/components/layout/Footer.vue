<template>
  <footer class="section-block site-footer">
    <div class="footer-content">
      <div>
        <p>Joanne Barnuevo Counselling</p>
        <p>
          Supporting children, adolescents, and adults in Bangkok and online.
        </p>
      </div>
      <div>
        <p>
          <a href="mailto:joanneb.counselling@gmail.com"
            >joanneb.counselling@gmail.com</a
          >
        </p>
        <p>© 2026 Joanne Barnuevo</p>
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
  color: white;
  background: #3d5a73;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  max-width: 1400px;
  width: 100%;
}

@media (max-width: 740px) {
  .footer-content {
    flex-direction: column;
    gap: 24px;
  }
}

.site-footer div {
  min-width: 240px;
}

.site-footer p {
  margin: 0 0 10px 0;
  line-height: 1.7;
  font-size: 0.95rem;
}

.site-footer p:first-child {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 12px;
}

.site-footer a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.site-footer a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.8);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.site-footer a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 740px) {
  .site-footer {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
