"use client";

import type { View, Product } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Lock, ShoppingBag } from "lucide-react";
import Image from "next/image";

interface CheckoutPageProps {
  product: Product;
  onNavigate: (view: View) => void;
}

export function CheckoutPage({ product, onNavigate }: CheckoutPageProps) {
  return (
    <div className="w-full h-full flex items-center overflow-auto py-8">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        <button
          onClick={() => onNavigate("product")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to product
        </button>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">
                Checkout
              </h1>
              <p className="text-muted-foreground text-sm">
                Complete your purchase securely
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                Payment Details
              </h2>
              <div className="p-6 bg-card rounded-lg border border-border space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-sm">Stripe Checkout Placeholder</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="4242 4242 4242 4242"
                      disabled
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM / YY" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" disabled />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  This is a demo. No real payment will be processed.
                </p>
              </div>
            </div>

            <Button size="lg" className="w-full" disabled>
              <ShoppingBag className="mr-2 w-4 h-4" />
              Complete Purchase
            </Button>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-6 space-y-6 sticky top-8">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="flex gap-4">
                <div className="relative w-20 h-20 bg-secondary rounded-lg flex-shrink-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">Qty: 1</p>
                  <p className="text-sm font-medium mt-1">${product.price}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${product.price}.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-foreground">
                    -${product.originalPrice - product.price}.00
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-semibold">${product.price}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
