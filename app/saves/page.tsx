import PostCard from "@/modules/post/components/post-card";
import PostList from "@/modules/post/components/post-list";
import { Post } from "@/modules/post/types"; // Asegúrate de que 'Post' esté correctamente definido
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("posts")
    .select()
    .contains("saves", [user.id]);

  if (error || !data) {
    return (
      <div className="text-content-secondary text-center text-xl">
        Ups! ocurrio un error
      </div>
    );
  }

  return (
    <div className="w-full">
      <PostList>
        {data.map((item: any) => (
          <PostCard key={item.id} {...item} userId={user.id} />
        ))}
      </PostList>
    </div>
  );
}
