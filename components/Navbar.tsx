"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import NavbarActions from "./NavbarActions";
import { NavbarMenu } from "@/constants/navbarMenu";

import { Button } from "@/components/ui/button";
import { ChevronDown, Gem, Menu, Receipt, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainMenu from "./MainMenu";

const Navbar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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

  return (
    <>
      <MainMenu open={openMenu} setOpen={() => setOpenMenu(!openMenu)} />
      <nav className="fixed top-0 w-screen h-20 z-30 py-2 px-2 md:px-2 lg:px-0">
        <div
          className={cn(
            "flex items-center justify-between border-black rounded-full max-w-7xl w-full h-full mx-auto text-xs px-4 transition-all ease-in-out duration-500 gap-2",
            scrolled &&
              "my-2 border border-zinc-800 backdrop-blur-sm bg-black/70"
          )}
        >
          <Button
            size="icon"
            variant="link"
            className="text-white hover:text-zinc-400 block md:hidden w-2/12"
            onClick={() => setOpenMenu(true)}
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <Link href="/" className="md:w-2/12">
            <h1 className="flex items-center gap-1 text-lg lg:text-xl font-semibold uppercase">
              <Gem className="w-4 h-4 md:w-6 md:h-6 flex-none hidden md:flex" />
              <p className="flex-none">Eliza Pierce</p>
            </h1>
          </Link>
          <ul className="hidden md:flex justify-center items-center md:gap-4 lg:gap-8 font-medium uppercase h-full text-gray-500 w-8/12">
            {NavbarMenu.map((item) => (
              <li
                key={item.label}
                className={cn(
                  "text-zinc-500 transition-colors ease-in-out hover:text-white",
                  pathname === item.href && "text-white"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end w-2/12">
            <div className="flex items-center gap-3 md:gap-4 border border-zinc-800 rounded-full pl-3 md:pl-6 h-8 md:h-10">
              {userId && (
                <DropdownMenu onOpenChange={() => setOpen(!open)}>
                  <DropdownMenuTrigger className="hidden md:block">
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
                  <Button
                    variant="white"
                    className="h-8 w-8 md:h-10 md:w-full"
                    size="icon"
                  >
                    <span className="hidden md:block md:mx-4">
                      Member Login
                    </span>
                    <User className="w-4 h-4 md:hidden" />
                  </Button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
