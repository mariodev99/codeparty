import React from "react";
import RightSidenav from "./components/sidenav-right";
import LeftSidenav from "./components/sidenav-left";
import MobileNavbar from "./components/nav-mobile";
import TopBar from "./components/bar-top";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full px-0 md:px-10 grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr_300px] md:max-w-3xl lg:max-w-6xl flex-1 h-screen">
      <div className="hidden md:flex inset-y-0 left-0 md:w-[100px] lg:w-[200px] border-r border-border">
        <LeftSidenav />
      </div>
      <div className="flex flex-col relative">
        <TopBar />
        <div className="flex flex-1 overflow-y-scroll pb-2 px-4 w-full">
          {children}
        </div>
        <MobileNavbar />
      </div>
      <RightSidenav />
    </div>
  );
}
