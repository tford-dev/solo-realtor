import { siteConfig } from "@/lib/site";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteConfig.website}/#real-estate-agent`,
      name: siteConfig.name,
      description: `Top Realtor in ${siteConfig.city}, ${siteConfig.state} helping buyers and sellers move with confidence.`,
      url: siteConfig.website,
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      areaServed: siteConfig.serviceAreas,
      sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram, siteConfig.social.facebook],
      image: `${siteConfig.website}/images/headshot.svg`
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.website}/#local-business`,
      name: `${siteConfig.name} Real Estate`,
      url: siteConfig.website,
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      areaServed: siteConfig.serviceAreas,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneDisplay,
        contactType: "customer service",
        email: siteConfig.email,
        areaServed: "US",
        availableLanguage: ["English"]
      }
    }
  ]
};

export function SchemaScript(): JSX.Element {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}
