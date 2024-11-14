import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
  return (
    <>
      <main className="h-screen w-full flex flex-col gap-5 justify-center items-center">
        <div>
          <p className="text-3xl">Welcome to</p>
          <div className="text-4xl">
            <div className="hidden lg:block  text-foreground">
              <span className="text-primary">{"{Code"}</span>
              {"party}"}
            </div>
            <div className="block lg:hidden text-primary">
              <span className="text-primary">{"{"}</span>
              {"}"}
            </div>
          </div>
        </div>
        <Link href={"/sign-in"}>
          <Button className="w-52 bg-primary text-medium text-xl py-4 ">
            Get started
          </Button>
        </Link>
      </main>
    </>
  );
}
