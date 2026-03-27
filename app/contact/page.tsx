import { BRAND_NAME } from "@/lib/products";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black md:text-5xl">Contact {BRAND_NAME}</h1>
          <p className="mt-3 text-slate-600">
            Questions about orders, bulk gifting, or wholesale? We reply within 24 hours on business days.
          </p>
          <div className="mt-6 space-y-2 text-slate-700">
            <p>Email: hello@kabulharvest.com</p>
            <p>Phone: +1 (800) 555-0198</p>
            <p>Hours: Mon–Fri, 9am–6pm</p>
          </div>
        </div>
        <form className="card space-y-4">
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-midnight" placeholder="Your name" />
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-midnight" placeholder="Your email" />
          <textarea
            rows={5}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-midnight"
            placeholder="How can we help?"
          />
          <button className="btn-dark">Send message</button>
        </form>
      </div>
    </section>
  );
}
