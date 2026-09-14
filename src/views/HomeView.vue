<script setup>
import { ref } from 'vue'

const cartCount = ref(0)

const categories = [
  {
    name: 'T-Shirt',
    description: 'Comfortable everyday essentials',
    image: '/images/category-tshirt.jpg'
  },
  {
    name: 'Shirt',
    description: 'Classic and elegant styles',
    image: '/images/category-shirt.jpg'
  },
  {
    name: 'Pants',
    description: 'Simple and versatile fashion',
    image: '/images/category-pants.jpg'
  },
  {
    name: 'Outerwear',
    description: 'Layer your style beautifully',
    image: '/images/category-outerwear.jpg'
  }
]
</script>

<template>
  <div class="home-container">

    <!-- =========================
         HERO
    ========================== -->

    <header class="hero-wrapper">

      <!-- NAVBAR -->
      <nav class="navbar">

        <!-- LEFT NAV -->
        <div class="nav-left">

          <router-link
            to="/shop"
            class="nav-link"
          >
            SHOP
          </router-link>

          <router-link
            to="/about"
            class="nav-link"
          >
            OUR MISSION
          </router-link>

        </div>


        <!-- CENTER LOGO -->
        <div class="nav-center">

          <router-link
            to="/home"
            class="brand-logo"
          >
            PROVIDENTIAL
          </router-link>

        </div>


        <!-- RIGHT NAV -->
        <div class="nav-right">

          <!-- SEARCH -->
          <router-link
            to="/search"
            class="icon-btn"
            aria-label="Search"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
              />

              <path
                d="m21 21-4.3-4.3"
              />
            </svg>

          </router-link>


          <!-- CART -->
          <router-link
            to="/cart"
            class="icon-btn cart-btn"
            aria-label="Cart"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
              />

              <path
                d="M3 6h18"
              />

              <path
                d="M16 10a4 4 0 0 1-8 0"
              />
            </svg>


            <span class="cart-badge">
              {{ cartCount }}
            </span>

          </router-link>


          <!-- ACCOUNT -->
          <router-link
            to="/user"
            class="icon-btn"
            aria-label="Account"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
              />

              <circle
                cx="12"
                cy="7"
                r="4"
              />
            </svg>

          </router-link>

        </div>

      </nav>


      <!-- HERO CONTENT -->
      <div class="hero-content">

        <div class="hero-text-card">

          <h1 class="hero-title">
            Spreading Comfort & Style
          </h1>

          <p class="hero-subtitle">
            Discover our new apparel collection.
          </p>

          <router-link
            to="/shop"
            class="btn-hero"
          >
            Shop Collection
          </router-link>

        </div>

      </div>

    </header>


    <!-- =========================
         MISSION
    ========================== -->

    <section class="mission-section">

      <h2 class="mission-statement">
        Providential apparel brings effortless elegance and
        sustainable fashion to wardrobes everywhere.
      </h2>

    </section>


    <!-- =========================
         CATEGORY
    ========================== -->

    <section class="category-section">

      <!-- CATEGORY HEADER -->

      <div class="category-header">

        <p class="category-label">
          EXPLORE
        </p>

        <h2 class="category-title">
          Shop by Category
        </h2>

        <p class="category-description">
          Discover timeless pieces designed for comfort,
          elegance, and everyday style.
        </p>

      </div>


      <!-- CATEGORY GRID -->

      <div class="category-grid">

        <router-link
          v-for="category in categories"
          :key="category.name"
          to="/shop"
          class="category-card"
        >

          <!-- CATEGORY IMAGE -->

          <div class="category-image-wrapper">

            <img
              :src="category.image"
              :alt="category.name"
              class="category-image"
            />


            <!-- OVERLAY -->

            <div class="category-overlay">

              <span class="view-category">
                View Collection
              </span>

            </div>

          </div>


          <!-- CATEGORY TEXT -->

          <div class="category-info">

            <h3 class="category-name">
              {{ category.name }}
            </h3>

            <p class="category-text">
              {{ category.description }}
            </p>

          </div>

        </router-link>

      </div>

    </section>


    <!-- =========================
         SUPPORT
    ========================== -->

    <button class="support-btn">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >

        <circle
          cx="12"
          cy="12"
          r="10"
        />

        <path
          d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
        />

        <line
          x1="12"
          y1="17"
          x2="12.01"
          y2="17"
        />

      </svg>

      Support

    </button>

  </div>
