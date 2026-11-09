<script setup lang="ts">
import { formatPrice } from '~/data/site'

usePageSeo({
  title: 'Your Cart',
  description: 'Review the pet products in your PawCare cart and check out.',
  path: '/cart',
  noindex: true
})

const { items, setQty, remove, total } = useCart()
const delivery = computed(() => (total.value >= 10000 || total.value === 0 ? 0 : 450))
const ordered = ref(false)

const checkout = () => {
  items.value = []
  ordered.value = true
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">🛒 Your Cart</h1>

      <div v-if="ordered" class="notice">🎉 Order placed! We'll contact you to arrange delivery.</div>

      <div v-else-if="!items.length" class="empty">
        <img src="/images/pug.jpg" alt="Sad pug">
        <p>Your cart is empty.</p>
        <NuxtLink to="/shop" class="btn btn-primary">Go Shopping</NuxtLink>
      </div>

      <div v-else class="layout">
        <div class="items">
          <div v-for="i in items" :key="i.id" class="card item">
            <img :src="i.image" :alt="i.name">
            <div class="info">
              <h3>{{ i.name }}</h3>
              <small>{{ formatPrice(i.price) }}</small>
            </div>
            <div class="qty">
              <button @click="setQty(i.id, i.qty - 1)">−</button>
              <span>{{ i.qty }}</span>
              <button @click="setQty(i.id, i.qty + 1)">+</button>
            </div>
            <strong>{{ formatPrice(i.price * i.qty) }}</strong>
            <button class="remove" aria-label="Remove" @click="remove(i.id)">✕</button>
          </div>
        </div>
        <aside class="card summary">
          <h3>Order Summary</h3>
          <p><span>Subtotal</span><span>{{ formatPrice(total) }}</span></p>
          <p><span>Delivery</span><span>{{ delivery ? formatPrice(delivery) : 'Free' }}</span></p>
          <p class="total"><span>Total</span><span>{{ formatPrice(total + delivery) }}</span></p>
          <small>Free delivery on orders over Rs. 10,000</small>
          <button class="btn btn-accent" @click="checkout">Checkout</button>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title { margin-bottom: 28px; font-size: 2.2rem; }
.empty { text-align: center; display: grid; justify-items: center; gap: 16px; }
.empty img { width: 220px; aspect-ratio: 1; object-fit: cover; border-radius: 50%; }
.layout { display: grid; grid-template-columns: 2fr 1fr; gap: 28px; align-items: start; }
.items { display: grid; gap: 14px; }
.item { display: flex; align-items: center; gap: 16px; padding: 14px; }
.item:hover { transform: none; }
.item img { width: 80px; height: 80px; object-fit: cover; border-radius: 12px; }
.info { flex: 1; }
.info small { color: var(--muted); }
.qty { display: flex; align-items: center; gap: 10px; }
.qty button { width: 30px; height: 30px; border-radius: 50%; border: 1.5px solid var(--line); background: #fff; cursor: pointer; font-size: 1rem; }
.remove { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 1.1rem; }
.summary { padding: 24px; display: grid; gap: 12px; }
.summary:hover { transform: none; }
.summary p { display: flex; justify-content: space-between; }
.total { font-weight: 700; font-size: 1.15rem; border-top: 1px solid var(--line); padding-top: 12px; }
.summary small { color: var(--muted); }
@media (max-width: 860px) {
  .layout { grid-template-columns: 1fr; }
  .item { flex-wrap: wrap; }
}
</style>
