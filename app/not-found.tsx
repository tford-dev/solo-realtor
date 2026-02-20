import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <section className="section-padding">
      <div className="container-max card-surface p-8 text-center md:p-12">
        <h1 className="text-4xl text-navy">Page Not Found</h1>
        <p className="mt-4 text-slate">The page you requested could not be found.</p>
        <div className="mt-6">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
