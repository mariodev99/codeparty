import ShareContent from "@/components/share-page-content";
import { Profile } from "@/modules/profile/types";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single<Profile>();

  if (!data) {
    redirect("/create-profile");
  }

  return (
    <div className="w-full">
      <ShareContent data={data} />
    </div>
  );
}
