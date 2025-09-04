"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Product = {
	 id: string;
	 name: string;
	 price: string;
	 image: string;
	 tag?: string;
};

export default function ProductCard({ product }: { product: Product }) {
	return (
		<Link href={`/product/${product.id}`}>
			<motion.article
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6 }}
			whileHover={{ y: -4 }}
			className="group rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-3 shadow-sm hover:shadow-md transition-shadow"
		>
			<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					priority={false}
				/>
				{product.tag ? (
					<span className="absolute left-3 top-3 rounded-full bg-black px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
						{product.tag}
					</span>
				) : null}
			</div>
			<div className="mt-3 flex items-center justify-between">
				<h3 className="text-sm font-medium">{product.name}</h3>
				<p className="text-sm text-black/70">{product.price}</p>
			</div>
			</motion.article>
		</Link>
	);
}


