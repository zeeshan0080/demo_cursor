"use client";

import { motion } from "framer-motion";
import ProductCard, { type Product } from "./ProductCard";

export default function Collections({ products, title = "Featured Collections" }: { products: Product[]; title?: string }) {
	return (
		<section id="collections" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
			<motion.h2
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-2xl sm:text-3xl font-semibold tracking-tight"
			>
				{title}
			</motion.h2>
			<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
				{products.map((p) => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
		</section>
	);
}


