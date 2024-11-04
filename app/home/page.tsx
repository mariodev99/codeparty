import { SubmitButton } from "@/components/ui/submit-button";
import PostCard from "@/components/posts/post-card";
import PostList from "@/components/posts/post-list";
import { signOutAction } from "../actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import RealtimePosts from "@/components/posts/posts-realtime";

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

  const { data, error } = await supabase.from("posts").select();

  return (
    <div className="pt-4 w-full">
      <RealtimePosts serverPosts={data} />
    </div>
  );
}
