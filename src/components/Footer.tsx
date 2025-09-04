export default function Footer() {
	return (
		<footer className="border-t border-black/5 bg-white/70 backdrop-blur">
			<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/60 flex items-center justify-between">
				<p>© {new Date().getFullYear()} Moda. All rights reserved.</p>
				<p className="hidden sm:block">Crafted with Next.js, Tailwind & Framer Motion</p>
			</div>
		</footer>
	);
}


