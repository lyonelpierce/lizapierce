import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id, rating, review, title } = body;

  const user = await prismadb.user.findUnique({
    where: {
      externalId: userId,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const existingOrder = await prismadb.order.findFirst({
    where: {
      userId: user.id,
      isPaid: true,
      orderItems: {
        some: {
          variant: {
            productId: id,
          },
        },
      },
    },
  });

  if (!existingOrder) {
    return new NextResponse("You can only review products you bought", {
      status: 201,
    });
  }

  const existingReview = await prismadb.review.findFirst({
    where: {
      userId: user.id,
      productId: id,
    },
  });

  if (existingReview) {
    return new NextResponse("You already reviewed this product", {
      status: 201,
    });
  }

  const product = await prismadb.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return new NextResponse("Product not found", { status: 404 });
  }

  const newReview = await prismadb.review.create({
    data: {
      userId: user.id,
      productId: id,
      rate: rating,
      review,
      title,
    },
  });

  return new NextResponse("Review submitted successfully", { status: 200 });
}
