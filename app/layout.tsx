import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { MobileStickyContact } from "@/components/mobile-sticky-contact";
import { SchemaScript } from "@/components/schema-script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`
  },
  description: `Real Estate Agent in ${siteConfig.city}, ${siteConfig.state}. Call ${siteConfig.phoneDisplay} or email ${siteConfig.email}.`,
  icons: {
    icon: "/images/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <SchemaScript />
        <SiteHeader />
        <main className="min-h-[70vh] pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileStickyContact />
      </body>
    </html>
  );
}
