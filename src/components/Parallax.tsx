"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Parallax() {
	const { scrollYProgress } = useScroll();
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-gray-50">
			<div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
					<div>
						<motion.h3 style={{ y: y1 }} className="text-2xl sm:text-3xl font-semibold tracking-tight">
							Movement meets minimalism
						</motion.h3>
						<motion.p style={{ y: y1 }} className="mt-4 text-black/70">
							Breathable layers and versatile cuts designed for life in motion. Every piece is crafted to balance ease and structure,
							letting you move effortlessly from work to weekend without changing your rhythm.
						</motion.p>
						<motion.ul style={{ y: y1 }} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
							<li className="rounded-lg border border-black/10 bg-white/60 px-3 py-2">Featherweight, breathable fabrics</li>
							<li className="rounded-lg border border-black/10 bg-white/60 px-3 py-2">Wrinkle-minimizing finishes</li>
							<li className="rounded-lg border border-black/10 bg-white/60 px-3 py-2">Neutral tones, modern lines</li>
							<li className="rounded-lg border border-black/10 bg-white/60 px-3 py-2">Designed to layer year-round</li>
						</motion.ul>
					</div>
					<div className="relative h-72 sm:h-96">
						<motion.div style={{ y: y2 }} className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
							<Image src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop" alt="Lookbook" fill className="object-cover" />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}


