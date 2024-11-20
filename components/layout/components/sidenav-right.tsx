import Link from "next/link";
import Chip from "@/components/common/Chip";
import Image from "next/image";
import SearchForm from "@/components/common/search-form";
import { Suspense } from "react";

export default function RightSidenav() {
  return (
    <div className="hidden lg:flex flex-col border-l border-border pl-4 relative">
      <div className="sticky top-0 w-full pt-4">
        <Suspense fallback={<div>loading</div>}>
          <SearchForm />
        </Suspense>
        <div className="flex gap-2 mt-6">
          {/* avatar */}
          <div className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-content-secondary relative overflow-hidden">
            <Image
              alt="mariodev logo"
              src={
                "https://fwrawrtdsrrumgarhmds.supabase.co/storage/v1/object/public/images/Mariodev%20Icon%20(4).svg"
              }
              fill
              objectFit="cover"
            />
          </div>
          {/* username */}
          <div>
            <div className="text-foreground font-medium">Luciano Mariotti</div>
            <div className="text-content-secondary text-[10px] md:text-xs leading-4 md:leading-5 font-regular">
              mariodev
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center mt-4 text-sm">
          <Link href={"https://mariodev99.vercel.app/"} target="_blank">
            <Chip content="portfolio" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/luciano-mariotti/"}
            target="_blank"
          >
            <Chip content="linkedin" />
          </Link>{" "}
          <Link href={"mailto:lucianomariodev@gmail.com"}>
            <Chip content="email" />
          </Link>
        </div>

        <div className="mt-4 h-44 rounded-3xl w-full border border-border"></div>
      </div>
    </div>
  );
}
