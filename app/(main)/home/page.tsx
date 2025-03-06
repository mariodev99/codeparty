import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import RealtimePosts from "@/modules/post/components/posts-realtime";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  } else {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .limit(1)
      .single();

    if (!data) {
      redirect("/create-profile");
    }
  }

  const { data, error } = await supabase
    .from("posts")
    .select()
    .order("created_at", { ascending: false });

  return (
    <div className="pt-4 w-full">
      <RealtimePosts userId={user.id} serverPosts={data} />
    </div>
  );
}
