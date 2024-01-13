import { socialItems } from "@/constants/socialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center w-full h-12 text-xs bg-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <h1 className="text-xs font-medium uppercase">Eliza Pierce</h1>
          </Link>
          <ul className="flex gap-3">
            {socialItems.map((item) => (
              <li
                className="bg-white text-zinc-900 rounded-full p-1 transition-transform ease-in-out hover:scale-125 duration-300"
                key={item.name}
              >
                <Link href={item.link} target="_blank">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
