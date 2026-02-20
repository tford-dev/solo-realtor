import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { formatPrice, getListingBySlug, listings } from "@/lib/listings";
import { createPageMetadata, siteConfig } from "@/lib/site";

interface ListingDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export function generateMetadata({ params }: ListingDetailPageProps): Metadata {
  const listing = getListingBySlug(params.slug);

  if (!listing) {
    return createPageMetadata({
      title: "Listing Not Found",
      description: `Browse homes for sale in ${siteConfig.city}, ${siteConfig.state}.`,
      path: "/listings"
    });
  }

  return createPageMetadata({
    title: `${listing.title} | ${formatPrice(listing.price)}`,
    description: `${listing.beds} bed, ${listing.baths} bath property in ${listing.city}, ${listing.state}. Explore this home with ${siteConfig.name}.`,
    path: `/listings/${listing.slug}`,
    image: listing.image
  });
}

export default function ListingDetailPage({ params }: ListingDetailPageProps): JSX.Element {
  const listing = getListingBySlug(params.slug);

  if (!listing) {
    notFound();
  }

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <Link href="/listings" className="text-sm text-navy underline">
            Back to Listings
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <article>
              <div className="card-surface overflow-hidden">
                <Image
                  src={listing.image}
                  alt={`${listing.title} at ${listing.address}`}
                  width={1200}
                  height={840}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <h1 className="mt-6 text-4xl text-navy md:text-5xl">{listing.title}</h1>
              <p className="mt-2 text-slate">
                {listing.address}, {listing.city}, {listing.state} {listing.zip}
              </p>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-charcoal/85">
                <p>{formatPrice(listing.price)}</p>
                <p>{listing.beds} Beds</p>
                <p>{listing.baths} Baths</p>
                <p>{listing.sqft.toLocaleString()} Sq Ft</p>
              </div>

              <h2 className="mt-8 text-2xl text-navy">Property Overview</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate">{listing.description}</p>

              <h2 className="mt-8 text-2xl text-navy">Key Features</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                {listing.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <ContactForm
                source={`listing-${listing.slug}`}
                title="Schedule a Private Tour"
                description={`Ask about this property or request available showing times. ${siteConfig.name} will follow up quickly.`}
                submitLabel="Request Tour"
                defaultMessage={`I would like more details about ${listing.title} at ${listing.address}.`}
              />

              <article className="card-surface p-6">
                <h2 className="text-2xl text-navy">Need Similar Homes?</h2>
                <p className="mt-3 text-sm text-slate">
                  Get a personalized list of homes for sale in {siteConfig.city}, {siteConfig.state} that match your budget and
                  timeline.
                </p>
                <div className="mt-4">
                  <a href={siteConfig.phoneHref} className="btn-secondary">
                    Call {siteConfig.phoneDisplay}
                  </a>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
