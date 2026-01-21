"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductDetail } from "@/components/product-detail";
import { CheckoutPage } from "@/components/checkout-page";

export type View = "home" | "product" | "checkout";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  image: string;
}

const product: Product = {
  id: "1",
  name: "LUXE Pro Wireless",
  price: 349,
  originalPrice: 449,
  description:
    "Experience unparalleled audio with our flagship wireless headphones. Premium materials, active noise cancellation, and 40 hours of battery life.",
  features: [
    "Active Noise Cancellation",
    "40-hour battery life",
    "Premium leather cushions",
    "Spatial audio support",
  ],
  image: "/headphones.jpg",
};

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("home");

  return (
    <div className="min-h-screen h-screen flex flex-col bg-background overflow-hidden">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 flex items-center justify-center overflow-hidden">
        {currentView === "home" && (
          <HeroSection product={product} onNavigate={setCurrentView} />
        )}
        {currentView === "product" && (
          <ProductDetail product={product} onNavigate={setCurrentView} />
        )}
        {currentView === "checkout" && (
          <CheckoutPage product={product} onNavigate={setCurrentView} />
        )}
      </main>
    </div>
  );
}
