import { ContactForm } from "@/components/contact-form";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Contact ${siteConfig.name}`,
  description: `Contact ${siteConfig.name}, Real Estate Agent in ${siteConfig.city}, ${siteConfig.state}. Call ${siteConfig.phoneDisplay} or send a message for buyer and seller support.`,
  path: "/contact"
});

export default function ContactPage(): JSX.Element {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="card-surface p-6 md:p-8">
            <p className="text-xs tracking-[0.18em] text-slate uppercase">Contact</p>
            <h1 className="mt-3 text-4xl text-navy md:text-5xl">Let&apos;s Plan Your Next Move</h1>
            <p className="mt-4 text-slate">
              Reach out for buyer representation, seller strategy, property valuation, or listing support.
            </p>

            <div className="mt-6 space-y-4 text-sm text-charcoal/90">
              <p>
                <span className="font-semibold text-navy">Phone:</span>{" "}
                <a href={siteConfig.phoneHref} className="underline text-navy">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="font-semibold text-navy">Email:</span>{" "}
                <a href={siteConfig.emailHref} className="underline text-navy">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-navy">Service Area:</span> {siteConfig.serviceAreas.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-navy">Availability:</span> Monday-Saturday, 8:00 AM - 7:00 PM
              </p>
            </div>

            <div className="mt-8 rounded-md border border-gold/30 bg-gold/10 p-4">
              <h2 className="text-xl text-navy">Above-the-Fold Contact Options</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={siteConfig.phoneHref} className="btn-primary text-sm">
                  Call Now
                </a>
                <a href={siteConfig.emailHref} className="btn-secondary text-sm">
                  Email {siteConfig.name}
                </a>
              </div>
            </div>
          </article>

          <ContactForm
            source="contact-page"
            title="Send a Message"
            description="Complete the form below and I will follow up shortly."
            submitLabel="Submit Inquiry"
          />
        </div>
      </section>
    </>
  );
}
