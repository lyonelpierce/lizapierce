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

  const existingReview = await prismadb.review.findFirst({
    where: {
      userId,
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

  const newReview = await prismadb.review.create({
    data: {
      userId: user.id,
      productId: id,
      rate: rating,
      review,
      title,
    },
  });

  return NextResponse.json("Successful", { status: 200 });
}
