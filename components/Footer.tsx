import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center w-full h-12 text-xs bg-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <h1 className="text-xs font-medium uppercase">Liza Pierce</h1>
          </Link>
          <ul className="flex gap-3">
            <li className="bg-white text-zinc-900 rounded-full p-1">
              <Link href="/" target="_blank">
                <Facebook
                  className="w-5 h-5"
                  fill="bg-zinc-900"
                  strokeWidth={1}
                />
              </Link>
            </li>
            <li className="bg-white text-zinc-900 rounded-full p-1">
              <Link href="/" target="_blank">
                <Instagram
                  className="w-5 h-5"
                  fill="bg-zinc-900"
                  stroke="white"
                />
              </Link>
            </li>
            <li className="bg-white text-zinc-900 rounded-full p-1">
              <Link href="/" target="_blank">
                <Twitter
                  className="w-5 h-5"
                  fill="bg-zinc-900"
                  strokeWidth={1}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
