"use client";

import Link from "next/link";

const FooterMenu = () => {
  const Categories = [
    {
      label: "Collections",
      href: "/",
    },
    {
      label: "Rings",
      href: "/rings",
    },
    {
      label: "Bracelets",
      href: "/bracelets",
    },
    {
      label: "Necklaces",
      href: "/necklaces",
    },
    {
      label: "Earrings",
      href: "/earrings",
    },
  ];

  const Collections = [
    {
      label: "Elizabeth",
      href: "/elizabeth",
    },
  ];

  const WeAre = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const Contracts = [
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Cookie Policy",
      href: "/cookie",
    },
  ];

  const Help = [
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Shipping & Returns",
      href: "/shipping",
    },
    {
      label: "Ring Size Guide",
      href: "/ring-size-guide",
    },
  ];

  return (
    <div className="rounded-b-3xl bg-black">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between w-full z-20">
          <div className="space-y-4">
            <h3 className="uppercase font-semibold">Categories</h3>
            <ul className="space-y-1 text-sm">
              {Categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 transition-colors ease-in-out hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase font-semibold">Collections</h3>
            <ul className="space-y-1 text-sm">
              {Collections.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 transition-colors ease-in-out hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase font-semibold">We Are</h3>
            <ul className="space-y-1 text-sm">
              {WeAre.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 transition-colors ease-in-out hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase font-semibold">Contracts</h3>
            <ul className="space-y-1 text-sm">
              {Contracts.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 transition-colors ease-in-out hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase font-semibold">Help</h3>
            <ul className="space-y-1 text-sm">
              {Help.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 transition-colors ease-in-out hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
