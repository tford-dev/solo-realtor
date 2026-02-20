import Link from "next/link";
import { navigationLinks, siteConfig } from "@/lib/site";

export function SiteFooter(): JSX.Element {
  return (
    <footer className="bg-navy text-white">
      <div className="container-max grid gap-12 px-6 py-14 md:grid-cols-3 md:px-10 lg:px-16">
        <div>
          <h2 className="font-display text-2xl">Terrance Ford</h2>
          <p className="mt-3 max-w-sm text-sm text-white/75">
            Professional and personal guidance for buying and selling homes across {siteConfig.city}, Norfolk, Chesapeake,
            and surrounding communities.
          </p>
        </div>

        <div>
          <h2 className="text-sm tracking-[0.12em] text-white/70 uppercase">Quick Links</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/90 transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm tracking-[0.12em] text-white/70 uppercase">Contact</h2>
          <div className="mt-4 space-y-2 text-sm text-white/90">
            <a href={siteConfig.phoneHref} className="block hover:text-gold transition">
              {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.emailHref} className="block break-all hover:text-gold transition">
              {siteConfig.email}
            </a>
            <p>Serving {siteConfig.serviceAreas.join(", ")}</p>
          </div>

          <div className="mt-6 flex gap-4 text-sm">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold transition">
              LinkedIn
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-gold transition">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="hover:text-gold transition">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4">
        <p className="text-center text-xs text-white/60">
          © {new Date().getFullYear()} Terrance Ford. All rights reserved. Contact: {siteConfig.phoneDisplay} | {siteConfig.email}
        </p>
      </div>
    </footer>
  );
}
