import { Helmet } from 'react-helmet-async'

function SEO() {
  return (
    <Helmet>
      <title>LA Pakistan | Premium Skincare & Aesthetic Products | Since 2012</title>
      <meta name="description" content="LA Pakistan - Premium skincare & aesthetic products. Led by DR Fatima Abid, Skincare & Aesthetic Professional. Free shipping over PKR 2000. Serving Pakistan since 2012." />
      <meta name="keywords" content="LA Pakistan, skincare Pakistan, aesthetic products, acne treatment, moisturizer, sunblock, DR Fatima Abid, Faisalabad, beauty products, wholesale" />
      <link rel="canonical" href="https://lapakskincare.vercel.app/" />
      <meta property="og:title" content="LA Pakistan | Premium Skincare & Aesthetics" />
      <meta property="og:description" content="Premium skincare & aesthetic products. Led by DR Fatima Abid. Nationwide delivery since 2012." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lapakskincare.vercel.app/" />
    </Helmet>
  )
}

export default SEO
