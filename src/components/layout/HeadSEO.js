// components/HeadSEO.js
import { basicRequest, SEO } from "@/api";
import Head from "next/head";
async function getSEOData() {
  try {
    const res = await basicRequest.get(SEO, {
      next: { cache: "no-store" }, // Prevent runtime revalidation
    });
    return res.data;
  } catch (error) {
    console.error(
      "API failed. Using static data from data.json:",
      error.message
    );
  }
}
const data = await getSEOData();
export default function HeadSEO() {
  const { seoData } = seoData ?? {};
  const { defaultSeo } = seoData ?? {};
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{defaultSeo?.metaTitle || ""}</title>
      <meta name="description" content={defaultSeo?.metaDescription || ""} />
      <meta name="keywords" content={defaultSeo.meta_keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={defaultSeo?.shareImage?.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={defaultSeo?.shareImage?.url} />
      <meta property="og:title" content={defaultSeo?.metaTitle || ""} />
      <meta
        property="og:description"
        content={defaultSeo.metaDescription || ""}
      />
      {/* <meta property="og:image" content={imageUrl} /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={defaultSeo?.shareImage?.url} />
      <meta
        name="twitter:title"
        content={defaultSeo.metaTitle || ""}
      />
      <meta
        name="twitter:description"
        content={defaultSeo.metaDescription || ""}
      />
      {/* <meta name="twitter:image" content={imageUrl} /> */}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(
          defaultSeo?.structuredData || {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "bhooshansjr",
            url: "https://bhooshansjr.in/",
          }
        )}
      </script>

      {/* Robots */}
      <meta name="robots" content={defaultSeo?.robotsTxt || "index, follow"} />
    </Head>
  );
}
