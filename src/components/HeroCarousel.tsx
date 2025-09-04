"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
	{
		image:
			"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop",
		title: "Summer 2025",
		subtitle: "Light layers in bold tones",
		cta: { label: "Shop Women", href: "#collections" },
	},
	{
		image:
			"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
		title: "Everyday Essentials",
		subtitle: "Wardrobe building blocks",
		cta: { label: "Shop Men", href: "#collections" },
	},
	{
		image:
			"https://images.unsplash.com/photo-1520975922284-728f03b08a35?q=80&w=2000&auto=format&fit=crop",
		title: "Athleisure Edit",
		subtitle: "Move with ease",
		cta: { label: "Shop Active", href: "#collections" },
	},
];

export default function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(id);
	}, []);

	const slide = slides[index];

	return (
		<section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0 -z-10">
				<AnimatePresence mode="wait">
					<motion.div
						key={slide.image}
						initial={{ opacity: 0, scale: 1.04 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="absolute inset-0 bg-center bg-cover"
						style={{ backgroundImage: `url(${slide.image})` }}
					/>
				</AnimatePresence>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
				<div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[--color-accent]/30 blur-3xl" />
			</div>

			<div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4">
				<div className="glass-surface rounded-3xl p-6 sm:p-10 max-w-xl">
					<motion.h1
						key={slide.title}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="text-4xl sm:text-6xl font-semibold tracking-tight"
					>
						<span className="accent-gradient-text">{slide.title}</span>
					</motion.h1>
					<motion.p
						key={slide.subtitle}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.1, duration: 0.6 }}
						className="mt-4 text-black/80"
					>
						{slide.subtitle}
					</motion.p>
					<div className="mt-6 flex items-center gap-3">
						<Link href={slide.cta.href} className="btn-primary">
							{slide.cta.label}
						</Link>
					</div>
					<div className="mt-6 flex gap-2">
						{slides.map((_, i) => (
							<button
								key={i}
								aria-label={`Go to slide ${i + 1}`}
								onClick={() => setIndex(i)}
								className={`h-2 w-6 rounded-full transition-all ${
									i === index ? "bg-[--color-accent]" : "bg-black/20"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


