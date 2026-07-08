import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Anmeldung bestätigt | The Reform Room",
  robots: { index: false, follow: false },
};

export default function NewsletterConfirmedPage() {
  return (
    <div className="min-h-screen bg-porcelain flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display font-light text-espresso text-4xl md:text-5xl mb-4">
            Schön, dass du dabei bist!
          </h1>
          <p className="text-espresso/65 font-light leading-relaxed mb-10">
            Deine Anmeldung ist bestätigt. Du erfährst als Erste, wann The Reform Room eröffnet und
            neue Classes buchbar sind.
          </p>
          <Link
            href="/"
            className="inline-block bg-espresso text-porcelain px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-walnut transition-all duration-300"
          >
            Zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
