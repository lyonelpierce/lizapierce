import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { productIds } = await req.json();

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ID is required", { status: 400 });
  }

  const variants = await prismadb.variant.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
    include: {
      product: true,
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  variants.forEach((variant) => {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "USD",
        product_data: {
          name: variant.product.name,
          description: variant.title,
        },
        unit_amount: variant.price * 100,
      },
    });
  });

  const order = await prismadb.order.create({
    data: {
      isPaid: false,
      orderItems: {
        create: productIds.map((variantId: string) => ({
          variant: {
            connect: {
              id: variantId,
            },
          },
        })),
      },
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `http://localhost:3000/thank-you?success=1`,
    cancel_url: "http://localhost:3000/cart?canceled=1",
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json({ url: session.url }, { status: 200 });
}
