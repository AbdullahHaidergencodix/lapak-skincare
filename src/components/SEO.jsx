import { Helmet } from 'react-helmet-async'

function SEO({ 
  title = "LA Pakistan - Premium Medical Skincare",
  description = "Dermatologist-recommended skincare solutions. Professional-grade products for acne, moisturizing, sun protection & more. Free shipping over PKR 2000.",
  keywords = "skincare pakistan, dermatologist recommended, acne treatment, moisturizer, sunblock, LA Pharma, skin care lahore, beauty products pakistan",
  image = "/og-image.jpg",
  url = "https://lapakistan.com"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "LA Pakistan",
    "description": description,
    "url": url,
    "logo": `${url}/logo.png`,
    "priceRange": "PKR 280 - PKR 1200",
    "telephone": "+923054573962",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "1250"
    },
    "sameAs": [
      "https://wa.me/923054573962"
    ]
  }

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Skincare Products",
        "url": `${url}/#products`
      }
    ]
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="LA Pakistan" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LA Pakistan" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_PK" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Mobile */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productListSchema)}
      </script>
    </Helmet>
  )
}

export default SEO
