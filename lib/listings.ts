export interface Listing {
  slug: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  features: string[];
}

export const listings: Listing[] = [
  {
    slug: "bayfront-modern-retreat",
    title: "Bayfront Modern Retreat",
    address: "3201 Shoreline Drive",
    city: "Virginia Beach",
    state: "VA",
    zip: "23451",
    price: 925000,
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    image: "/images/listings/listing-1.svg",
    description:
      "Designed for coastal living, this modern home offers open-concept interiors, premium finishes, and direct access to bay views.",
    features: [
      "Chef-grade kitchen with quartz waterfall island",
      "Primary suite with private balcony and spa bath",
      "Smart-home lighting and security package",
      "Walkable to restaurants, beaches, and marinas"
    ]
  },
  {
    slug: "golf-course-estate",
    title: "Golf Course Estate",
    address: "1182 Fairway Reserve Lane",
    city: "Chesapeake",
    state: "VA",
    zip: "23322",
    price: 799000,
    beds: 5,
    baths: 4,
    sqft: 3650,
    image: "/images/listings/listing-2.svg",
    description:
      "Elegant brick-front estate with custom millwork, dramatic ceilings, and manicured grounds bordering a private golf community.",
    features: [
      "Two-story foyer and formal entertaining spaces",
      "Three-car garage and extended driveway",
      "Covered outdoor living with fire feature",
      "Minutes to top-rated schools and commuter routes"
    ]
  },
  {
    slug: "downtown-luxury-loft",
    title: "Downtown Luxury Loft",
    address: "450 Granby Street #17A",
    city: "Norfolk",
    state: "VA",
    zip: "23510",
    price: 610000,
    beds: 2,
    baths: 2,
    sqft: 1825,
    image: "/images/listings/listing-3.svg",
    description:
      "Refined high-rise living with skyline views, concierge amenities, and custom interior upgrades throughout.",
    features: [
      "Floor-to-ceiling windows with city and river views",
      "Gourmet kitchen with panel-ready appliances",
      "Secure building access and private parking",
      "Close to dining, arts district, and waterfront"
    ]
  },
  {
    slug: "family-home-in-kempsville",
    title: "Family Home in Kempsville",
    address: "5524 Silver Oak Court",
    city: "Virginia Beach",
    state: "VA",
    zip: "23464",
    price: 545000,
    beds: 4,
    baths: 2.5,
    sqft: 2480,
    image: "/images/listings/listing-4.svg",
    description:
      "A warm, updated home on a cul-de-sac with spacious living zones and a backyard built for family gatherings.",
    features: [
      "Renovated kitchen and breakfast nook",
      "Dedicated home office and flex room",
      "Fully fenced backyard with deck",
      "Near parks, shopping, and major highways"
    ]
  },
  {
    slug: "new-construction-coastal",
    title: "New Construction Coastal Home",
    address: "1820 Mariners Way",
    city: "Virginia Beach",
    state: "VA",
    zip: "23455",
    price: 1025000,
    beds: 5,
    baths: 4.5,
    sqft: 3900,
    image: "/images/listings/listing-5.svg",
    description:
      "Newly built custom residence combining timeless architecture, expansive natural light, and upscale modern conveniences.",
    features: [
      "White oak flooring and designer lighting",
      "Scullery pantry and premium appliance suite",
      "Main-level guest suite plus bonus media room",
      "Energy-efficient systems and warranties included"
    ]
  },
  {
    slug: "waterfront-townhome",
    title: "Waterfront Townhome Collection",
    address: "920 Waterside Landing",
    city: "Suffolk",
    state: "VA",
    zip: "23435",
    price: 489000,
    beds: 3,
    baths: 2.5,
    sqft: 2105,
    image: "/images/listings/listing-6.svg",
    description:
      "Turn-key waterfront townhome with low-maintenance living, private deck, and premium community amenities.",
    features: [
      "Open kitchen with oversized island seating",
      "Water-view primary bedroom with walk-in closet",
      "Attached garage and smart storage solutions",
      "Community trails, dock access, and clubhouse"
    ]
  }
];

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((listing) => listing.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}
