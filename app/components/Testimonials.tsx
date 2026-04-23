"use client";

import { motion } from "motion/react";
import { SectionHeading } from "./Section";

const reviews = [
  {
    name: "Lakshmi Devi",
    place: "Hyderabad",
    quote:
      "Tastes exactly like my ammamma's avakaya. The mango is firm, the karam hits hard — couldn't ask for more.",
  },
  {
    name: "Ravi Teja",
    place: "Bengaluru",
    quote:
      "I order the Guntur karam every month. Colour is deep red, aroma fills the kitchen. Worth every rupee.",
  },
  {
    name: "Anitha Reddy",
    place: "Chennai",
    quote:
      "Gongura pickle reminded me of summers in Vijayawada. Packaging is neat, delivery was quick.",
  },
  {
    name: "Suresh Kumar",
    place: "Mumbai",
    quote:
      "The vellulli karam with hot rice and ghee is unbeatable. SR Foods is now a pantry staple at home.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-charcoal py-20 md:py-28 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Tasted & Loved"
          title={
            <span className="text-cream">
              Stories from <span className="text-turmeric">our table</span>
            </span>
          }
          subtitle="What customers say about the taste, the heat and the memories."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-cream/10 bg-maroon/40 p-6 backdrop-blur"
            >
              <div className="absolute -top-4 left-6 text-5xl text-turmeric leading-none">
                “
              </div>
              <div className="mb-3 text-turmeric">★★★★★</div>
              <blockquote className="text-sm leading-relaxed text-cream/85">
                {r.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chilli text-sm font-bold text-cream">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-cream">
                    {r.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-cream/50">
                    {r.place}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
