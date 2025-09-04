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
			className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5"
		>
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<Link href="/" className="font-semibold tracking-tight text-xl">
					Moda
				</Link>

				<ul className="flex items-center gap-6 text-sm">
					{links.map((l) => (
						<li key={l.href}>
							<Link
								href={l.href}
								className={clsx(
									"transition-colors hover:text-black/80",
									pathname === l.href ? "text-black" : "text-black/60"
								)}
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</motion.header>
	);
}


