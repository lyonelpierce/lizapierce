import Stripe from "stripe";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

interface VariantType {
  id: string;
  productId: string;
}

export async function POST(req: Request) {
  const { variants } = await req.json();
  const { userId } = auth();

  if (!variants || variants.length === 0) {
    return new NextResponse("Product ID is required", { status: 400 });
  }

  const existingVariants = await prismadb.variant.findMany({
    where: {
      id: {
        in: variants.map((variant: VariantType) => variant.id),
      },
      productId: {
        in: variants.map((variant: VariantType) => variant.productId),
      },
    },
    include: {
      product: true,
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  existingVariants.forEach((variant) => {
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
            create: variants.map((variant: VariantType) => ({
              variant: {
                connect: {
                  id: variant.id,
                },
              },
              product: {
                connect: {
                  id: variant.productId,
                },
              },
            })),
          },
        },
      });
    } else {
      return NextResponse.json("User not found", { status: 400 });
    }
  } else {
    order = await prismadb.order.create({
      data: {
        isPaid: false,
        total: 0,
        orderItems: {
          create: variants.map((variant: VariantType) => ({
            variant: {
              connect: {
                id: variant.id,
              },
            },
            product: {
              connect: {
                id: variant.productId,
              },
            },
          })),
        },
      },
    });
    if (!order) {
      return NextResponse.json("Internal Server Error", { status: 500 });
    }
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
