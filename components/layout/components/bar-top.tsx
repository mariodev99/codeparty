"use client";
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
        <div>avatar</div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
