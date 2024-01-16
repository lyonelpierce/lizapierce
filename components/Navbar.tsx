"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import NavbarActions from "./NavbarActions";

import { Button } from "@/components/ui/button";
import { ChevronDown, Receipt } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Menu = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Rings",
      href: "/collections/elizabeth/categories/rings",
      active: pathname === "/collections/elizabeth/categories/rings",
    },
    {
      label: "Earrings",
      href: "/collections/elizabeth/categories/earrings",
      active: pathname === "/collections/elizabeth/categories/earrings",
    },
    {
      label: "Design Your Own",
      href: "#",
      active: pathname === "/customize",
    },
  ];

  return (
    <nav className="fixed top-0 w-screen h-20 z-30 py-2 px-2 md:px-0">
      <div
        className={cn(
          "flex items-center justify-between border-black rounded-full max-w-7xl w-full h-full mx-auto text-xs px-4 transition-all ease-in-out duration-500",
          scrolled && "my-2 border border-zinc-800 backdrop-blur-sm bg-black/70"
        )}
      >
        <Link href="/">
          <h1 className="text-sm md:text-2xl font-semibold uppercase">
            Eliza Pierce
          </h1>
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-medium uppercase h-full text-gray-500">
          {Menu.map((item) => (
            <li
              key={item.label}
              className={cn(
                "text-zinc-500 transition-colors ease-in-out hover:text-white",
                item.active && "text-white"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 md:gap-6 border border-zinc-800 rounded-full pl-4 md:pl-6">
          {userId && (
            <DropdownMenu onOpenChange={() => setOpen(!open)}>
              <DropdownMenuTrigger>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 hover:scale-125 ease-in-out transition-transform cursor-pointer",
                    open && "transform rotate-180 duration-500"
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-lg" sideOffset={12}>
                <DropdownMenuItem className="cursor-pointer">
                  <Link
                    href="/orders"
                    className="flex gap-1 text-xs font-medium"
                  >
                    <Receipt className="w-4 h-4" strokeWidth={1.5} />
                    Orders
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <NavbarActions />
          <Link href="/sign-in">
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Button variant="white">Member Login</Button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
