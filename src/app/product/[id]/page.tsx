import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductViewer, { type ProductViewData } from "@/components/ProductViewer";

export function generateStaticParams() {
	return products.map((p) => ({ id: p.id }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
	const product = products.find((p) => p.id === params.id);
	if (!product) return notFound();

	const skirt = "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop";
	const gallery = [skirt, skirt, skirt];

	const sizes = [
		{ label: "XS", available: true },
		{ label: "S", available: true },
		{ label: "M", available: false },
		{ label: "L", available: true },
		{ label: "XL", available: true },
	];

	const productData: ProductViewData = {
		id: product.id,
		name: product.name,
		gallery,
	};

	return <ProductViewer product={productData} sizes={sizes} />;
}



