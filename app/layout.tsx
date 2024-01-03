import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import Cart from "@/components/CartModal";

export const metadata: Metadata = {
  title: {
    default: "Eliza Pierce",
    template: "%s | Eliza Pierce",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`relative ${GeistSans.className} bg-zinc-900 text-white h-screen antialiased scrollbar`}
        >
          {children}
          <Cart />
          <Toaster position="top-center" richColors className="bg-zinc-800" />
        </body>
      </html>
    </ClerkProvider>
  );
}
