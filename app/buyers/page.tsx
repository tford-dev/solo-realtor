import Link from "next/link";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Buyers | Real Estate Agent in ${siteConfig.city}, ${siteConfig.state}`,
  description:
    `Learn the complete home buying process with ${siteConfig.name}. Confidently purchase homes for sale in ${siteConfig.city}, ${siteConfig.state}.`,
  path: "/buyers"
});

const buyerSteps = [
  {
    title: "1. Strategy Consultation",
    text: "Review your goals, timeline, financing position, and neighborhood priorities to build a focused plan."
  },
  {
    title: "2. Home Search & Tours",
    text: "Receive curated listings and private tours based on your must-haves, budget, and lifestyle needs."
  },
  {
    title: "3. Offer & Negotiation",
    text: "Craft a strong, competitive offer with terms designed to protect your interests and improve acceptance odds."
  },
  {
    title: "4. Due Diligence",
    text: "Coordinate inspections, appraisals, and key deadlines to reduce surprises and keep the process on track."
  },
  {
    title: "5. Closing & Move-In",
    text: "Finalize documents, confirm closing details, and transition into your new home with confidence."
  }
];

const benefits = [
  "Access to off-market and pre-market opportunities",
  "Data-backed offer strategy in competitive markets",
  "Clear communication from first showing to closing",
  "Trusted network of lenders, inspectors, and attorneys"
];

const faqs = [
  {
    question: "How much should I budget for closing costs?",
    answer:
      "Most buyers in our market should plan for approximately 2% to 4% of purchase price, depending on loan type and negotiated terms."
  },
  {
    question: "Do I need to be pre-approved before touring homes?",
    answer:
      "Yes. A strong pre-approval helps define your search range and makes your offer more competitive once you find the right property."
  },
  {
    question: "How long does the buying process take?",
    answer:
      "Timelines vary, but many transactions close in 30 to 45 days after offer acceptance. Planning and responsiveness can shorten this."
  }
];

export default function BuyersPage(): JSX.Element {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <p className="text-xs tracking-[0.18em] text-slate uppercase">Buyer Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-navy md:text-5xl">
            Buy with Confidence in {siteConfig.city}, {siteConfig.state}
          </h1>
          <p className="mt-5 max-w-2xl text-slate">
            Work with a top Realtor in {siteConfig.city}, {siteConfig.state} to simplify your search, strengthen your offer
            strategy, and secure the right home.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl text-navy">Step-by-Step Home Buying Process</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {buyerSteps.map((step) => (
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
            <h2 className="text-3xl text-navy">Benefits of Working with {siteConfig.name}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {benefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          </article>

          <article className="card-surface p-6 md:p-8">
            <h2 className="text-3xl text-navy">Buyer FAQs</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-md border border-navy/10 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-navy">{faq.question}</summary>
                  <p className="mt-2 text-sm text-slate">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-max flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl">Start Your Home Search</h2>
            <p className="mt-2 text-white/80">Tell me what you need and I&apos;ll send matching homes for sale in {siteConfig.city}, {siteConfig.state}.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Talk to {siteConfig.name}
          </Link>
        </div>
      </section>
    </>
  );
}
