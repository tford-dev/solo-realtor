import Image from "next/image";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `About ${siteConfig.name}`,
  description:
    `${siteConfig.name} is a Real Estate Agent in ${siteConfig.city}, ${siteConfig.state} focused on premium service, strategic advising, and trusted results for buyers and sellers.`,
  path: "/about"
});

const certifications = [
  "Licensed Realtor® - Commonwealth of Virginia",
  "Certified Residential Specialist (CRS)",
  "Accredited Buyer's Representative (ABR)",
  "Seller Representative Specialist (SRS)"
];

export default function AboutPage(): JSX.Element {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.18em] text-slate uppercase">About</p>
            <h1 className="mt-3 max-w-2xl text-4xl text-navy md:text-5xl">
              Meet {siteConfig.name}, Your Trusted Real Estate Agent in {siteConfig.city}, {siteConfig.state}
            </h1>
            <p className="mt-5 max-w-2xl text-slate">
              Terrance is known for detail-driven preparation, clear communication, and a calm, strategic approach that helps
              clients make confident decisions through every phase of a transaction.
            </p>
          </div>

          <div className="card-surface overflow-hidden">
            <Image
              src="/images/side-image-arm-up-brighter.png"
              alt="Terrance Ford professional realtor headshot"
              width={800}
              height={950}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-8 md:grid-cols-3">
          <article className="card-surface p-6">
            <h2 className="text-2xl text-navy">12+ Years</h2>
            <p className="mt-3 text-sm text-slate">Years of residential real estate experience across the Hampton Roads market.</p>
          </article>
          <article className="card-surface p-6">
            <h2 className="text-2xl text-navy">200+ Closings</h2>
            <p className="mt-3 text-sm text-slate">Proven negotiation and transaction management across market conditions.</p>
          </article>
          <article className="card-surface p-6">
            <h2 className="text-2xl text-navy">Client First</h2>
            <p className="mt-3 text-sm text-slate">A mission centered on trust, transparency, and measurable outcomes.</p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <h2 className="text-3xl text-navy">Professional Mission</h2>
            <p className="mt-4 text-slate">
              My goal is to deliver a high-integrity real estate experience where every client feels informed, protected, and
              fully supported from first conversation to closing table.
            </p>

            <h2 className="mt-10 text-3xl text-navy">Certifications &amp; Licenses</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {certifications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="card-surface p-6 md:p-8">
            <h2 className="text-3xl text-navy">Community Involvement</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Terrance regularly supports local school initiatives, housing education workshops, and neighborhood nonprofit events
              across {siteConfig.city}, Norfolk, and Chesapeake. He believes strong communities and strong homeownership outcomes
              go hand in hand.
            </p>
            <div className="mt-6 border-t border-navy/10 pt-6 text-sm text-slate">
              <p>Need a dedicated advisor for your next move?</p>
              <p className="mt-2">
                Reach out at <a href={siteConfig.phoneHref} className="text-navy underline">{siteConfig.phoneDisplay}</a> or
                <a href={siteConfig.emailHref} className="ml-1 text-navy underline">{siteConfig.email}</a>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
