import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CreateProfileForm from "@/features/profiles/components/form-profile";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", user.id)
      .limit(1)
      .single();

    if (data) {
      redirect("/home");
    }
  }

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex gap-5 flex-col px-5 md:px-28 py-10 max-w-3xl">
      <CreateProfileForm />
    </div>
  );
}
