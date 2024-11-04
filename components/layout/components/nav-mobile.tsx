"use client";
import {
  CommonSave,
  HomeIcon,
  PlusRounded,
  Searchsvg,
  User,
} from "@/components/icons";
import NavLink from "@/components/ui/nav-link";

const Links = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Profile",
    icon: <User />,
    path: "/profile",
  },
  {
    title: "",
    icon: <PlusRounded />,
    path: "/share",
  },
  {
    title: "Saves",
    icon: <CommonSave />,
    path: "/saves",
  },
  {
    title: "Search",
    icon: <Searchsvg />,
    path: "/search",
  },
];

export default function MobileNavbar() {
  return (
    <div className="md:hidden sticky bottom-0 w-full">
      <div className=" w-full flex p-3 bg-content-primary">
        <div className=" w-full grid grid-cols-5 items-center">
          {Links.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
