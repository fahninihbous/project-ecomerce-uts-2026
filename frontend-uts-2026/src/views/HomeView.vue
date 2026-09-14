<script setup>
import { ref } from 'vue'

const cartCount = ref(3)

const categories = [
  {
    name: 'T-Shirt',
    description: 'Casual terrace & graphic essentials',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Shirt',
    description: 'Classic button-downs & smart casual style',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Pants',
    description: 'Tailored chinos & relaxed denim',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Outerwear',
    description: 'Polo jackets, knitwear & windrunners',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop'
  }
]
</script>

<template>
  <div class="home-container">

    <!-- =========================
         HERO SECTION (FOOTBALL TRIBUNE CASUAL)
    ========================== -->
    <header class="hero-wrapper">

      <!-- NAVBAR -->
      <nav class="navbar">
        <div class="nav-left">
          <router-link to="/shop" class="nav-link">SHOP</router-link>
          <router-link to="/about" class="nav-link">OUR MISSION</router-link>
        </div>

        <div class="nav-center">
          <router-link to="/home" class="brand-logo">PROVIDENTIAL</router-link>
        </div>

        <div class="nav-right">
          <router-link to="/search" class="icon-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </router-link>

          <router-link to="/cart" class="icon-btn cart-btn" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
          </router-link>

          <router-link to="/user" class="icon-btn" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </router-link>
        </div>
      </nav>

      <!-- HERO CONTENT -->
      <div class="hero-content">
        <div class="hero-text-card">
          <span class="hero-tag">TERRACE CULTURE 2026</span>
          <h1 class="hero-title">Football Tribune & Casual Style</h1>
          <p class="hero-subtitle">Terinspirasi dari atmosfer tribun stadion dan kultur kasual klasik penuh elegansi.</p>
          <div class="hero-actions">
            <router-link to="/shop" class="btn-hero">Belanja Sekarang</router-link>
            <router-link to="/about" class="btn-hero-outline">Our Philosophy</router-link>
          </div>
        </div>
      </div>

    </header>


    <!-- =========================
         MISSION SECTION
    ========================== -->
    <section class="mission-section">
      <div class="mission-container">
        <span class="section-indicator">EST. PHILOSOPHY</span>
        <h2 class="mission-statement">
          Providential apparel brings effortless elegance and sustainable fashion to wardrobes everywhere.
        </h2>
      </div>
    </section>


    <!-- =========================
         CATEGORY SECTION
    ========================== -->
    <section class="category-section">
      <div class="category-header">
        <p class="category-label">EXPLORE</p>
        <h2 class="category-title">Kategori Populer</h2>
        <p class="category-description">
          Discover timeless pieces crafted for comfort, structural elegance, and everyday wearability.
        </p>
      </div>

      <div class="category-grid">
        <router-link
          v-for="category in categories"
          :key="category.name"
          to="/shop"
          class="category-card"
        >
          <div class="category-image-wrapper">
            <img :src="category.image" :alt="category.name" class="category-image" />
            <div class="category-overlay">
              <span class="view-category">View Collection</span>
            </div>
          </div>
          <div class="category-info">
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-text">{{ category.description }}</p>
          </div>
        </router-link>
      </div>
    </section>


    <!-- =========================
         PROMO BANNER
    ========================== -->
    <section class="promo-section">
      <div class="promo-container">
        <div class="promo-box">
          <h2 class="promo-title">Gunakan Kode: <span class="promo-highlight">CLOTH20</span></h2>
          <p class="promo-text">Dapatkan diskon 20% untuk pembelian pertama Anda</p>
          <router-link to="/shop" class="btn-promo">Belanja Sekarang</router-link>
        </div>
      </div>
    </section>


    <!-- =========================
         SUPPORT BUTTON
    ========================== -->
    <button class="support-btn" aria-label="Customer Support">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      <span>Support</span>
    </button>

  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

