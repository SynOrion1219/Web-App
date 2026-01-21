"use client";

import type { View, Product } from "@/app/page";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  product: Product;
  onNavigate: (view: View) => void;
}

export function HeroSection({ product, onNavigate }: HeroSectionProps) {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm tracking-widest text-muted-foreground uppercase">
              Premium Audio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-balance">
              Sound that moves you
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Immerse yourself in exceptional audio quality with LUXE premium
              wireless headphones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate("product")}
              className="group"
            >
              Explore Product
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("checkout")}
            >
              Buy Now - ${product.price}
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-2xl font-semibold">40h</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Battery Life
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-2xl font-semibold">-45dB</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Noise Cancel
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-2xl font-semibold">Hi-Res</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Audio Cert.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-secondary/50 rounded-full blur-3xl" />
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
