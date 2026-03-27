import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="section bg-midnight text-white">
      <div className="container text-center">
        <p className="mx-auto inline-block rounded-full bg-amber-500/20 px-4 py-1 text-sm font-semibold text-amber-100">Seasonal offer</p>
        <h1 className="mt-5 text-4xl font-black md:text-6xl">20% off your first Afghan dry fruit order</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Premium almonds, jumbo figs, and Kandahar-style raisins — naturally sun-dried, packed for freshness.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/shop" className="btn-primary animate-pulseGlow">
            Claim discount
          </Link>
          <Link href="/product" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
            View product
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-400">Thousands of happy customers. 4.9/5 average. Free shipping over $45.</p>
      </div>
    </section>
  );
}
