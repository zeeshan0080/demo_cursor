"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
			className="group rounded-2xl glass-surface p-3 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
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
					<span className="absolute left-3 top-3 rounded-full bg-[--color-accent] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white shadow-sm">
						{product.tag}
					</span>
				) : null}
				{/* Hover reveal */}
				<div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
					<div className="mx-3 mb-3 rounded-full bg-[--color-accent] text-white p-2 shadow-lg w-10 h-10 flex items-center justify-center">
						<ArrowUpRight size={16} />
					</div>
				</div>
			</div>
			<div className="mt-3 flex items-center justify-between px-1">
				<h3 className="text-sm font-medium">{product.name}</h3>
			</div>
			</motion.article>
		</Link>
	);
}


