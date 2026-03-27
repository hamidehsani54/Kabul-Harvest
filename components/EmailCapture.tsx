export default function EmailCapture() {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-3xl bg-midnight p-8 text-white md:p-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan">Newsletter</p>
          <h2 className="text-3xl font-black md:text-4xl">Get 15% off your first order</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            New harvest alerts, gift bundles, and recipes using Afghan almonds, figs, and raisins — straight to your inbox.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-slate-500 bg-transparent px-5 py-3 outline-none placeholder:text-slate-400 focus:border-lime"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get the code
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
