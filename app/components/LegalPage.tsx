import Link from "next/link";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function LegalPage({
  title,
  updated,
  children,
  titleClassName = "",
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="min-h-screen bg-porcelain flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 pb-24 lg:pt-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h1
            className={`font-display font-light text-espresso text-4xl md:text-5xl mb-3 ${titleClassName}`}
          >
            {title}
          </h1>
          {updated && <p className="text-sm text-espresso/45 mb-10">Stand: {updated}</p>}
          <div className="legal-prose text-espresso/75 font-light leading-relaxed space-y-4">
            {children}
          </div>
          <p className="mt-14">
            <Link
              href="/"
              className="text-sm text-espresso/60 underline underline-offset-2 hover:text-espresso transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl text-espresso pt-8 pb-1">{children}</h2>
  );
}

export function LegalH3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-sans text-base font-medium text-espresso pt-4">{children}</h3>;
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-almond/60 text-espresso px-1 rounded-sm not-italic">[{children}]</mark>
  );
}
