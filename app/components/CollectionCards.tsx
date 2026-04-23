"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const collections = [
  {
    href: "/pickles",
    title: "Pickles",
    telugu: "ఆవకాయలు · పచ్చళ్ళు",
    desc: "Avakaya, gongura, pandu mirchi — slow-cured in cold-pressed sesame oil and stored in earthen jars.",
    cta: "Explore Pickles",
    image: "/mango-pickle.png",
    accent: "from-chilli to-maroon",
  },
  {
    href: "/karam",
    title: "Karam",
    telugu: "కారం · మసాలాలు",
    desc: "Hand-pounded podis and masalas — fiery Guntur red, garlicky vellulli and aromatic sambhar blends.",
    cta: "Explore Karam",
    image: "/plain-mirchi-karam.png",
    accent: "from-ember to-chilli-deep",
  },
];

export function CollectionCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {collections.map((c, i) => (
        <motion.div
          key={c.href}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <Link
            href={c.href}
            className="group relative block overflow-hidden rounded-[2rem] bg-charcoal text-cream"
          >
            <div className="relative aspect-[4/5] md:aspect-[5/4]">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${c.accent} opacity-60 mix-blend-multiply`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <span className="font-display text-sm italic text-turmeric">
                {c.telugu}
              </span>
              <h3 className="font-display text-4xl font-black md:text-6xl">
                {c.title}
              </h3>
              <p className="mt-3 max-w-md text-sm text-cream/80 md:text-base">
                {c.desc}
              </p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-turmeric px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-maroon transition-transform group-hover:translate-x-1">
                {c.cta} <span>→</span>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
