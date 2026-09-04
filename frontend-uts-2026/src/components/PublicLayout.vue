<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const isLoggedIn = ref(false)

onMounted(() => {
  if (localStorage.getItem('token')) {
    isLoggedIn.value = true
  }
})

const logout = () => {
  localStorage.removeItem('token')
  isLoggedIn.value = false
  router.push('/login')
}
</script>

<template>
  <div class="public-layout">
    <!-- Navbar Tema Hitam Putih Abu Premium -->
    <header class="navbar">
      <div class="container d-flex justify-between align-center">
        <RouterLink to="/" class="logo">
          <span class="logo-icon">🛍️</span> Providential
        </RouterLink>

        <nav class="nav-links d-flex gap-4">
          <RouterLink to="/">Beranda</RouterLink>
          <RouterLink to="/produk">Produk</RouterLink>
        </nav>

        <div class="nav-actions">
          <RouterLink v-if="!isLoggedIn" to="/login" class="btn btn-primary">Login Admin</RouterLink>
          <div v-else class="d-flex gap-2">
            <RouterLink to="/admin" class="btn btn-secondary">Dashboard</RouterLink>
            <button @click="logout" class="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </header>

    <!-- Konten halaman akan masuk di sini (slot) -->
    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <div class="container text-center text-muted">
        <p>&copy; 2026 Toko Sederhana. Dibuat untuk Kelas XII RPL.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.public-layout {
  background-color: #0f0f0f;
  color: #f3f4f6;
  min-height: 100vh;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.25rem 0;
  background-color: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links a {
  font-weight: 500;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover, 
.nav-links a.router-link-active {
  color: #ffffff;
}

.btn-primary {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #e5e7eb;
}

.btn-secondary {
  background-color: #27272a;
  color: #ffffff;
  border: 1px solid #3f3f46;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: #3f3f46;
}

.btn-danger {
  background-color: transparent;
  color: #ef4444;
  border: 1px solid #7f1d1d;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-danger:hover {
  background-color: #7f1d1d;
  color: #ffffff;
}

.main-content {
  min-height: calc(100vh - 200px);
}

.footer {
  margin-top: 4rem;
  padding: 2rem 0;
  background-color: #121212;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.text-muted {
  color: #71717a;
}
</style>