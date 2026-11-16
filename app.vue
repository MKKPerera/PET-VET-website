<script setup lang="ts">
const { siteName, gaId, gtmId } = useRuntimeConfig().public

useHead({
  titleTemplate: (title?: string) => (title && title !== siteName ? `${title} | ${siteName}` : `${siteName} | Pet Shop & Veterinary Clinic in Colombo`),
  script: [
    ...(gtmId
      ? [{ innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`, tagPriority: 'critical' as const }]
      : []),
    ...(gaId
      ? [
          { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true, tagPriority: 'high' as const },
          { innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`, tagPriority: 'high' as const }
        ]
      : [])
  ],
  noscript: gtmId
    ? [{ innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`, tagPosition: 'bodyOpen' as const }]
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
