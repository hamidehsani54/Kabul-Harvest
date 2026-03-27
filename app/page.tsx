import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import EmailCapture from "@/components/EmailCapture";
import { heroImageUrl } from "@/lib/imageUrls";
import { products } from "@/lib/products";

const testimonials = [
  { name: "Sara M.", quote: "The almonds taste like the ones from my grandmother’s village — fresh and buttery." },
  { name: "James T.", quote: "Best figs I’ve ordered online. Soft, sweet, and huge." },
  { name: "Priya K.", quote: "Green raisins are perfect for my morning oats. Repeat customer." }
];

export default function HomePage() {
  return (
    <>
      <section className="section bg-midnight text-white">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">Trusted by families & chefs worldwide</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">Premium Afghan dry fruits, from orchard to your door.</h1>
            <p className="mt-4 max-w-lg text-slate-300">
              Sun-dried almonds, jumbo figs, and plump raisins — sourced with care, packed for freshness, loved for flavor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop dry fruits
              </Link>
              <Link href="/landing" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
                View offer
              </Link>
            </div>
          </div>
          <div className="animate-float">
            <Image src="/images/hero.svg" alt="Afghan dry fruits" width={800} height={620} className="w-full rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-4 md:grid-cols-4">
          {["4.9/5 average reviews", "Naturally sun-dried", "Resealable packs", "Freshness guaranteed"].map((item) => (
            <div key={item} className="card text-center font-semibold">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">Bestsellers</h2>
          <p className="mt-2 text-slate-600">A taste of our range — see the full catalog in the shop.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">Why Afghan dry fruits</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Tradition", text: "Generations of growers know how to dry fruit slowly for depth of flavor." },
              { title: "Quality", text: "We prioritize whole nuts, large figs, and clean raisins — sorted by hand." },
              { title: "Everyday", text: "Snack, bake, gift, or add to breakfast — natural energy without the junk." }
            ].map((item) => (
              <article key={item.title} className="card">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Pick your favorites", "We pack with care", "Enjoy at home or gift"].map((step, idx) => (
              <div key={step} className="card">
                <p className="text-sm font-semibold text-slate-500">Step {idx + 1}</p>
                <p className="mt-2 text-lg font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">What customers say</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="card">
                <p className="text-lg">"{item.quote}"</p>
                <footer className="mt-3 text-sm font-semibold text-slate-500">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <EmailCapture />

      <section className="section pt-0">
        <div className="container text-center">
          <h2 className="text-3xl font-black md:text-5xl">Stock your pantry the natural way</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Join thousands who choose authentic Afghan dry fruits for taste and tradition.
          </p>
          <Link href="/shop" className="btn-dark mt-6">
            Shop the collection
          </Link>
        </div>
      </section>
    </>
  );
}
