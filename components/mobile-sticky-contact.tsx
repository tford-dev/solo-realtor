import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MobileStickyContact(): JSX.Element {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <div className="grid grid-cols-2 gap-2 rounded-xl border border-navy/15 bg-white p-2 shadow-luxe">
        <a href={siteConfig.phoneHref} className="btn-primary text-center text-sm">
          Call {siteConfig.phoneDisplay}
        </a>
        <Link href="/contact" className="btn-secondary text-center text-sm">
          Contact Terrance
        </Link>
      </div>
    </div>
  );
}
