import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/headerNavLinks";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between py-10">
      <div>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Link href="/" aria-label="Tailwind CSS Blog">
              <a>
                <Image
                  src="/logo.png"
                  width="60"
                  height="60"
                  className="rounded-full"
                />
              </a>
            </Link>
          </div>
          <div className="hidden text-2xl font-semibold sm:block sm:p-4 text-gray-900 dark:text-gray-100">
            <Link href="/" aria-label="Tailwind CSS Blog">
              <a>{siteMetadata.headerTitle}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                {link.title}
              </a>
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
    </>
  );
}
