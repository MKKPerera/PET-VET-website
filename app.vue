<script setup lang="ts">
const { siteName, gaId } = useRuntimeConfig().public

useHead({
  titleTemplate: (title?: string) => (title && title !== siteName ? `${title} | ${siteName}` : `${siteName} | Pet Shop & Veterinary Clinic in Colombo`),
  script: gaId
    ? [
        { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true, tagPriority: 'high' },
        { innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`, tagPriority: 'high' }
      ]
    : []
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
