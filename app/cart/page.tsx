import Link from "next/link";
import { PageBanner } from "../components/PageBanner";

export const metadata = {
  title: "Cart · SR Foods",
  description: "Your basket of Andhra heat.",
};

export default function CartPage() {
  return (
    <>
      <PageBanner
        eyebrow="Your Basket"
        title={<>The <span className="text-turmeric">Cart</span></>}
        telugu="మీ బుట్ట"
      />
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-chilli/10 text-6xl">
            🫙
          </div>
          <h2 className="font-display mt-6 text-3xl font-bold text-maroon md:text-4xl">
            Your basket is empty
          </h2>
          <p className="mt-3 text-charcoal/70">
            Looks like you haven&apos;t added any flavour yet. Start with a jar of
            avakaya or a packet of Guntur karam — your kitchen will thank you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/pickles"
              className="btn-primary rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider"
            >
              Shop Pickles →
            </Link>
            <Link
              href="/karam"
              className="rounded-full border-2 border-maroon px-7 py-3 text-sm font-bold uppercase tracking-wider text-maroon hover:bg-maroon hover:text-cream transition-colors"
            >
              Shop Karam
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
