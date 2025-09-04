import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Parallax from "@/components/Parallax";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Collections products={products} />
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About us</h2>
        <p className="mt-4 max-w-2xl text-black/70">
          We design elevated basics built on comfort and movement. Quality materials, timeless silhouettes, and thoughtful details.
        </p>
      </section>
      <Parallax />
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 max-w-2xl text-black/70">Email us at hello@moda.example</p>
      </section>
    </div>
  );
}
