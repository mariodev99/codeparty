import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

interface LinkProp {
  path: string;
  icon: ReactElement;
  title: string;
}

export default function NavLink({ path, icon, title }: LinkProp) {
  const pathname = usePathname(); // Obtenemos la ruta actual
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div
        className={`flex flex-col md:flex-row items-center justify-start gap-0 md:gap-2 group cursor-pointer 
              ${isActive ? " text-foreground" : "text-content-secondary"}`}
      >
        {icon &&
          React.cloneElement(icon, {
            className: `group-hover:stroke-foreground ${
              isActive ? "stroke-foreground" : "stroke-content-secondary"
            }`,
          })}
        <p
          className={`block md:hidden lg:block group-hover:text-foreground text-base font-normal ${
            isActive ? "text-foreground" : ""
          }`}
        >
          {title && title}
        </p>
      </div>
    </Link>
  );
}
