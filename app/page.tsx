import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Index() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/home");
  }

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
