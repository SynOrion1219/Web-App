"use client";

import type { View } from "@/app/page";
import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-border">
      <button
        onClick={() => onNavigate("home")}
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        LUXE
      </button>

      <nav className="hidden md:flex items-center gap-8">
        <button
          onClick={() => onNavigate("home")}
          className={`text-sm tracking-wide transition-colors ${
            currentView === "home"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => onNavigate("product")}
          className={`text-sm tracking-wide transition-colors ${
            currentView === "product"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          PRODUCT
        </button>
      </nav>

      <button
        onClick={() => onNavigate("checkout")}
        className="relative p-2 text-foreground hover:text-muted-foreground transition-colors"
        aria-label="View cart"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
          1
        </span>
      </button>
    </header>
  );
}