/* =========================
   GENERAL
========================= */
.home-container {
  font-family: 'Inter', sans-serif;
  color: #17243a;
  background: #ffffff;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* =========================
   HERO (MENGGUNAKAN FOTO TRIBUN/STADION CASUAL)
========================= */
.hero-wrapper {
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background-image: 
    linear-gradient(
      100deg,
      rgba(255, 250, 242, 0.96) 0%,
      rgba(255, 250, 242, 0.85) 40%,
      rgba(255, 250, 242, 0.3) 70%,
      rgba(255, 250, 242, 0.1) 100%
    ),
    url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* =========================
   NAVBAR
========================= */
.navbar {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 4rem;
  backdrop-filter: blur(4px);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #17243a;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  transition: opacity 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #17243a;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.brand-logo {
  color: #17243a;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 5px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.icon-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #17243a;
  background: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 4px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.icon-btn:hover {
  transform: translateY(-2px);
  opacity: 0.7;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #17243a;
  color: #ffffff;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 700;
  box-shadow: 0 2px 5px rgba(23, 36, 58, 0.2);
}

/* =========================
   HERO CONTENT
========================= */
.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.hero-text-card {
  max-width: 520px;
}

.hero-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #5c677d;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-title {
  margin: 0 0 1.2rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.1;
  color: #17243a;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  margin-bottom: 2rem;
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-hero {
  display: inline-block;
  padding: 0.95rem 2.2rem;
  background: #17243a;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(23, 36, 58, 0.15);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-hero:hover {
  background: #27364e;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(23, 36, 58, 0.25);
}

.btn-hero-outline {
  display: inline-block;
  padding: 0.95rem 1.8rem;
  background: transparent;
  color: #17243a;
  border: 1px solid rgba(23, 36, 58, 0.3);
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.btn-hero-outline:hover {
  border-color: #17243a;
  background: rgba(23, 36, 58, 0.03);
}

/* =========================
   MISSION
========================= */
.mission-section {
  padding: 6rem 3rem;
  background: #ffffff;
  text-align: center;
}

.mission-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-indicator {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #8c93a0;
  margin-bottom: 1.2rem;
}

.mission-statement {
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 1.4;
  color: #17243a;
}

/* =========================
   CATEGORY SECTION
========================= */
.category-section {
  padding: 5rem 3rem 6rem;
  background: #f8f6f2;
}

.category-header {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 4rem;
}

.category-label {
  margin: 0 0 0.8rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #717784;
}

.category-title {
  margin: 0 0 1rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: #17243a;
}

.category-description {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.7;
}

.category-grid {
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.category-card {
  display: block;
  background: #ffffff;
  text-decoration: none;
  color: #17243a;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(23, 36, 58, 0.1);
}

.category-image-wrapper {
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
  background: #e8e3dc;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.category-card:hover .category-image {
  transform: scale(1.06);
}

.category-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(23, 36, 58, 0.25);
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-overlay {
  opacity: 1;
}

.view-category {
  padding: 0.8rem 1.4rem;
  background: #ffffff;
  color: #17243a;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 3px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.category-card:hover .view-category {
  transform: translateY(0);
}

.category-info {
  padding: 1.6rem 1.4rem 1.8rem;
  text-align: center;
}

.category-name {
  margin: 0 0 0.4rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #17243a;
}

.category-text {
  margin: 0;
  color: #7b8190;
  font-size: 0.85rem;
  line-height: 1.5;
}

/* =========================
   PROMO SECTION
========================= */
.promo-section {
  padding: 4rem 3rem 6rem;
  background: #ffffff;
}

.promo-container {
  max-width: 1250px;
  margin: 0 auto;
}

.promo-box {
  background: linear-gradient(135deg, #17243a 0%, #27364e 100%);
  border-radius: 16px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 15px 35px rgba(23, 36, 58, 0.15);
}

.promo-title {
  margin: 0 0 1rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #ffffff;
}

.promo-highlight {
  color: #e2c182;
}

.promo-text {
  margin: 0 0 2rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
}

.btn-promo {
  display: inline-block;
  padding: 0.95rem 2.5rem;
  background: #ffffff;
  color: #17243a;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.btn-promo:hover {
  transform: translateY(-2px);
  background: #f8f6f2;
}

/* =========================
   SUPPORT BUTTON
========================= */
.support-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.35rem;
  border: none;
  border-radius: 30px;
  background: #17243a;
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(23, 36, 58, 0.25);
  transition: transform 0.2s ease, background 0.2s ease;
}

.support-btn:hover {
  transform: translateY(-2px);
  background: #27364e;
}

/* =========================
   RESPONSIVE DESIGN
========================= */
@media (max-width: 1100px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 900px) {
  .navbar {
    padding: 1.2rem 2rem;
  }
  
  .brand-logo {
    font-size: 1.4rem;
    letter-spacing: 3px;
  }

  .hero-content {
    padding: 0 2rem;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .promo-box {
    padding: 3rem 1.5rem;
  }

  .promo-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 1rem 1.2rem;
  }

  .nav-left {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.7rem;
    letter-spacing: 1px;
  }

  .brand-logo {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  .nav-right {
    gap: 1rem;
  }

  .hero-wrapper {
    min-height: 80vh;
    background-position: 60% center;
  }

  .hero-content {
    padding: 0 1.5rem;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-hero, .btn-hero-outline {
    text-align: center;
    padding: 0.85rem 1.5rem;
  }

  .mission-section {
    padding: 4rem 1.5rem;
  }

  .mission-statement {
    font-size: 1.6rem;
  }

  .category-section {
    padding: 4rem 1.2rem 5rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-image-wrapper {
    height: 400px;
  }

  .promo-section {
    padding: 3rem 1.2rem 4rem;
  }
}
</style>