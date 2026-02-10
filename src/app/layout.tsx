import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/auth-context";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SpiroLab - Smart Aquaculture & Shrimp Solutions",
  description: "Spirolab Bioformulations - Premium smart aquaculture and shrimp farming solutions. Expert products for disease prevention, water quality management, and sustainable shrimp growth optimization.",
  keywords: ["aquaculture", "shrimp farming", "vannamei", "tiger shrimp", "probiotics", "biofloc", "water treatment", "disease control", "Spirolab", "bioformulations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <AuthProvider>
          {children}
          <Toaster position="top-right" richColors />
        </AuthProvider>
      </body>
    </html>
  );
}
