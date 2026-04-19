<template>
  <footer class="site-footer">
    <div>
      <p>Joanne Barnuevo Counselling</p>
      <p>Supporting children, adolescents, and adults in Bangkok and online.</p>
    </div>
    <div>
      <p>
        Email:
        <a href="mailto:joanneb.counselling@gmail.com"
          >joanneb.counselling@gmail.com</a
        >
      </p>
      <p>© 2026 Joanne Barnuevo</p>
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
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 24px 40px;
  margin-top: 40px;
  color: white;
  background: #b86b47;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.site-footer a {
  color: white;
  text-decoration: underline;
}

@media (max-width: 740px) {
  .site-footer {
    flex-direction: column;
  }
}
</style>
