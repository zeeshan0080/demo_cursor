import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

export function generateStaticParams() {
	return products.map((p) => ({ id: p.id }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
	const product = products.find((p) => p.id === params.id);
	if (!product) return notFound();

	const gallery = [product.image,
		"https://images.unsplash.com/photo-1520975922284-728f03b08a35?q=80&w=1200&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=1200&auto=format&fit=crop",
	];

	// Dummy size availability
	const sizes: { label: string; available: boolean }[] = [
		{ label: "XS", available: true },
		{ label: "S", available: true },
		{ label: "M", available: false },
		{ label: "L", available: true },
		{ label: "XL", available: true },
	];

	return (
		<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
			<nav className="text-sm text-black/60 mb-6">
				<Link href="/" className="link-accent">Home</Link> / <Link href="#collections" className="link-accent">Collections</Link> / <span className="text-black">{product.name}</span>
			</nav>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="space-y-3">
					<div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-black/10 bg-white/60">
						<Image src={gallery[0]} alt={product.name} fill className="object-cover" />
					</div>
					<div className="grid grid-cols-3 gap-3">
						{gallery.slice(1).map((src, i) => (
							<div key={i} className="relative aspect-[4/5] overflow-hidden rounded-xl border border-black/10 bg-white/60">
								<Image src={src} alt={`${product.name} ${i+2}`} fill className="object-cover" />
							</div>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{product.name}</h1>
					<p className="mt-2 text-lg">{product.price}</p>
					<p className="mt-4 text-black/70">
						Soft, breathable fabric with a tailored silhouette designed for everyday wear. Machine washable.
					</p>
					<div className="mt-6">
						<h2 className="text-sm font-medium text-black/80">Size availability</h2>
						<div className="mt-3 grid grid-cols-5 gap-2">
							{sizes.map((s) => (
								<div
									key={s.label}
									className={`text-center rounded-lg border p-2 text-sm ${
										s.available
											? "border-black/15 bg-white/70"
											: "border-black/10 bg-black/5 text-black/40 line-through"
										}`}
									aria-disabled={!s.available}
								>
									{s.label}
								</div>
							))}
						</div>
						<p className="mt-2 text-xs text-black/60">M currently out of stock.</p>
					</div>
					<div className="mt-6">
						<button className="btn-primary">Add to bag</button>
					</div>
					<div className="mt-10">
						<h2 className="font-medium">Specifications</h2>
						<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
							<li className="rounded-xl border border-black/10 p-3 bg-white/60">100% cotton / 180 GSM</li>
							<li className="rounded-xl border border-black/10 p-3 bg-white/60">Pre-shrunk, true-to-size fit</li>
							<li className="rounded-xl border border-black/10 p-3 bg-white/60">Machine wash cold</li>
							<li className="rounded-xl border border-black/10 p-3 bg-white/60">Made in Portugal</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}


