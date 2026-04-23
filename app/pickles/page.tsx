import { PageBanner } from "../components/PageBanner";
import { ProductCard } from "../components/ProductCard";
import { pickles } from "../lib/products";

export const metadata = {
  title: "Pickles · SR Foods",
  description:
    "Andhra-style pickles — avakaya, gongura, pandu mirchi — slow-cured in cold-pressed sesame oil.",
};

export default function PicklesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Collection"
        title={<>The <span className="text-turmeric">Pickle</span> Cellar</>}
        telugu="ఆవకాయలు · పచ్చళ్ళు"
        subtitle="Slow-cured in earthen jars with cold-pressed sesame oil, hand-pounded mustard, and Guntur red chilli. The kind of pickles you grew up eating."
      />
      <section className="py-16 md:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {pickles.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
