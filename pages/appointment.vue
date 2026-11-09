<script setup lang="ts">
import { services, vets } from '~/data/site'

useHead({ title: 'Book Appointment | PawCare' })

const route = useRoute()
const today = new Date().toISOString().slice(0, 10)

const form = reactive({
  owner: '',
  phone: '',
  email: '',
  petName: '',
  petType: 'Dog',
  service: (route.query.service as string) || services[0].title,
  vet: vets[0],
  date: '',
  time: '09:00',
  notes: ''
})
const submitted = ref(false)

const submit = () => {
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="page-hero" style="background-image: url('/images/vaccination.jpg')">
      <h1>Book an Appointment</h1>
      <p>Choose a service, pick a time and we'll take care of the rest.</p>
    </section>

    <section class="section">
      <div class="container layout">
        <div class="card box">
          <div v-if="submitted" class="notice">
            🎉 Thanks {{ form.owner }}! {{ form.petName }}'s {{ form.service.toLowerCase() }} is requested for {{ form.date }} at {{ form.time }}. We'll call {{ form.phone }} to confirm.
          </div>
          <form v-else class="form" @submit.prevent="submit">
            <h2>Appointment details</h2>
            <div class="form-row">
              <label>Your name <input v-model="form.owner" required></label>
              <label>Phone <input v-model="form.phone" type="tel" required></label>
            </div>
            <label>Email <input v-model="form.email" type="email"></label>
            <div class="form-row">
              <label>Pet's name <input v-model="form.petName" required></label>
              <label>Pet type
                <select v-model="form.petType">
                  <option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Small Pet</option>
                </select>
              </label>
            </div>
            <div class="form-row">
              <label>Service
                <select v-model="form.service">
                  <option v-for="s in services" :key="s.title">{{ s.title }}</option>
                </select>
              </label>
              <label>Preferred vet
                <select v-model="form.vet">
                  <option v-for="v in vets" :key="v">{{ v }}</option>
                </select>
              </label>
            </div>
            <div class="form-row">
              <label>Date <input v-model="form.date" type="date" :min="today" required></label>
              <label>Time <input v-model="form.time" type="time" min="08:00" max="20:00" required></label>
            </div>
            <label>Notes / symptoms <textarea v-model="form.notes" rows="4" /></label>
            <button class="btn btn-accent" type="submit">Request Appointment</button>
          </form>
        </div>

        <aside class="side">
          <img src="/images/cavalier.jpg" alt="Puppy waiting for checkup" loading="lazy">
          <div class="card info">
            <h3>🚑 Emergency?</h3>
            <p>Call our 24/7 hotline right away:</p>
            <a href="tel:+94112345678" class="btn btn-primary">+94 11 234 5678</a>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout { display: grid; grid-template-columns: 2fr 1fr; gap: 32px; align-items: start; }
.box { padding: 32px; }
.box h2 { margin-bottom: 4px; }
.side { display: grid; gap: 20px; }
.side img { border-radius: var(--radius); aspect-ratio: 4 / 3; object-fit: cover; width: 100%; }
.info { padding: 24px; display: grid; gap: 10px; }
.info p { color: var(--muted); }
@media (max-width: 860px) { .layout { grid-template-columns: 1fr; } }
</style>
