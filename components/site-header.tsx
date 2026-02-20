"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks, siteConfig } from "@/lib/site";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader(): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-white/15 bg-navy text-xs text-white lg:block">
        <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-6 py-2 lg:px-8">
          <p className="tracking-[0.14em] text-white/80 uppercase">Top Realtor in {siteConfig.city}, {siteConfig.state}</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-gold transition" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>
            <a className="hidden hover:text-gold transition xl:block" href={siteConfig.emailHref}>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1380px] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 whitespace-nowrap font-display text-3xl leading-none text-navy">
          Terrance Ford
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex" aria-label="Primary">
          {navigationLinks.map((link) => {
            const isActive = isActivePath(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.72rem] tracking-[0.11em] uppercase transition ${
                  isActive ? "text-navy" : "text-slate hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="btn-secondary whitespace-nowrap px-3.5 py-2 text-[0.72rem] tracking-[0.08em]"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary whitespace-nowrap px-3.5 py-2 text-[0.72rem] tracking-[0.08em]">
            Schedule Consultation
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-navy/20 p-2 text-navy lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-navy/10 bg-white px-6 py-5 lg:hidden">
          <nav className="space-y-4" aria-label="Mobile primary">
            {navigationLinks.map((link) => {
              const isActive = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-sm tracking-[0.08em] uppercase ${
                    isActive ? "text-navy" : "text-slate"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 grid gap-3">
            <a href={siteConfig.phoneHref} className="btn-secondary text-center">
              {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.emailHref} className="btn-secondary text-center">
              {siteConfig.email}
            </a>
            <Link href="/contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
