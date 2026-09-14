<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const successMessage = ref('')

// State untuk masing-masing form
const profileForm = reactive({
  name: '',
  email: ''
})

const passwordForm = reactive({
  current_password: '',
  password: '',
  password_confirmation: ''
})

const avatarPreview = ref(null)

function handleAvatarChange(e) {
  const file = e.target.files[0]
  if (file) {
    avatarPreview.value = URL.createObjectURL(file)
  }
}

function updateProfile() {
  // TODO: hubungkan ke API / backend
  successMessage.value = 'Profil berhasil diperbarui.'
  setTimeout(() => (successMessage.value = ''), 3000)
}

function updatePassword() {
  // TODO: hubungkan ke API / backend
  successMessage.value = 'Password berhasil diperbarui.'
  setTimeout(() => (successMessage.value = ''), 3000)
  passwordForm.current_password = ''
  passwordForm.password = ''
  passwordForm.password_confirmation = ''
}

function deleteAccount() {
  if (confirm('Yakin ingin menghapus akun? Tindakan ini tidak bisa dibatalkan.')) {
    // TODO: hubungkan ke API / backend
    router.push('/')
  }
}
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-container">

      <!-- Navigasi Atas -->
      <div class="top-nav">
        <nav class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-active">Profil Saya</span>
        </nav>

        <router-link to="/" class="btn-home">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Ke Beranda
        </router-link>
      </div>

      <h2 class="page-title">Pengaturan Akun</h2>

      <!-- Notifikasi Sukses -->
      <transition name="fade">
        <div v-if="successMessage" class="alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          {{ successMessage }}
        </div>
      </transition>

      <!-- 1. Foto Profil -->
      <section class="settings-card">
        <div class="card-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
          Foto Profil
        </div>
        <div class="card-body avatar-body">
          <div class="avatar-preview">
            <img v-if="avatarPreview" :src="avatarPreview" alt="Avatar preview" />
            <span v-else class="avatar-placeholder">?</span>
          </div>
          <div class="avatar-actions">
            <label class="btn-secondary file-label">
              Pilih Foto
              <input type="file" accept="image/*" class="file-input" @change="handleAvatarChange" />
            </label>
            <p class="hint-text">JPG atau PNG, maksimal 2MB.</p>
          </div>
        </div>
      </section>

      <!-- 2. Informasi Profil -->
      <section class="settings-card">
        <div class="card-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Informasi Profil
        </div>
        <div class="card-body">
          <form @submit.prevent="updateProfile" class="settings-form">
            <div class="form-group">
              <label for="name">Nama</label>
              <input id="name" v-model="profileForm.name" type="text" class="input-field" placeholder="Nama lengkap" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" v-model="profileForm.email" type="email" class="input-field" placeholder="nama@email.com" />
            </div>
            <button type="submit" class="btn-primary">Simpan Perubahan</button>
          </form>
        </div>
      </section>

      <!-- 3. Update Password -->
      <section class="settings-card">
        <div class="card-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Update Password
        </div>
        <div class="card-body">
          <form @submit.prevent="updatePassword" class="settings-form">
            <div class="form-group">
              <label for="current_password">Password Saat Ini</label>
              <input id="current_password" v-model="passwordForm.current_password" type="password" class="input-field" placeholder="••••••••" />
            </div>
            <div class="form-group">
              <label for="password">Password Baru</label>
              <input id="password" v-model="passwordForm.password" type="password" class="input-field" placeholder="••••••••" />
            </div>
            <div class="form-group">
              <label for="password_confirmation">Konfirmasi Password Baru</label>
              <input id="password_confirmation" v-model="passwordForm.password_confirmation" type="password" class="input-field" placeholder="••••••••" />
            </div>
            <button type="submit" class="btn-primary">Update Password</button>
          </form>
        </div>
      </section>

      <!-- 4. Akun Terhubung -->
      <section class="settings-card">
        <div class="card-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          Akun Terhubung
        </div>
        <div class="card-body">
          <div class="connected-row">
            <span>Google</span>
            <button class="btn-secondary small">Hubungkan</button>
          </div>
        </div>
      </section>

      <!-- 5. Hapus Akun -->
      <section class="settings-card danger-card">
        <div class="card-header danger-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Zona Bahaya
        </div>
        <div class="card-body">
          <p class="danger-text">
            Setelah akun dihapus, seluruh data akan hilang secara permanen dan tidak dapat dikembalikan.
          </p>
          <button class="btn-danger" @click="deleteAccount">Hapus Akun</button>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.profile-wrapper {
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: 'Inter', sans-serif;
  padding: 3rem 1.5rem;
}

.profile-container {
  max-width: 720px;
  margin: 0 auto;
}

/* Nav */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
}

.breadcrumb-link {
  color: #6b7280;
  text-decoration: none;
}

.breadcrumb-sep {
  color: #9ca3af;
}

.breadcrumb-active {
  color: #111827;
  font-weight: 700;
}

.btn-home {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1.5px solid #111827;
  color: #111827;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #ffffff;
  transition: all 0.2s ease;
}

.btn-home:hover {
  background-color: #111827;
  color: #ffffff;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

/* Alert */
.alert-success {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #111827;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Cards */
.settings-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.5rem;
  font-weight: 700;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
  background-color: #ffffff;
}

.card-body {
  padding: 1.5rem;
}

/* Avatar */
.avatar-body {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.avatar-preview {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 1.5rem;
  color: #9ca3af;
  font-weight: 700;
}

.file-label {
  cursor: pointer;
  display: inline-block;
}

.file-input {
  display: none;
}

.hint-text {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.5rem;
}

/* Forms */
.settings-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.85rem;
  color: #374151;
  font-weight: 500;
}

.input-field {
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #111827;
  outline: none;
  transition: all 0.2s ease;
}

.input-field:focus {
  background-color: #ffffff;
  border-color: #9ca3af;
  box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.25);
}

/* Buttons */
.btn-primary {
  align-self: flex-start;
  padding: 0.7rem 1.5rem;
  background-color: #111827;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #374151;
}

.btn-secondary {
  padding: 0.6rem 1.2rem;
  background-color: #ffffff;
  color: #111827;
  border: 1.5px solid #111827;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: #111827;
  color: #ffffff;
}

.btn-secondary.small {
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
}

/* Connected accounts */
.connected-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #374151;
  font-size: 0.9rem;
}

/* Danger zone */
.danger-card {
  border-color: #d1d5db;
}

.danger-header {
  background-color: #111827;
  color: #ffffff;
  border-bottom: none;
}

.danger-text {
  color: #6b7280;
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.btn-danger {
  padding: 0.7rem 1.5rem;
  background-color: #ffffff;
  color: #111827;
  border: 1.5px solid #111827;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-danger:hover {
  background-color: #111827;
  color: #ffffff;
}

@media (max-width: 640px) {
  .avatar-body {
    flex-direction: column;
    align-items: flex-start;
  }
  .top-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>