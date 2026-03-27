import Link from "next/link";
import { BRAND_NAME } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {BRAND_NAME}. Premium Afghan dry fruits.
          </p>
          <div className="flex gap-4 text-sm text-slate-600">
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
