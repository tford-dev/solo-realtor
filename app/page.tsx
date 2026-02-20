import Image from "next/image";
import Link from "next/link";
import { ListingCard } from "@/components/listing-card";
import { listings } from "@/lib/listings";
import { createPageMetadata, siteConfig, testimonials } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Top Realtor in ${siteConfig.city}, ${siteConfig.state}`,
  description:
    `Helping buyers and sellers move with confidence. Work with ${siteConfig.name}, a trusted Real Estate Agent in ${siteConfig.city}, ${siteConfig.state}.`,
  path: "/"
});

const featuredListings = listings.slice(0, 3);

const valuePoints = [
  {
    title: "Local Market Intelligence",
    body: `Hyperlocal pricing guidance and neighborhood insights for ${siteConfig.city}, Norfolk, and Chesapeake.`
  },
  {
    title: "White-Glove Communication",
    body: "Clear updates, rapid response times, and proactive strategy from consultation to closing."
  },
  {
    title: "Negotiation That Protects You",
    body: "Offer and contract strategy focused on long-term value, timing, and risk reduction."
  }
];

export default function HomePage(): JSX.Element {
  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-gradient-to-br from-navy via-navy to-charcoal text-white">
        <div className="section-padding relative">
          <div className="container-max grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">Real Estate Agent in {siteConfig.city}, {siteConfig.state}</p>
              <h1 className="mt-4 max-w-xl text-4xl leading-tight md:text-5xl">
                Helping You Buy &amp; Sell Homes with Confidence
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
                {siteConfig.name} provides a premium, personal real estate experience for buyers and sellers looking for trusted
                guidance and strong results.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link href="/listings" className="btn-secondary border-white/30 bg-white/10 text-white hover:border-white hover:bg-white hover:text-navy">
                  View Listings
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-6 text-sm text-white/80">
                <a href={siteConfig.phoneHref} className="underline-offset-4 hover:text-gold hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
                <a href={siteConfig.emailHref} className="underline-offset-4 hover:text-gold hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md animate-fade-up">
              <div className="card-surface overflow-hidden border-white/10 bg-white/5">
                <Image
                  src="/images/headshot.svg"
                  alt="Professional headshot of Terrance Ford"
                  width={720}
                  height={880}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs tracking-[0.18em] text-slate uppercase">About Terrance Ford</p>
            <h2 className="mt-3 text-3xl text-navy md:text-4xl">A Personal Approach to Real Estate</h2>
            <p className="mt-4 max-w-2xl text-slate">
              With more than a decade of experience guiding clients across Hampton Roads, Terrance combines market precision,
              thoughtful advising, and disciplined execution to help clients move on their terms.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <article className="card-surface p-5">
              <p className="text-3xl text-navy">12+</p>
              <p className="mt-2 text-sm text-slate">Years of experience</p>
            </article>
            <article className="card-surface p-5">
              <p className="text-3xl text-navy">200+</p>
              <p className="mt-2 text-sm text-slate">Successful closings</p>
            </article>
            <article className="card-surface p-5">
              <p className="text-3xl text-navy">5★</p>
              <p className="mt-2 text-sm text-slate">Client satisfaction focus</p>
            </article>
            <article className="card-surface p-5">
              <p className="text-3xl text-navy">24h</p>
              <p className="mt-2 text-sm text-slate">Average follow-up time</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.18em] text-slate uppercase">Homes for Sale in {siteConfig.city}, {siteConfig.state}</p>
              <h2 className="mt-3 text-3xl text-navy md:text-4xl">Featured Listings</h2>
            </div>
            <Link href="/listings" className="btn-secondary text-sm">
              Browse All Listings
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <p className="text-xs tracking-[0.18em] text-slate uppercase">Why Work With Me</p>
          <h2 className="mt-3 text-3xl text-navy md:text-4xl">Strategy, Service, and Results</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {valuePoints.map((item) => (
              <article key={item.title} className="card-surface p-6">
                <h3 className="text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <p className="text-xs tracking-[0.18em] text-slate uppercase">Testimonials</p>
          <h2 className="mt-3 text-3xl text-navy md:text-4xl">Client Experiences</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <article key={testimonial.name} className="card-surface p-6">
                <p className="text-gold">{"★".repeat(testimonial.rating)}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-medium text-navy">{testimonial.name}</p>
                <p className="text-xs text-slate">{testimonial.location}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/testimonials" className="btn-secondary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-max flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.18em] text-gold uppercase">Let&apos;s Talk</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Ready to Make Your Next Move?</h2>
            <p className="mt-3 max-w-xl text-white/85">
              Whether you are buying, selling, or planning ahead, get trusted guidance from a top Realtor in {siteConfig.city},
              {siteConfig.state}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={siteConfig.phoneHref} className="btn-primary">
              Call {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-secondary border-white/25 bg-transparent text-white hover:bg-white hover:text-navy">
              Contact {siteConfig.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
