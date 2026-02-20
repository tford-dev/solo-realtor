import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/lib/listings";
import { formatPrice } from "@/lib/listings";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps): JSX.Element {
  return (
    <article className="card-surface overflow-hidden">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={listing.image}
          alt={`${listing.title} at ${listing.address}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl text-navy">{listing.title}</h3>
          <p className="text-lg font-semibold text-gold">{formatPrice(listing.price)}</p>
        </div>

        <p className="text-sm text-slate">
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </p>

        <p className="text-sm text-charcoal/80">
          {listing.beds} Beds • {listing.baths} Baths • {listing.sqft.toLocaleString()} Sq Ft
        </p>

        <Link href={`/listings/${listing.slug}`} className="btn-secondary inline-block text-sm">
          View Property Details
        </Link>
      </div>
    </article>
  );
}
