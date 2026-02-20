import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://terrance-ford.com";

export const siteConfig = {
  name: "Terrance Ford",
  role: "Solo Realtor",
  city: "Virginia Beach",
  state: "VA",
  phoneDisplay: "757-814-5785",
  phoneHref: "tel:+17578145785",
  email: "terrance@terrance-ford.com",
  emailHref: "mailto:terrance@terrance-ford.com",
  website: siteUrl,
  serviceAreas: ["Virginia Beach", "Norfolk", "Chesapeake", "Suffolk"],
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com"
  }
} as const;

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/listings", label: "Listings" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }
] as const;

export const testimonials = [
  {
    name: "Alex and Brianna M.",
    location: "Virginia Beach, VA",
    quote:
      "Terrance negotiated hard, kept us informed every day, and helped us win the right home without overpaying.",
    rating: 5,
    outcome: "Buyer representation"
  },
  {
    name: "Kendra T.",
    location: "Chesapeake, VA",
    quote:
      "From staging strategy to final close, Terrance delivered a smooth sale and multiple offers in the first week.",
    rating: 5,
    outcome: "Seller representation"
  },
  {
    name: "Marcus J.",
    location: "Norfolk, VA",
    quote:
      "I trusted Terrance because he was direct, data-driven, and always reachable. He made the process simple.",
    rating: 5,
    outcome: "First-time buyer"
  },
  {
    name: "Lauren and Chris P.",
    location: "Suffolk, VA",
    quote:
      "Terrance balanced timing between our purchase and sale perfectly. We never felt rushed or uncertain.",
    rating: 5,
    outcome: "Buy and sell support"
  }
] as const;

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

const baseKeywords = [
  "Real Estate Agent in Virginia Beach",
  "Homes for Sale in Virginia Beach",
  "Top Realtor in Virginia Beach",
  "Virginia Beach real estate",
  "Norfolk homes for sale",
  "Chesapeake Realtor",
  "Terrance Ford Realtor",
  "757-814-5785",
  "terrance@terrance-ford.com"
];

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/og-default.svg",
  keywords = []
}: PageMetadataInput): Metadata {
  const fullDescription = `${description} Call ${siteConfig.phoneDisplay} or email ${siteConfig.email}.`;

  return {
    metadataBase: new URL(siteConfig.website),
    title,
    description: fullDescription,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description: fullDescription,
      type: "website",
      url: path,
      siteName: `${siteConfig.name} | ${siteConfig.role}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.role}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: fullDescription,
      images: [image]
    }
  };
}
