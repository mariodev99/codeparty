"use client";

import Link from "next/link";
import React from "react";
import NavLink from "@/components/ui/nav-link";
import { LeftSidenavLinks } from "@/const";
import { Plus } from "@/components/icons";
import LogoutButton from "@/components/common/button-logout";
import { signOutAction } from "@/modules/auth/actions";
import Logo from "@/components/Logo";

const LeftSidenav = () => {
  return (
    <div className="fixed flex flex-col items-center lg:items-start h-full px-4 py-6 text-lg font-semibold">
      <Logo />

      <div className="flex flex-col gap-4 mt-6">
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
