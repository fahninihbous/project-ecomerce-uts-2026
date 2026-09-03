<script setup>
import { reactive, ref } from 'vue'

const isLoading = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const handleLogin = () => {
  isLoading.value = true
  
  setTimeout(() => {
    console.log('Data form dikirim:', form)
    alert(`Login berhasil untuk: ${form.email}`)
    isLoading.value = false
  }, 1200)
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      2
      <div class="brand-header">
        <h1 class="brand-title">Providential</h1>
        <p class="brand-subtitle">Minimalist Fashion & Apparel</p>
      </div>

      <form @submit.prevent="handleLogin" class="form-container">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email"
            v-model="form.email"
            type="email" 
            required 
            placeholder="nama@email.com"
            class="input-field"
          />
        </div>

        <div class="form-group">
          <div class="label-row">
            <label for="password">Kata Sandi</label>
            <a href="#" class="forgot-link">Lupa kata sandi?</a>
          </div>
          <input 
            id="password"
            v-model="form.password"
            type="password" 
            required 
            placeholder="******"
            class="input-field"
          />
        </div>

        <div class="checkbox-group">
          <input 
            id="remember" 
            v-model="form.remember"
            type="checkbox" 
            class="checkbox-input"
          />
          <label for="remember">Ingat saya di perangkat ini</label>
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="submit-btn"
        >
          <span v-if="!isLoading">Masuk</span>
          <span v-else>Memproses...</span>
        </button>
      </form>

      <div class="divider">
        <span>Atau masuk dengan</span>
      </div>

      <p class="footer-text">
        Belum memiliki akun? 
        <a href="#" class="register-link">Daftar sekarang</a>
      </p>

    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  width: 100vw; /* Mengisi seluruh lebar viewport */
  min-height: 100vh; /* Mengisi seluruh tinggi viewport */
  background-color: #f0f7f9; /* atau #ffffff */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}


.login-card {
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 25px -5px rgba(174, 198, 207, 0.3);
  border: 1px solid #e1eef2;
}

.brand-header {
  text-align: center;
  margin-bottom: 2rem;
}

.brand-title {
  font-size: 1.75rem;
  font-weight: 700;
  color:  #93c5fd;
  letter-spacing: 2px;
  margin: 0;
}

.brand-subtitle {
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  color: #88a0a8;
  text-transform: uppercase;
  margin-top: 4px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.85rem;
  color: #5a6e75;
  font-weight: 500;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 0.75rem;
  color: #72a2b0;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background-color: #f7fafb;
  border: 1px solid #d1e3e8;
  color: #2c3e50;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.input-field:focus {
  background-color: #ffffff;
  border-color: #93c5fd;
  box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.25);
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #6b7c85;
}

.checkbox-input {
  accent-color: #93c5fd;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 0.85rem;
  background-color: #b9e0f2;
  color: #1e3a8a;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.submit-btn:hover {
  background-color: #a3d5ec;
}

.submit-btn:active {
  transform: scale(0.98);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.divider {
  position: relative;
  text-align: center;
  margin: 1.5rem 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #e1eef2;
}

.divider span {
  position: relative;
  background-color: #ffffff;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  color: #a0b2b8;
  text-transform: uppercase;
}

.footer-text {
  text-align: center;
  font-size: 0.85rem;
  color: #6b7c85;
  margin-top: 1rem;
}

.register-link {
  color: #72a2b0;
  font-weight: 600;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>