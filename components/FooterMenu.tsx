import Link from "next/link";
import { Categories, WeAre, Contracts, Help } from "@/constants/footerMenu";

const FooterMenu = () => {
  return (
    <div className="rounded-b-3xl bg-black">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="hidden md:flex md:justify-between w-full z-20">
          <div className="space-y-2 md:space-y-4">
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
          <div className="space-y-2 md:space-y-4">
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
          <div className="space-y-2 md:space-y-4">
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
          <div className="space-y-2 md:space-y-4">
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
