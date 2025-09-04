import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import Collections from "@/components/Collections";
import Parallax from "@/components/Parallax";
import { products } from "@/data/products";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Collections products={products} />
      {/* Exclusive Collection full-viewport banner (matches home carousel height) */}
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden my-8 sm:my-12">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
        <div className="pointer-events-none absolute left-0 right-0 top-24 flex justify-center">
          <div className="h-px w-[70%] bg-gradient-to-r from-transparent via-[--color-accent] to-transparent opacity-70 animate-pulse" />
        </div>
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[--color-accent]/35 blur-3xl" />

        {/* Centered content */}
        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-10 rounded-full bg-[--color-accent]" />
              <span className="rounded-full bg-black/30 backdrop-blur px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                Exclusive
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              Exclusive Collection
            </h2>
            <p className="mt-4 text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
              Limited releases crafted for statement looks and everyday ease.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#collections" className="btn-primary">Explore Now</a>
              <a href="#collections" className="rounded-full bg-white/15 text-white ring-1 ring-white/30 px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <Collections products={products} title="Summer Clearance" />
      <Parallax />
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
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-surface rounded-2xl p-6 flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-accent] text-white">
              <Mail size={18} />
            </span>
            <div>
              <p className="font-medium">Customer Support</p>
              <p className="text-black/70">hello@moda.example</p>
            </div>
          </div>
          <div className="glass-surface rounded-2xl p-6 flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-accent] text-white">
              <Phone size={18} />
            </span>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-black/70">(415) 555-0199</p>
            </div>
          </div>
          <div className="glass-surface rounded-2xl p-6 flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-accent] text-white">
              <MapPin size={18} />
            </span>
            <div>
              <p className="font-medium">Showroom</p>
              <p className="text-black/70">123 Valencia St, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
