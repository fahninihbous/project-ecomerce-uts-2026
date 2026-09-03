<template>
  <!-- Vue Router akan otomatis menampilkan HomeView di '/' atau LoginView di '/login' -->
  <router-view />
</template>

<script setup>
import { ref } from 'vue'

const cartCount = ref(0)
</script>

<template>
  <div class="home-container">
    
    <!-- Hero Banner Section -->
    <header class="hero-wrapper">
      
      <!-- Navbar Minimalis -->
      <nav class="navbar">
        <div class="nav-left">
          <router-link to="/shop" class="nav-link">SHOP</router-link>
          <router-link to="/about" class="nav-link">OUR MISSION</router-link>
        </div>

        <div class="nav-center">
          <router-link to="/" class="brand-logo">ATELIER</router-link>
        </div>

        <div class="nav-right">
          <!-- Icon Pencarian -->
          <button class="icon-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          <!-- Icon Keranjang -->
          <button class="icon-btn cart-btn" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="cart-badge">{{ cartCount }}</span>
          </button>

          <!-- Icon Akun / Login -->
          <router-link to="/login" class="icon-btn" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </router-link>
        </div>
      </nav>

      <!-- Hero Content -->
      <div class="hero-content">
        <div class="hero-text-card">
          <h1 class="hero-title">Spreading Comfort & Style</h1>
          <p class="hero-subtitle">Discover our new pastel apparel collection.</p>
          <router-link to="/shop" class="btn-hero">Shop Collection</router-link>
        </div>
      </div>

    </header>

    <!-- Mission / Tagline Section (Bawah Hero) -->
    <section class="mission-section">
      <h2 class="mission-statement">
        ATELIER apparel brings effortless elegance and sustainable fashion to wardrobes everywhere.
      </h2>
    </section>

    <!-- Floating Support Button -->
    <button class="support-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      Support
    </button>

  </div>
</template>

<style scoped>
.home-container {
  font-family: 'Inter', sans-serif;
  color: #2c3e50;
  background-color: #ffffff;
  position: relative;
  min-height: 100vh;
}

.hero-wrapper {
  position: relative;
  min-height: 85vh;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%);
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
}

.nav-left, .nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #1e3a8a;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
}

.nav-link:hover {
  opacity: 0.8;
}

.brand-logo {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 4px;
  color: #1e3a8a;
  text-decoration: none;
}

.icon-btn {
  background: none;
  border: none;
  color: #1e3a8a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #ffffff;
  color: #1e3a8a;
  font-size: 0.65rem;
  font-weight: bold;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 4rem;
}

.hero-text-card {
  max-width: 450px;
}

.hero-title {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 1rem;
}

.hero-subtitle {
  color: #eff6ff;
  font-size: 1.1rem;
  margin-bottom: 1.75rem;
}

.btn-hero {
  display: inline-block;
  padding: 0.85rem 2rem;
  background-color: #1e3a8a;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-hero:hover {
  background-color: #1e40af;
  transform: translateY(-2px);
}

.mission-section {
  padding: 5rem 3rem;
  background-color: #ffffff;
  text-align: left;
}

.mission-statement {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #1e3a8a;
  max-width: 900px;
  line-height: 1.3;
}

.support-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #475569;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .mission-statement {
    font-size: 1.75rem;
  }
  .hero-content {
    padding: 0 1.5rem;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
}
</style>