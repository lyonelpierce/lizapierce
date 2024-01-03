"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component is unmounted
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
      label: "Collections",
      href: "/",
      active: pathname === "/collections",
    },
    {
      label: "Rings",
      href: "/rings",
      active: pathname === "/rings",
    },
    // {
    //   label: "Bracelets",
    //   href: "/bracelets",
    //   active: pathname === "/bracelets",
    // },
    // {
    //   label: "Necklaces",
    //   href: "/necklaces",
    //   active: pathname === "/necklaces",
    // },
    // {
    //   label: "Earrings",
    //   href: "/earrings",
    //   active: pathname === "/earrings",
    // },
    {
      label: "Design Your Own",
      href: "/customize",
      active: pathname === "/customize",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full h-20 z-30 py-2">
        <div
          className={cn(
            "flex items-center justify-between max-w-7xl w-full h-full mx-auto text-xs px-4",
            scrolled && "rounded-full backdrop-blur-[2px] bg-black/70"
          )}
        >
          <Link href="/">
            <h1 className="text-2xl font-semibold uppercase">Eliza Pierce</h1>
          </Link>
          <ul className="flex items-center gap-8 font-medium uppercase h-full text-gray-500">
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
          <div className="flex items-center gap-6 border border-zinc-800 rounded-full pr-5">
            <Link href="/sign-in">
              {userId ? (
                <UserButton />
              ) : (
                <Button variant="white">Member Login</Button>
              )}
            </Link>
            <Link href="/">
              <HeartIcon className="w-4 h-4 transition-transform ease-in-out hover:transform hover:scale-125" />
            </Link>
            <NavbarActions />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
