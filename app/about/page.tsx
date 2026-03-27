export default function AboutPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Our story</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">From Afghan orchards to your table</h1>
          <p className="mt-4 text-slate-600">
            Kabul Harvest celebrates Afghan dry fruits — almonds, figs, raisins, and more — known for deep flavor and
            traditional sun-drying. We work with trusted growers and pack every batch with care so you get the same
            quality families have enjoyed for generations.
          </p>
          <p className="mt-4 text-slate-600">
            Whether you snack, bake, or gift, we focus on whole fruit, honest sizes, and freshness from pack to pantry.
          </p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">Why shop with us</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>- Premium Afghan-sourced dry fruits</li>
            <li>- Natural drying — no shortcuts</li>
            <li>- Sorted and packed for freshness</li>
            <li>- Fast shipping &amp; simple returns</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
