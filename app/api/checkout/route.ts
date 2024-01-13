import Stripe from "stripe";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const { productIds } = await req.json();
  const { userId } = auth();

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

  let order;

  if (userId) {
    const user = await prismadb.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      order = await prismadb.order.create({
        data: {
          isPaid: false,
          total: 0,
          user: {
            connect: {
              id: user.id,
            },
          },
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
    } else {
      return NextResponse.json("Internal Server Error", { status: 500 });
    }
  } else {
    order = await prismadb.order.create({
      data: {
        isPaid: false,
        total: 0,
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
  }

  if (!order) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `http://localhost:3000/thank-you?success=1&orderId=${order.id}`,
    cancel_url: "http://localhost:3000/cart?canceled=1",
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json({ url: session.url }, { status: 200 });
}
