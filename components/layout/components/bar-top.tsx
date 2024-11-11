"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname().slice(1);

  return (
    <div className="sticky top-0 w-full z-40 ">
      <div className="capitalize hidden md:flex justify-between items-center w-full px-2 py-4 text-lg font-medium bg-background opacity-95  text-foreground border-b border-border">
        {pathname}
        <ThemeSwitcher />
      </div>
      <div className="flex md:hidden justify-between items-center h-14 w-full px-2 text-lg font-medium bg-background opacity-95  text-white border-b border-border">
        <Sheet>
          <SheetTrigger>
            <div className="cursor-pointer h-8 w-8 border border-border rounded-full bg-content-primary"></div>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className=""
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader className="">
              <SheetTitle className="hidden">Edit profile</SheetTitle>
            </SheetHeader>
            codeparty
          </SheetContent>
        </Sheet>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
