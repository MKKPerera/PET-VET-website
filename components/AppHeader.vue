<script setup lang="ts">
const { count } = useCart()
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/services', label: 'Vet Services' },
  { to: '/appointment', label: 'Appointment' },
  { to: '/contact', label: 'Contact' }
]
</script>

<template>
  <header class="header">
    <div class="topbar">
      <div class="container topbar-inner">
        <span>📞 +94 11 234 5678 &nbsp;·&nbsp; 🚑 24/7 Emergency Vet</span>
        <span class="hide-sm">Open Mon–Sat 8am–8pm · Sun 9am–2pm</span>
      </div>
    </div>
    <nav class="container nav">
      <NuxtLink to="/" class="logo">🐾 Paw<span>Care</span></NuxtLink>

      <ul :class="['links', { open }]">
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to">{{ l.label }}</NuxtLink>
        </li>
      </ul>

      <div class="actions">
        <NuxtLink to="/cart" class="cart" aria-label="Cart">
          🛒 <span v-if="count" class="badge">{{ count }}</span>
        </NuxtLink>
        <NuxtLink to="/appointment" class="btn btn-accent btn-sm hide-sm">Book Visit</NuxtLink>
        <button class="burger" aria-label="Menu" @click="open = !open">☰</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header { position: sticky; top: 0; z-index: 50; background: rgba(255, 250, 243, .95); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); }
.topbar { background: var(--primary-dark); color: #fff; font-size: .85rem; }
.topbar-inner { display: flex; justify-content: space-between; padding: 6px 0; gap: 12px; }
.nav { display: flex; align-items: center; justify-content: space-between; height: 70px; }
.logo { font: 700 1.6rem 'Fredoka', sans-serif; color: var(--primary); }
.logo span { color: var(--accent); }
.links { display: flex; gap: 28px; list-style: none; font-weight: 700; }
.links a { position: relative; padding: 6px 0; color: var(--ink); }
.links a.router-link-exact-active { color: var(--primary); }
.links a.router-link-exact-active::after { content: ''; position: absolute; left: 0; right: 0; bottom: -2px; height: 3px; border-radius: 3px; background: var(--accent); }
.actions { display: flex; align-items: center; gap: 14px; }
.cart { position: relative; font-size: 1.4rem; }
.badge { position: absolute; top: -6px; right: -10px; background: var(--accent); color: #fff; font-size: .7rem; font-weight: 700; border-radius: 999px; padding: 1px 6px; }
.burger { display: none; background: none; border: none; font-size: 1.6rem; cursor: pointer; color: var(--ink); }

@media (max-width: 860px) {
  .burger { display: block; }
  .hide-sm { display: none; }
  .links { position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; gap: 0; background: var(--bg); border-bottom: 1px solid var(--line); display: none; }
  .links.open { display: flex; }
  .links li { padding: 12px 16px; border-top: 1px solid var(--line); }
  .header { position: sticky; }
  .nav { position: relative; }
}
</style>
