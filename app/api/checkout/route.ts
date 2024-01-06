import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { items: product } = await req.json();

  console.log(product);

  if (!product || product.length === 0) {
    return new NextResponse("Product is required", { status: 400 });
  }
}
