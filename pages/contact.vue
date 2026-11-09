<script setup lang="ts">
useHead({ title: 'Contact | PawCare' })

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)
</script>

<template>
  <div>
    <section class="page-hero" style="background-image: url('/images/retriever.jpg')">
      <h1>Contact Us</h1>
      <p>Questions about products or your pet's health? We'd love to hear from you.</p>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div class="card box">
          <div v-if="sent" class="notice">✅ Thanks {{ form.name }}, we'll reply to {{ form.email }} soon!</div>
          <form v-else class="form" @submit.prevent="sent = true">
            <h2>Send a message</h2>
            <label>Name <input v-model="form.name" required></label>
            <label>Email <input v-model="form.email" type="email" required></label>
            <label>Message <textarea v-model="form.message" rows="5" required /></label>
            <button class="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
        <div class="info">
          <div class="card item"><span>📍</span><div><h3>Address</h3><p>123 Galle Road, Colombo 03, Sri Lanka</p></div></div>
          <div class="card item"><span>📞</span><div><h3>Phone</h3><p>+94 11 234 5678</p></div></div>
          <div class="card item"><span>✉️</span><div><h3>Email</h3><p>hello@pawcare.lk</p></div></div>
          <div class="card item"><span>🕒</span><div><h3>Hours</h3><p>Mon–Sat 8:00–20:00 · Sun 9:00–14:00</p></div></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.box { padding: 32px; }
.info { display: grid; gap: 16px; align-content: start; }
.item { display: flex; gap: 16px; align-items: center; padding: 20px; }
.item span { font-size: 1.8rem; width: 56px; height: 56px; border-radius: 50%; background: #e3f5ef; display: grid; place-items: center; flex-shrink: 0; }
.item p { color: var(--muted); }
</style>
