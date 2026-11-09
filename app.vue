<script setup lang="ts">
const { siteName } = useRuntimeConfig().public

useHead({
  titleTemplate: (title?: string) => (title && title !== siteName ? `${title} | ${siteName}` : `${siteName} | Pet Shop & Veterinary Clinic in Colombo`)
})
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
