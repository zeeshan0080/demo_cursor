"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
	{
		image:
			"https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop",
		title: "Summer 2025",
		subtitle: "Light layers in bold tones",
		badge: "Women",
		cta: { label: "Shop Women", href: "#collections" },
	},
	{
		image:
			"https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop",
		title: "Everyday Essentials",
		subtitle: "Wardrobe building blocks",
		badge: "Men",
		cta: { label: "Shop Men", href: "#collections" },
	},
	{
		image:
			"https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop",
		title: "Athleisure Edit",
		subtitle: "Move with ease",
		badge: "Active",
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
				<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
				{/* Animated accent gradient line */}
				<div className="pointer-events-none absolute left-0 right-0 top-24 flex justify-center">
					<div className="h-px w-[70%] bg-gradient-to-r from-transparent via-[--color-accent] to-transparent opacity-70 animate-pulse" />
				</div>
				<div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[--color-accent]/35 blur-3xl" />
			</div>

			<div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4">
				<div className="max-w-2xl">
					<div className="mb-4 inline-flex items-center gap-2">
						<span className="inline-block h-1.5 w-10 rounded-full bg-[--color-accent]" />
						{slide.badge ? (
							<span className="rounded-full bg-black/30 backdrop-blur px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
								{slide.badge}
							</span>
						) : null}
					</div>
					<motion.h1
						key={slide.title}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
					>
						<span className="accent-gradient-text">{slide.title}</span>
					</motion.h1>
					<motion.p
						key={slide.subtitle}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.1, duration: 0.6 }}
						className="mt-4 text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]"
					>
						{slide.subtitle}
					</motion.p>
					<div className="mt-6 flex items-center gap-3">
						<Link href={slide.cta.href} className="btn-primary">
							{slide.cta.label}
						</Link>
						<Link href="#collections" className="rounded-full bg-white/15 text-white ring-1 ring-white/30 px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
							Explore
						</Link>
					</div>
					<div className="mt-6 flex gap-2">
						{slides.map((_, i) => (
							<button
								key={i}
								aria-label={`Go to slide ${i + 1}`}
								onClick={() => setIndex(i)}
								className={`h-2 w-6 rounded-full transition-all ${
									i === index ? "bg-[--color-accent]" : "bg-white/40"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


