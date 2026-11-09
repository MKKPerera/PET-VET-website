<template>
  <footer class="footer">
    <div class="container grid cols">
      <div>
        <div class="logo">🐾 Paw<span>Care</span></div>
        <p>Your one-stop pet shop and veterinary clinic. Quality supplies and compassionate care for every furry, feathered and fluffy friend.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/services">Vet Services</NuxtLink>
        <NuxtLink to="/appointment">Book Appointment</NuxtLink>
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </div>
      <div>
        <h4>Visit Us</h4>
        <p>123 Galle Road, Colombo 03</p>
        <p>📞 +94 11 234 5678</p>
        <p>✉️ hello@pawcare.lk</p>
      </div>
      <div>
        <h4>Opening Hours</h4>
        <p>Mon – Sat: 8:00 – 20:00</p>
        <p>Sunday: 9:00 – 14:00</p>
        <p class="emergency">🚑 24/7 Emergency Care</p>
      </div>
    </div>
    <div class="copy">© {{ new Date().getFullYear() }} PawCare Pet & Vet. All rights reserved.</div>
  </footer>
</template>

<style scoped>
.footer { background: #16302b; color: #cfe1dc; padding-top: 60px; }
.cols { grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 36px; }
.logo { font: 700 1.6rem 'Fredoka', sans-serif; color: #fff; margin-bottom: 12px; }
.logo span { color: var(--accent); }
h4 { color: #fff; margin-bottom: 14px; font-size: 1.1rem; }
a { display: block; margin-bottom: 8px; }
a:hover { color: var(--accent); }
p { margin-bottom: 6px; }
.emergency { color: var(--accent); font-weight: 700; }
.copy { text-align: center; padding: 20px; margin-top: 40px; border-top: 1px solid rgba(255, 255, 255, .1); font-size: .9rem; }
</style>
