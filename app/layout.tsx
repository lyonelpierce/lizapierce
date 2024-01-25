import "./globals.css";
import "@smastrom/react-rating/style.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";

import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Cart from "@/components/CartModal";

export const metadata: Metadata = {
  title: {
    default: "Eliza Pierce",
    template: "%s | Eliza Pierce",
  },
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        href: "/images/favicon-light.svg",
        url: "/images/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        href: "/images/favicon-dark.svg",
        url: "/images/favicon-dark.svg",
      },
    ],
  },
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
        variables: {
          colorPrimary: "white",
          colorTextOnPrimaryBackground: "black",
        },
      }}
    >
      <TooltipProvider>
        <html lang="en">
          <body
            className={`${GeistSans.className} bg-zinc-900 text-white min-h-screen antialiased scrollbar`}
          >
            {children}
            <Cart />
            <Toaster
              position="top-center"
              richColors
              className="bg-zinc-800"
              theme="dark"
              toastOptions={{
                unstyled: true,
                classNames: {
                  toast:
                    "rounded-full z-50 p-4 flex items-center gap-2 w-full border border-zinc-800",
                  title: "text-xs font-medium flex-1",
                  description: "text-xs",
                },
              }}
            />
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
