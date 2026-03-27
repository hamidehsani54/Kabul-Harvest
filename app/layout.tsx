import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { BRAND_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Premium Afghan Dry Fruits`,
  description:
    "Shop premium Afghan almonds, figs, raisins, and more — sun-dried, naturally sweet, delivered fresh."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