</template>


<style scoped>

/* =========================
   GENERAL
========================= */

.home-container {
  min-height: 100vh;

  font-family:
    'Inter',
    Arial,
    sans-serif;

  color: #111111;

  background: #ffffff;
}


/* =========================
   HERO
========================= */

.hero-wrapper {
  position: relative;

  min-height: 85vh;

  display: flex;
  flex-direction: column;

  background-image:
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.94) 0%,
      rgba(255, 255, 255, 0.78) 30%,
      rgba(255, 255, 255, 0.30) 65%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url('/images/hero-fashion.jpg');

  background-size: cover;

  background-position: center;

  background-repeat: no-repeat;

  border-bottom: 1px solid #dddddd;
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

  padding: 1.5rem 3rem;

  background: rgba(255, 255, 255, 0.75);

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  backdrop-filter: blur(8px);
}


/* =========================
   LEFT NAV
========================= */

.nav-left {
  display: flex;

  align-items: center;

  gap: 1.7rem;
}


.nav-link {
  color: #111111;

  text-decoration: none;

  font-size: 0.85rem;

  font-weight: 700;

  letter-spacing: 1.5px;

  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}


.nav-link:hover {
  color: #666666;

  opacity: 0.7;
}


/* =========================
   CENTER LOGO
========================= */

.nav-center {
  position: absolute;

  left: 50%;

  transform: translateX(-50%);
}


.brand-logo {
  color: #111111;

  text-decoration: none;

  font-size: 2rem;

  font-weight: 800;

  letter-spacing: 4px;

  white-space: nowrap;
}


.brand-logo:hover {
  color: #555555;
}


/* =========================
   RIGHT NAV
========================= */

.nav-right {
  display: flex;

  align-items: center;

  gap: 1.3rem;
}


/* =========================
   ICON
========================= */

.icon-btn {
  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #111111;

  background: transparent;

  border: none;

  text-decoration: none;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    color 0.2s ease;
}


.icon-btn:hover {
  transform: translateY(-2px);

  color: #666666;
}


/* =========================
   CART BADGE
========================= */

.cart-badge {
  position: absolute;

  top: -8px;

  right: -9px;

  width: 16px;

  height: 16px;

  display: flex;

  align-items: center;

  justify-content: center;

  background: #111111;

  color: #ffffff;

  border-radius: 50%;

  font-size: 10px;

  font-weight: 700;

  box-shadow:
    0 1px 4px rgba(0, 0, 0, 0.2);
}


/* =========================
   HERO CONTENT
========================= */

.hero-content {
  flex: 1;

  display: flex;

  align-items: center;

  padding: 0 3.5rem;
}


.hero-text-card {
  max-width: 480px;

  margin-top: -20px;
}


/* =========================
   HERO TITLE
========================= */

.hero-title {
  margin: 0 0 1rem;

  font-family:
    'Playfair Display',
    Georgia,
    serif;

  font-size: 3.2rem;

  font-weight: 500;

  line-height: 1.12;

  color: #111111;

  letter-spacing: -1px;
}


.hero-subtitle {
  margin: 0 0 1.8rem;

  color: #444444;

  font-size: 1.05rem;

  line-height: 1.6;
}


/* =========================
   HERO BUTTON
========================= */

.btn-hero {
  display: inline-block;

  padding: 0.9rem 2rem;

  background: #111111;

  color: #ffffff;

  border-radius: 3px;

  text-decoration: none;

  font-size: 0.9rem;

  font-weight: 600;

  letter-spacing: 0.3px;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}


.btn-hero:hover {
  background: #444444;

  transform: translateY(-2px);
}


/* =========================
   MISSION
========================= */

.mission-section {
  padding: 5rem 3rem;

  background: #ffffff;

  border-bottom: 1px solid #dddddd;
}


.mission-statement {
  max-width: 900px;

  margin: 0;

  font-family:
    'Playfair Display',
    Georgia,
    serif;

  font-size: 2.4rem;

  font-weight: 400;

  line-height: 1.3;

  color: #111111;
}


/* =========================
   CATEGORY SECTION
========================= */

.category-section {
  padding: 5rem 3rem 7rem;

  background: #eeeeee;
}


/* =========================
   CATEGORY HEADER
========================= */

