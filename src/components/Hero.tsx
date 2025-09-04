"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden">
			<div className="mx-auto max-w-6xl px-4 pt-32 pb-20 sm:pb-28">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-4xl sm:text-6xl font-semibold tracking-tight"
				>
					Effortless Style, Everyday Comfort
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.7 }}
					className="mt-4 max-w-2xl text-black/70"
				>
					Discover curated essentials with premium fabrics, minimal silhouettes, and a focus on fit.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.7 }}
					className="mt-8 flex items-center gap-3"
				>
					<Link
						href="#collections"
						className="rounded-full bg-black px-5 py-3 text-white text-sm font-medium hover:bg-black/90 transition-colors"
					>
						Shop collections
					</Link>
					<Link
						href="#about"
						className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium hover:bg-black/5 transition-colors"
					>
						Learn more
					</Link>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1.2 }}
				className="pointer-events-none absolute inset-0 -z-10"
			>
				<div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-rose-200/60 blur-3xl" />
				<div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
			</motion.div>
		</section>
	);
}


