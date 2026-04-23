"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Product } from "../lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-20px_rgba(74,10,16,0.4)] ring-1 ring-maroon/10"
    >
      <div className="relative aspect-square overflow-hidden bg-cream-soft">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-maroon/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream backdrop-blur">
          <Flame /> {"🌶️".repeat(product.heat)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-display text-xs italic text-chilli">
          {product.telugu}
        </span>
        <h3 className="font-display text-lg font-bold text-maroon leading-tight">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-charcoal/70">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="font-display text-xl font-bold text-maroon">
              ₹{product.price}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-charcoal/50">
              {product.weight}
            </div>
          </div>
          <button
            type="button"
            className="rounded-full bg-chilli px-4 py-2 text-xs font-bold uppercase tracking-wider text-cream shadow-[0_4px_0_#5a0512] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Flame() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2c1 4 4 5 4 9a5 5 0 11-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 1-5 2-8z" />
    </svg>
  );
}
