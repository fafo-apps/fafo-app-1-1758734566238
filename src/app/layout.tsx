import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buffalo Blaze Wings | Heat Meets Flavor",
  description: "Crispy fried wings tossed in bold sauces. Dine-in, takeout, and catering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="text-orange-600">🔥</span>
              <span>Buffalo Blaze Wings</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6">
              <a href="#menu" className="text-sm font-medium hover:text-orange-600">Menu</a>
              <a href="#about" className="text-sm font-medium hover:text-orange-600">About</a>
              <a href="#hours" className="text-sm font-medium hover:text-orange-600">Hours</a>
              <a href="#location" className="text-sm font-medium hover:text-orange-600">Location</a>
              <a href="#contact" className="text-sm font-medium hover:text-orange-600">Contact</a>
            </nav>
            <a href="tel:+15551234567" className="ml-4 inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Order Now
            </a>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 grid gap-4 sm:flex sm:items-center sm:justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Buffalo Blaze Wings. All rights reserved.
            </div>
            <div className="text-sm">
              123 Spice Ave, Flavor Town, FT 00000 · <a href="tel:+15551234567" className="hover:text-orange-600">(555) 123-4567</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
