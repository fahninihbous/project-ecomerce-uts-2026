<script setup>
import { ref, onMounted } from 'vue'
import PublicLayout from '../components/PublicLayout.vue'
import api from '../utils/api'

const produks = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/public/produk')
    produks.value = response.data.data.data.slice(0, 4)
  } catch (error) {
    console.error("Gagal mengambil data produk", error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <PublicLayout>
    <!-- Hero Section dengan Background Toko Baju Casual -->
    <section class="hero glass-card fade-in" style="margin-bottom: 4rem; text-align: center; padding: 6rem 2rem;">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="badge-new">Koleksi Casual & Urban 2026</span>
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Selamat Datang di Toko Sederhana</h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 600px; margin: 0 auto 2rem auto; color: #e4e4e7;">
          Temukan berbagai pakaian kasual berkualitas dengan gaya premium terbaik untuk menemani aktivitas harian Anda.
        </p>
        <router-link to="/produk" class="btn btn-primary" style="font-size: 1.1rem; padding: 0.75rem 2rem;">
          Mulai Belanja &rarr;
        </router-link>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="container fade-in" style="animation-delay: 0.2s;">
      <div class="d-flex justify-between align-center" style="margin-bottom: 2rem;">
        <h2>Produk Terbaru</h2>
        <router-link to="/produk" class="text-primary" style="font-weight: 500; color: #ffffff;">Lihat Semua &rarr;</router-link>
      </div>

      <div v-if="loading" class="text-center text-muted" style="padding: 2rem;">
        Memuat produk...
      </div>

      <div v-else class="grid grid-cols-4">
        <div v-for="produk in produks" :key="produk.id" class="product-card glass-card">
          <div class="product-image">
            <span class="placeholder-img">👕</span>
          </div>
          <div class="product-info">
            <h3 class="product-title">{{ produk.name || produk.nama_barang }}</h3>
            <p class="product-price">Rp {{ (produk.price || produk.harga_barang).toLocaleString('id-ID') }}</p>
            <router-link :to="`/detail-produk/${produk.id}`" class="btn btn-secondary w-100" style="margin-top: 1rem;">
              Detail
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  /* Menggunakan gambar latar belakang butik/toko baju casual dengan efek gelap monokrom */
  background: linear-gradient(rgba(9, 9, 11, 0.85), rgba(9, 9, 11, 0.92)), 
              url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.badge-new {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 1.25rem;
  backdrop-filter: blur(4px);
}

.product-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-image {
  background: #18181b;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  border-bottom: 1px solid var(--border-color);
}

.product-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  flex: 1;
  color: #ffffff;
}

.product-price {
  font-weight: 700;
  color: #ffffff;
  font-size: 1.2rem;
  margin: 0;
}

.w-100 {
  width: 100%;
}
</style>