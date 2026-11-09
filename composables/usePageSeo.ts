interface PageSeo {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}

export const usePageSeo = ({ title, description, path, image = '/images/hero.jpg', noindex = false }: PageSeo) => {
  const { siteUrl, siteName } = useRuntimeConfig().public
  const url = `${siteUrl}${path}`
  const imageUrl = `${siteUrl}${image}`

  useHead({
    title,
    link: [{ rel: 'canonical', href: url }]
  })

  useSeoMeta({
    description,
    robots: noindex ? 'noindex, follow' : 'index, follow',
    ogType: 'website',
    ogSiteName: siteName,
    ogLocale: 'en_LK',
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogImage: imageUrl,
    ogImageAlt: title,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl
  })
}
