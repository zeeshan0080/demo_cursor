import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import Collections from "@/components/Collections";
import Parallax from "@/components/Parallax";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Collections products={products} />
      <Collections products={products} title="On Sale" />
      <Collections products={products} title="Summer Clearance" />
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About us</h2>
        <div className="mt-4 max-w-3xl text-black/70 space-y-4">
          <p>
            Founded in 2018, Moda crafts everyday essentials with premium, responsibly sourced materials. Our mission is to blend comfort,
            durability, and modern design so you feel confident from the first wear.
          </p>
          <p>
            We work with family-owned factories, prioritize low-impact dyes, and design timeless silhouettes to transcend seasons. Every piece
            is wear-tested to ensure an exceptional fit and feel.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li className="rounded-xl border border-black/10 p-4 bg-white/60">Sustainably sourced fabrics</li>
            <li className="rounded-xl border border-black/10 p-4 bg-white/60">Fair-wage manufacturing</li>
            <li className="rounded-xl border border-black/10 p-4 bg-white/60">Designed in California</li>
          </ul>
        </div>
      </section>
      <Parallax />
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="rounded-xl border border-black/10 p-4 bg-white/60">
            <p className="font-medium">Customer Support</p>
            <p className="text-black/70 mt-1">hello@moda.example</p>
          </div>
          <div className="rounded-xl border border-black/10 p-4 bg-white/60">
            <p className="font-medium">Showroom</p>
            <p className="text-black/70 mt-1">123 Valencia St, San Francisco, CA</p>
          </div>
          <div className="rounded-xl border border-black/10 p-4 bg-white/60">
            <p className="font-medium">Phone</p>
            <p className="text-black/70 mt-1">(415) 555-0199</p>
          </div>
        </div>
      </section>
    </div>
  );
}