.category-header {
  max-width: 650px;

  margin: 0 auto 3.5rem;

  text-align: center;
}


.category-label {
  margin: 0 0 0.8rem;

  color: #666666;

  font-size: 0.75rem;

  font-weight: 700;

  letter-spacing: 3px;
}


.category-title {
  margin: 0 0 1rem;

  font-family:
    'Playfair Display',
    Georgia,
    serif;

  font-size: 2.8rem;

  font-weight: 400;

  color: #111111;
}


.category-description {
  margin: 0;

  color: #555555;

  font-size: 1rem;

  line-height: 1.7;
}


/* =========================
   CATEGORY GRID
========================= */

.category-grid {
  max-width: 1250px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 1.5rem;
}


/* =========================
   CATEGORY CARD
========================= */

.category-card {
  display: block;

  overflow: hidden;

  background: #ffffff;

  color: #111111;

  text-decoration: none;

  border: 1px solid #d5d5d5;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


.category-card:hover {
  transform: translateY(-6px);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.15);
}


/* =========================
   CATEGORY IMAGE
========================= */

.category-image-wrapper {
  position: relative;

  width: 100%;

  height: 360px;

  overflow: hidden;

  background: #cccccc;
}


.category-image {
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  filter: grayscale(100%);

  transition:
    transform 0.5s ease,
    filter 0.5s ease;
}


.category-card:hover .category-image {
  transform: scale(1.05);

  filter: grayscale(80%);
}


/* =========================
   CATEGORY OVERLAY
========================= */

.category-overlay {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  background: rgba(0, 0, 0, 0.45);

  opacity: 0;

  transition: opacity 0.3s ease;
}


.category-card:hover .category-overlay {
  opacity: 1;
}


.view-category {
  padding: 0.75rem 1.2rem;

  background: #ffffff;

  color: #111111;

  font-size: 0.8rem;

  font-weight: 700;

  letter-spacing: 1px;

  text-transform: uppercase;
}


/* =========================
   CATEGORY INFO
========================= */

.category-info {
  padding: 1.4rem 1.2rem 1.6rem;

  text-align: center;

  background: #ffffff;
}


.category-name {
  margin: 0 0 0.5rem;

  font-family:
    'Playfair Display',
    Georgia,
    serif;

  font-size: 1.5rem;

  font-weight: 500;

  color: #111111;
}


.category-text {
  margin: 0;

  color: #666666;

  font-size: 0.85rem;

  line-height: 1.5;
}


/* =========================
   SUPPORT
========================= */

.support-btn {
  position: fixed;

  right: 20px;

  bottom: 20px;

  z-index: 100;

  display: flex;

  align-items: center;

  gap: 0.5rem;

  padding: 0.65rem 1.2rem;

  border: none;

  border-radius: 25px;

  background: #111111;

  color: #ffffff;

  font-size: 0.85rem;

  cursor: pointer;

  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.25);

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}


.support-btn:hover {
  transform: translateY(-2px);

  background: #444444;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {

  .category-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .category-image-wrapper {
    height: 320px;
  }

}


@media (max-width: 900px) {

  .navbar {
    padding: 1.2rem 1.5rem;
  }

  .brand-logo {
    font-size: 1.5rem;
  }

  .hero-content {
    padding: 0 2rem;
  }

  .hero-title {
    font-size: 2.6rem;
  }

}


@media (max-width: 600px) {

  .navbar {
    padding: 1rem;
  }

  .nav-left {
    gap: 0.8rem;
  }

  .nav-link {
    font-size: 0.7rem;
  }

  .brand-logo {
    font-size: 1.15rem;

    letter-spacing: 2px;
  }

  .nav-right {
    gap: 0.8rem;
  }

  .hero-wrapper {
    min-height: 80vh;

    background-position: 65% center;
  }

  .hero-content {
    padding: 0 1.5rem;
  }

  .hero-text-card {
    max-width: 330px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .mission-section {
    padding: 3rem 1.5rem;
  }

  .mission-statement {
    font-size: 1.7rem;
  }


  /* CATEGORY MOBILE */

  .category-section {
    padding: 4rem 1.5rem 5rem;
  }

  .category-title {
    font-size: 2.2rem;
  }

  .category-description {
    font-size: 0.9rem;
  }

  .category-grid {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .category-image-wrapper {
    height: 420px;
  }

}

</style>