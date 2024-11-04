"use client";

import Link from "next/link";
import React from "react";
import NavLink from "@/components/ui/nav-link";
import { LeftSidenavLinks } from "@/const";
import { Plus } from "@/components/icons";
import { signOutAction } from "@/app/actions";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import LogoutButton from "@/components/common/button-logout";

const LeftSidenav = () => {
  return (
    <div className="fixed flex flex-col items-center lg:items-start h-full px-4 py-6 text-lg font-semibold">
      <div className="hidden lg:block text-xl text-foreground">
        <span className="text-primary">{"{Code"}</span>
        {"party}"}
      </div>
      <div className="block lg:hidden text-xl text-primary">
        <span className="text-primary">{"{"}</span>
        {"}"}
      </div>

      <div className="flex flex-col  gap-4 mt-6">
        {LeftSidenavLinks.map((link, index) => (
          <NavLink key={index} {...link} />
        ))}
      </div>
      <Link
        className="bg-primary text-white mt-5 w-auto lg:w-full rounded-full p-2 flex justify-center items-center"
        href={"/share"}
      >
        <div className="hidden lg:flex">Share</div>
        <span className="block lg:hidden">
          <Plus />
        </span>
      </Link>
      <form>
        <LogoutButton pendingText={"sign out..."} formAction={signOutAction}>
          sign out
        </LogoutButton>
      </form>
    </div>
  );
};

export default LeftSidenav;
