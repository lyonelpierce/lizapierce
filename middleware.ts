import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/elizabeth/:path*",
    "/checkout",
    "/api/webhook(.*)",
    "/api/checkout",
    "/thank-you",
    "/about",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
