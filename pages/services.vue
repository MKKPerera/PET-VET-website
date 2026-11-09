<script setup lang="ts">
import { services, vets } from '~/data/site'

useHead({ title: 'Vet Services | PawCare' })
</script>

<template>
  <div>
    <section class="page-hero" style="background-image: url('/images/vet-checkup.jpg')">
      <h1>Veterinary Services</h1>
      <p>Compassionate, modern care for dogs, cats, birds and exotic pets.</p>
    </section>

    <section class="section">
      <div class="container list">
        <article v-for="(s, i) in services" :key="s.title" :class="['row', { flip: i % 2 }]">
          <img :src="s.image" :alt="s.title" loading="lazy">
          <div>
            <h2>{{ s.title }}</h2>
            <p>{{ s.text }}</p>
            <ul>
              <li v-for="pt in s.points" :key="pt">🐾 {{ pt }}</li>
            </ul>
            <div class="foot">
              <strong>{{ s.price }}</strong>
              <NuxtLink :to="{ path: '/appointment', query: { service: s.title } }" class="btn btn-primary btn-sm">Book this service</NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Our team</span>
          <h2>Meet the Vets</h2>
        </div>
        <div class="grid grid-3">
          <div v-for="v in vets" :key="v" class="card vet">
            <div class="avatar">🩺</div>
            <h3>{{ v.split(' – ')[0] }}</h3>
            <p>{{ v.split(' – ')[1] }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.list { display: grid; gap: 64px; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.row.flip img { order: 2; }
.row img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 24px; box-shadow: var(--shadow); }
.row h2 { font-size: 2rem; margin-bottom: 10px; }
.row p { color: var(--muted); margin-bottom: 14px; }
.row ul { list-style: none; display: grid; gap: 6px; margin-bottom: 20px; font-weight: 600; }
.foot { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.foot strong { color: var(--accent); font-size: 1.2rem; }
.vet { padding: 32px; text-align: center; }
.avatar { width: 80px; height: 80px; margin: 0 auto 14px; border-radius: 50%; background: #e3f5ef; display: grid; place-items: center; font-size: 2rem; }
.vet p { color: var(--muted); }
@media (max-width: 760px) {
  .row { grid-template-columns: 1fr; gap: 20px; }
  .row.flip img { order: 0; }
}
</style>
