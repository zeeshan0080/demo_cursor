"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
	{ href: "/", label: "Home" },
	{ href: "#collections", label: "Collections" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<motion.header
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 120, damping: 14 }}
			className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5"
		>
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<Link href="/" className="font-semibold tracking-tight text-xl flex items-center gap-2">
					<span className="inline-block h-6 w-6 rounded-full bg-[--color-accent]" />
					<span className="accent-gradient-text">Moda</span>
				</Link>

				<ul className="flex items-center gap-6 text-sm">
					{links.map((l) => (
						<li key={l.href}>
							<Link
								href={l.href}
								className={clsx(
									"transition-colors hover:text-black link-accent",
									pathname === l.href ? "text-black" : "text-black/60"
								)}
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="hidden sm:flex items-center gap-3">
					<Link href="#collections" className="btn-primary">Shop</Link>
				</div>
			</nav>
		</motion.header>
	);
}


