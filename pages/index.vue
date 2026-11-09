<script setup lang="ts">
import { products, services, categories, gallery, testimonials } from '~/data/site'

const featured = products.slice(0, 4)
const stats = [
  { value: '12k+', label: 'Happy pets' },
  { value: '15', label: 'Years of care' },
  { value: '8', label: 'Expert vets' },
  { value: '24/7', label: 'Emergency' }
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <span class="pill">🐶 Pet Shop + 🩺 Vet Clinic</span>
          <h1>Everything your pet needs, <span>all in one place</span></h1>
          <p>Premium food, toys and accessories alongside caring, professional veterinary services for dogs, cats, birds and small pets.</p>
          <div class="cta">
            <NuxtLink to="/shop" class="btn btn-accent">Shop Now</NuxtLink>
            <NuxtLink to="/appointment" class="btn btn-outline light">Book a Vet Visit</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="stats container">
      <div v-for="s in stats" :key="s.label" class="stat">
        <strong>{{ s.value }}</strong>
        <span>{{ s.label }}</span>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Shop by pet</span>
          <h2>Who are we shopping for?</h2>
        </div>
        <div class="cats">
          <NuxtLink v-for="c in categories" :key="c.name" to="/shop" class="cat">
            <img :src="c.image" :alt="c.name" loading="lazy">
            <span>{{ c.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Veterinary care</span>
          <h2>Our Vet Services</h2>
          <p>From routine checkups to grooming and boarding, our team treats every pet like family.</p>
        </div>
        <div class="grid grid-4">
          <article v-for="s in services" :key="s.title" class="card service">
            <img :src="s.image" :alt="s.title" loading="lazy">
            <div class="body">
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
              <strong>{{ s.price }}</strong>
            </div>
          </article>
        </div>
        <div class="center"><NuxtLink to="/services" class="btn btn-primary">View All Services</NuxtLink></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Best sellers</span>
          <h2>Featured Products</h2>
        </div>
        <div class="grid grid-4">
          <ProductCard v-for="p in featured" :key="p.id" :product="p" />
        </div>
        <div class="center"><NuxtLink to="/shop" class="btn btn-outline">Browse the Shop</NuxtLink></div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container about grid grid-2">
        <img src="/images/about.jpg" alt="A cat and a dog cuddling" class="about-img" loading="lazy">
        <div>
          <span class="eyebrow">Why PawCare</span>
          <h2>Love, care and expertise under one roof</h2>
          <p>We started PawCare with a simple idea: pet owners shouldn't have to run between a pet store and a clinic. Our vets help pick the right food, and our shop stocks what our vets trust.</p>
          <ul>
            <li>✅ Licensed, experienced veterinarians</li>
            <li>✅ Vet-approved food and accessories</li>
            <li>✅ Modern diagnostic equipment</li>
            <li>✅ Island-wide home delivery</li>
          </ul>
          <NuxtLink to="/contact" class="btn btn-primary">Visit Us</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Happy clients</span>
          <h2>What pet parents say</h2>
        </div>
        <div class="grid grid-3">
          <blockquote v-for="t in testimonials" :key="t.name" class="card quote">
            <div class="stars">★★★★★</div>
            <p>“{{ t.text }}”</p>
            <footer><strong>{{ t.name }}</strong><small>{{ t.pet }}</small></footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">#PawCareFamily</span>
          <h2>Pet Gallery</h2>
        </div>
        <div class="gallery">
          <img v-for="(g, i) in gallery" :key="g" :src="g" :alt="`Pet photo ${i + 1}`" loading="lazy">
        </div>
      </div>
    </section>

    <section class="banner">
      <div class="container banner-inner">
        <div>
          <h2>Is your pet due for a checkup?</h2>
          <p>Book online in under a minute. Same-day appointments available.</p>
        </div>
        <NuxtLink to="/appointment" class="btn btn-accent">Book Appointment</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  min-height: 600px; display: flex; align-items: center; color: #fff;
  background: linear-gradient(90deg, rgba(16, 45, 40, .85) 0%, rgba(16, 45, 40, .45) 55%, rgba(16, 45, 40, 0) 100%), url('/images/hero.jpg') center / cover;
}
.hero-text { max-width: 560px; padding: 80px 0; }
.pill { display: inline-block; background: rgba(255, 255, 255, .18); padding: 6px 14px; border-radius: 999px; font-weight: 700; font-size: .9rem; margin-bottom: 18px; }
.hero h1 { font-size: clamp(2.3rem, 5.5vw, 3.8rem); margin-bottom: 18px; }
.hero h1 span { color: #ffc08f; }
.hero p { font-size: 1.1rem; opacity: .92; margin-bottom: 28px; }
.cta { display: flex; gap: 14px; flex-wrap: wrap; }
.light { border-color: #fff; color: #fff; }
.light:hover { background: #fff; color: var(--primary); }

.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; background: #fff; border-radius: var(--radius); box-shadow: var(--shadow); padding: 28px; margin-top: -50px; position: relative; text-align: center; }
.stat strong { display: block; font: 700 2rem 'Fredoka', sans-serif; color: var(--primary); }
.stat span { color: var(--muted); font-weight: 600; }

.cats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px; }
.cat { text-align: center; font-weight: 700; font-size: 1.1rem; }
.cat img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 50%; border: 6px solid #fff; box-shadow: var(--shadow); margin-bottom: 12px; transition: transform .3s; }
.cat:hover img { transform: scale(1.06) rotate(-2deg); }

.service img { aspect-ratio: 4 / 3; object-fit: cover; width: 100%; }
.service .body { padding: 20px; }
.service h3 { margin-bottom: 6px; }
.service p { color: var(--muted); font-size: .95rem; margin-bottom: 10px; }
.service strong { color: var(--accent); }
.center { text-align: center; margin-top: 40px; }

.about { align-items: center; gap: 48px; }
.about-img { border-radius: 28px; box-shadow: var(--shadow); aspect-ratio: 5 / 4; object-fit: cover; width: 100%; }
.about .eyebrow { color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: .12em; font-size: .8rem; }
.about h2 { font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin: 8px 0 16px; }
.about p { color: var(--muted); margin-bottom: 16px; }
.about ul { list-style: none; display: grid; gap: 8px; margin-bottom: 24px; font-weight: 600; }

.quote { padding: 28px; }
.quote .stars { color: #f5b301; margin-bottom: 10px; }
.quote p { font-style: italic; margin-bottom: 16px; }
.quote footer { display: grid; }
.quote small { color: var(--muted); }

.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
.gallery img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 14px; transition: transform .3s; }
.gallery img:hover { transform: scale(1.03); }

.banner { background: linear-gradient(120deg, var(--primary), var(--primary-dark)); color: #fff; padding: 56px 0; }
.banner-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.banner h2 { font-size: clamp(1.6rem, 3.5vw, 2.2rem); }
</style>
