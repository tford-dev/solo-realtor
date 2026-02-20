import Link from "next/link";
import { ListingCard } from "@/components/listing-card";
import { listings } from "@/lib/listings";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Homes for Sale in ${siteConfig.city}, ${siteConfig.state}`,
  description:
    `Explore homes for sale in ${siteConfig.city}, ${siteConfig.state} with ${siteConfig.name}, a top Realtor offering strategic buyer guidance and neighborhood expertise.`,
  path: "/listings"
});

export default function ListingsPage(): JSX.Element {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <p className="text-xs tracking-[0.18em] text-slate uppercase">Listings</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-navy md:text-5xl">
            Homes for Sale in {siteConfig.city}, {siteConfig.state} and Nearby Markets
          </h1>
          <p className="mt-5 max-w-2xl text-slate">
            Browse featured properties and request a private tour. These are sample listings to demonstrate layout and content
            structure for a premium realtor website.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-max flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl">Need custom listing alerts?</h2>
            <p className="mt-2 text-white/80">Get curated homes for sale in {siteConfig.city}, {siteConfig.state} sent to your inbox.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Start My Home Search
          </Link>
        </div>
      </section>
    </>
  );
}
