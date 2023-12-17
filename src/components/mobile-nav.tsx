"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button, buttonVariants } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Icons } from "../lib/icons";
import { type NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MainNavProps {
  items?: NavItem[];
}

export default function MobileNav({ items }: MainNavProps) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.navmenuopen className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-center">
              <Icons.logo className="h-5 w-5" /> R Stack
            </div>
          </SheetTitle>
          <SheetDescription>
            <div>
              <div className="mt-3 grid grid-cols-1 gap-5 text-center">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "col-span-1 flex rounded-md shadow-sm transition-all duration-200 hover:bg-primary-foreground",
                          pathname === item.href ??
                            pathname.startsWith(item.href)
                            ? "text-foreground"
                            : "text-foreground/60 ",
                        )}
                        onClick={toggleNav}
                      >
                        <div className="flex flex-1 items-center justify-between truncate rounded-md border">
                          <div className="flex-1 truncate px-4 py-2 text-sm">
                            <h1 className="font-medium ">{item.title}</h1>
                          </div>
                        </div>
                      </Link>
                    ),
                )}
                <div>
                  {session?.user ? (
                    <div className="space-y-3">
                      <p className="text-base">
                        Signed in as{" "}
                        {session.user.name ?? session.user.username}
                      </p>
                      <div
                        className={cn(
                          "cursor-pointer",
                          buttonVariants({ variant: "destructive" }),
                        )}
                        onClick={() =>
                          signOut({
                            redirect: true,
                            callbackUrl: `${window.location.origin}`,
                          })
                        }
                      >
                        Sign Out
                      </div>
                    </div>
                  ) : (
                    <Link
                      className={buttonVariants()}
                      href="sign-in"
                      onClick={toggleNav}
                    >
                      Sign in
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
