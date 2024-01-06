import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import { Product } from "@prisma/client";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { items: products } = await req.json();

  if (!products || products.length === 0) {
    return new NextResponse("Product is required", { status: 400 });
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
}
