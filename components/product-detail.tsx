"use client";

import type { View, Product } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductDetailProps {
  product: Product;
  onNavigate: (view: View) => void;
}

export function ProductDetail({ product, onNavigate }: ProductDetailProps) {
  return (
    <div className="w-full h-full flex items-center" style={{ backgroundColor: "rgba(128, 0, 128, 1)" }}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative flex items-center justify-center order-2 md:order-1">
          <div className="relative w-full aspect-square max-w-sm">
            <div className="absolute inset-0 bg-secondary/30 rounded-3xl" />
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-8 relative z-10"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <div className="space-y-2">
            <p className="text-sm tracking-widest text-muted-foreground uppercase">
              Flagship Model
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              {product.name}
            </h1>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold">${product.price}</span>
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
            <span className="text-sm px-2 py-1 bg-foreground text-background rounded">
              Save ${product.originalPrice - product.price}
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-3 py-4">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => onNavigate("checkout")}
            >
              <ShoppingCart className="mr-2 w-4 h-4" />
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1 bg-transparent">
              Add to Cart
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center md:text-left">
            Free shipping worldwide. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
