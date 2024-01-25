"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NavbarMenu } from "@/constants/navbarMenu";

import { ChevronRight, Gem } from "lucide-react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const MainMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="border-zinc-800">
        <SheetHeader className="py-2">
          <Link href="/">
            <h1 className="flex items-center gap-1 text-xl font-semibold uppercase w-full">
              <Gem className="w-5 h-5 flex-none" />
              <p className="flex-none">Eliza Pierce</p>
            </h1>
          </Link>
        </SheetHeader>
        <ul className="flex flex-col gap-4 text-xl font-medium uppercase h-full text-white pt-5">
          {NavbarMenu.map((item) => (
            <li
              key={item.label}
              className={cn(
                "text-zinc-500 transition-colors ease-in-out hover:text-white",
                pathname === item.href && "text-white"
              )}
            >
              <Link
                href={item.href}
                onClick={() => setOpen()}
                className="flex justify-between items-center"
              >
                {item.label}
                <ChevronRight className="w-6 h-6" />
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MainMenu;
