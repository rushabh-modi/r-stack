import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/lib/icons";
import { MainNav } from "@/components/main-nav";
import { getServerAuthSession } from "@/server/auth";
import UserDropdown from "./user/UserDropdown";
import MobileNav from "./mobile-nav";

export async function SiteHeader() {
  const session = await getServerAuthSession();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">X(Twitter)</span>
              </div>
            </Link>
            <div className="hidden md:inline">
              {session?.user ? (
                <UserDropdown />
              ) : (
                <Link className={buttonVariants()} href="sign-in">
                  Sign in
                </Link>
              )}
            </div>
            {/* mobile nav bar */}
            <div className="md:hidden">
              <MobileNav items={siteConfig.mainNav} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
