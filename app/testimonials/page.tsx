import { createPageMetadata, siteConfig, testimonials } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Client Testimonials | ${siteConfig.name}`,
  description:
    `Read why clients call ${siteConfig.name} a top Realtor in ${siteConfig.city}, ${siteConfig.state} for buying and selling homes.`,
  path: "/testimonials"
});

export default function TestimonialsPage(): JSX.Element {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <p className="text-xs tracking-[0.18em] text-slate uppercase">Testimonials</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-navy md:text-5xl">
            Why Clients Trust {siteConfig.name} as a Top Realtor in {siteConfig.city}, {siteConfig.state}
          </h1>
          <p className="mt-5 max-w-2xl text-slate">
            Real stories from buyers and sellers who wanted a personal, high-accountability real estate experience.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card-surface p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                <p className="text-gold" aria-label={`${testimonial.rating} star rating`}>
                  {"★".repeat(testimonial.rating)}
                </p>
              </div>
              <p className="mt-1 text-xs text-slate">{testimonial.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/90">“{testimonial.quote}”</p>
              <p className="mt-4 text-xs tracking-[0.12em] text-slate uppercase">{testimonial.outcome}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
