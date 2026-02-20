import { ContactForm } from "@/components/contact-form";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Sellers | Top Realtor in ${siteConfig.city}, ${siteConfig.state}`,
  description:
    `Sell your home with a proven market strategy from ${siteConfig.name}. Get expert pricing, marketing, and negotiation support in ${siteConfig.city}, ${siteConfig.state}.`,
  path: "/sellers"
});

const sellerSteps = [
  {
    title: "1. Property Assessment",
    text: "Review condition, upgrades, timing, and neighborhood comps to determine positioning."
  },
  {
    title: "2. Pricing Strategy",
    text: "Set an evidence-based list price designed to attract qualified buyers and maximize leverage."
  },
  {
    title: "3. Launch & Marketing",
    text: "Execute premium visuals, digital distribution, and targeted exposure to serious buyers."
  },
  {
    title: "4. Offer Review",
    text: "Evaluate offers beyond price, including terms, contingencies, and overall certainty of close."
  },
  {
    title: "5. Closing Coordination",
    text: "Manage deadlines and negotiations through appraisal, inspection, and settlement."
  }
];

const strategyItems = [
  "Professional listing preparation and staging guidance",
  "Market-specific promotion plan across major search platforms",
  "Open house and private showing coordination",
  "Negotiation strategy focused on net proceeds and timeline"
];

export default function SellersPage(): JSX.Element {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <p className="text-xs tracking-[0.18em] text-slate uppercase">Seller Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-navy md:text-5xl">
            Sell Your Home with Confidence in {siteConfig.city}, {siteConfig.state}
          </h1>
          <p className="mt-5 max-w-2xl text-slate">
            From pricing strategy to negotiation execution, {siteConfig.name} helps sellers secure strong terms and smooth
            closings.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl text-navy">Home Selling Process</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {sellerSteps.map((step) => (
              <article key={step.title} className="card-surface p-6">
                <h3 className="text-xl text-navy">{step.title}</h3>
                <p className="mt-3 text-sm text-slate">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid gap-8 lg:grid-cols-2">
          <article className="card-surface p-6 md:p-8">
            <h2 className="text-3xl text-navy">Market Strategy</h2>
            <p className="mt-4 text-sm text-slate">
              Every sale strategy is customized by condition, price point, and neighborhood demand so your property enters the
              market with the right momentum.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {strategyItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-5">
              <h3 className="text-xl text-navy">Property Valuation CTA</h3>
              <p className="mt-2 text-sm text-slate">
                Request a tailored valuation and market readiness review for your home.
              </p>
              <a href={siteConfig.phoneHref} className="mt-4 inline-block text-sm font-semibold text-navy underline">
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </article>

          <ContactForm
            source="sellers-page"
            title="Get Your Home Value"
            description="Share your property details and timeline. I will provide a custom valuation strategy."
            submitLabel="Request Valuation"
            defaultMessage="I want to know what my home could sell for in today's market."
          />
        </div>
      </section>
    </>
  );
}
