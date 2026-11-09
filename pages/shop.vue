<script setup lang="ts">
import { products } from '~/data/site'

const { siteUrl } = useRuntimeConfig().public

usePageSeo({
  title: 'Pet Shop – Dog, Cat, Bird & Small Pet Supplies',
  description: 'Shop vet-approved pet food, toys, clothing and health products for dogs, cats, birds, rabbits and hamsters. Free delivery on orders over Rs. 10,000.',
  path: '/shop',
  image: '/images/dog-food.jpg'
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          image: `${siteUrl}${p.image}`,
          category: p.category,
          offers: { '@type': 'Offer', price: p.price, priceCurrency: 'LKR', availability: 'https://schema.org/InStock' }
        }
      }))
    })
  }]
})

const categories = ['All', 'Food', 'Toys', 'Clothing', 'Health']
const pets = ['All pets', 'Dog', 'Cat', 'Bird', 'Small Pet']
const category = ref('All')
const pet = ref('All pets')
const search = ref('')
const sort = ref('featured')

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  const list = products.filter(p =>
    (category.value === 'All' || p.category === category.value) &&
    (pet.value === 'All pets' || p.pet === pet.value) &&
    (!q || p.name.toLowerCase().includes(q))
  )
  if (sort.value === 'low') return [...list].sort((a, b) => a.price - b.price)
  if (sort.value === 'high') return [...list].sort((a, b) => b.price - a.price)
  return list
})
</script>

<template>
  <div>
    <section class="page-hero" style="background-image: url('/images/plush-toy.jpg')">
      <h1>Pet Shop – Food, Toys & Accessories</h1>
      <p>Vet-approved food, toys, clothing and health products for every pet.</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="toolbar">
          <div class="chips">
            <button v-for="c in categories" :key="c" :class="['chip', { active: category === c }]" @click="category = c">{{ c }}</button>
          </div>
          <div class="filters">
            <input v-model="search" type="search" placeholder="Search products…">
            <select v-model="pet">
              <option v-for="p in pets" :key="p">{{ p }}</option>
            </select>
            <select v-model="sort">
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <p class="count">{{ filtered.length }} product{{ filtered.length === 1 ? '' : 's' }}</p>

        <div v-if="filtered.length" class="grid grid-4">
          <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
        </div>
        <p v-else class="empty">No products match your filters. 🐾</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.toolbar { display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.chips { display: flex; gap: 8px; flex-wrap: wrap; }
.chip { border: 1.5px solid var(--line); background: #fff; padding: 8px 18px; border-radius: 999px; font: 700 .9rem 'Nunito', sans-serif; cursor: pointer; color: var(--ink); }
.chip.active, .chip:hover { background: var(--primary); border-color: var(--primary); color: #fff; }
.filters { display: flex; gap: 10px; flex-wrap: wrap; }
.filters input, .filters select { font: inherit; padding: 9px 14px; border: 1.5px solid var(--line); border-radius: 999px; background: #fff; color: var(--ink); }
.count { color: var(--muted); margin-bottom: 20px; font-weight: 600; }
.empty { text-align: center; padding: 60px 0; color: var(--muted); font-size: 1.1rem; }
</style>
