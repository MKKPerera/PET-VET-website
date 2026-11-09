<script setup lang="ts">
import { formatPrice, type Product } from '~/data/site'

const props = defineProps<{ product: Product }>()
const { add } = useCart()
const added = ref(false)

const addToCart = () => {
  add(props.product)
  added.value = true
  setTimeout(() => (added.value = false), 1200)
}
</script>

<template>
  <article class="card product">
    <div class="img">
      <img :src="product.image" :alt="product.name" width="700" height="525" loading="lazy">
      <span class="tag">{{ product.category }}</span>
    </div>
    <div class="body">
      <small>{{ product.pet }}</small>
      <h3>{{ product.name }}</h3>
      <div class="stars">{{ '★'.repeat(product.rating) }}{{ '☆'.repeat(5 - product.rating) }}</div>
      <div class="row">
        <strong>{{ formatPrice(product.price) }}</strong>
        <button class="btn btn-primary btn-sm" @click="addToCart">{{ added ? 'Added ✓' : 'Add to cart' }}</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.img { position: relative; aspect-ratio: 4 / 3; overflow: hidden; }
.img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
.product:hover .img img { transform: scale(1.06); }
.tag { position: absolute; top: 12px; left: 12px; background: #fff; color: var(--primary); font-weight: 700; font-size: .75rem; padding: 4px 10px; border-radius: 999px; }
.body { padding: 18px; }
small { color: var(--muted); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; font-size: .72rem; }
h3 { font-size: 1.1rem; margin: 4px 0 6px; }
.stars { color: #f5b301; letter-spacing: 2px; font-size: .9rem; }
.row { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; gap: 8px; }
strong { font-size: 1.15rem; color: var(--primary-dark); }
</style>
