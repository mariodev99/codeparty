"use client";

import { Exit } from "@/components/icons";
import Logo from "@/components/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LeftSidenavLinks } from "@/const";
import { signOutAction } from "@/modules/auth/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

const useFirstPathSegment = () => {
  const pathname = usePathname(); // Obtiene el pathname, ej: "/Post/123123123"
  const firstSegment = pathname.split("/").filter(Boolean)[0]; // Extrae el primer segmento

  return firstSegment;
};

export default function TopBar() {
  const firstSegment = useFirstPathSegment();
  const isHomePage = firstSegment.includes("home");

  return (
    <div className="sticky top-0 w-full z-40 ">
      {/* Desktop */}
      <div className="capitalize hidden md:flex justify-between items-center w-full px-4 py-4 text-lg font-medium bg-background opacity-95  text-foreground border-b border-border">
        {firstSegment}
        <ThemeSwitcher />
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center h-14 w-full px-4 text-lg font-medium bg-background opacity-95  text-white border-b border-border">
        <Sheet>
          {isHomePage ? (
            <SheetTrigger>
              <div className="cursor-pointer h-8 w-8 border border-border rounded-full bg-content-primary text-center text-primary flex items-center justify-center">
                {"{}"}
              </div>
            </SheetTrigger>
          ) : (
            <div className="capitalize">{firstSegment}</div>
          )}
          <SheetContent
            side={"left"}
            className=""
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader className="">
              <SheetTitle className="hidden">Navigation wrapper</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full">
              <Logo />
              <div className="flex flex-col gap-4 mt-8">
                {LeftSidenavLinks.map((link, index) => (
                  <SheetClose asChild key={link.title}>
                    <Link
                      href={link.path}
                      className="text-foreground text-2xl flex items-center gap-2"
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  </SheetClose>
                ))}
                <div className="pt-8">
                  <Link
                    className="bg-primary text-white my-6 rounded-full py-2 px-8 text-xl font-medium"
                    href={"/share"}
                  >
                    Share
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-end">
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className="flex items-center gap-2 group text-foreground mt-4 cursor-pointer text-2xl"
                  >
                    <Exit className="group-hover:stroke-red-500 stroke-foreground" />
                    <div className="group-hover:text-red-500 font-normal text-base md:hidden lg:block">
                      Logout
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
