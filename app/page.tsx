"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import EmailCapture from "@/components/EmailCapture";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/lib/products";

export default function HomePage() {
  const { t } = useLanguage();

  const testimonials = [
    { name: t("home.testimonialName1"), quote: t("home.testimonial1") },
    { name: t("home.testimonialName2"), quote: t("home.testimonial2") },
    { name: t("home.testimonialName3"), quote: t("home.testimonial3") },
  ];

  const trustItems = [t("home.trust1"), t("home.trust2"), t("home.trust3"), t("home.trust4")];
  const howSteps = [t("home.howStep1"), t("home.howStep2"), t("home.howStep3")];
  const whyItems = [
    { title: t("home.whyTraditionTitle"), text: t("home.whyTraditionText") },
    { title: t("home.whyQualityTitle"), text: t("home.whyQualityText") },
    { title: t("home.whyEverydayTitle"), text: t("home.whyEverydayText") },
  ];

  return (
    <>
      <section className="section bg-midnight text-white">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">{t("home.heroBadge")}</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">{t("home.heroTitle")}</h1>
            <p className="mt-4 max-w-lg text-slate-300">{t("home.heroSubtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                {t("home.shopCta")}
              </Link>
              <Link href="/landing" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
                {t("home.offerCta")}
              </Link>
            </div>
          </div>
          <div className="animate-float">
            <Image src="/images/hero.svg" alt={t("home.heroAlt")} width={800} height={620} className="w-full rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="card text-center font-semibold">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">{t("home.bestsellersTitle")}</h2>
          <p className="mt-2 text-slate-600">{t("home.bestsellersSubtitle")}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">{t("home.whyTitle")}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {whyItems.map((item) => (
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
          <h2 className="text-3xl font-black md:text-4xl">{t("home.howTitle")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howSteps.map((step, idx) => (
              <div key={step} className="card">
                <p className="text-sm font-semibold text-slate-500">{t("home.stepLabel", { n: idx + 1 })}</p>
                <p className="mt-2 text-lg font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">{t("home.reviewsTitle")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="card">
                <p className="text-lg">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold text-slate-500">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <EmailCapture />

      <section className="section pt-0">
        <div className="container text-center">
          <h2 className="text-3xl font-black md:text-5xl">{t("home.ctaTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">{t("home.ctaSubtitle")}</p>
          <Link href="/shop" className="btn-dark mt-6">
            {t("home.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
