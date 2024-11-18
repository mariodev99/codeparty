import RealtimeComments from "@/modules/comment/components/comments-realtime";
import FormComment from "@/modules/comment/components/form-comment";
import SinglePost from "@/modules/post/components/post";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("avatar, position, username")
    .eq("id", user.id)
    .single<any>();

  if (error) {
    <div>Ups! ocurrio un error obteniendo los datos de tu perfil</div>;
  }

  const { data: comments, error: errorComments } = await supabase
    .from("comments")
    .select()
    .order("created_at", { ascending: false });

  return (
    <div className="w-full py-5">
      <SinglePost idPost={id} idUser={user.id} />
      <FormComment postId={id} userProfile={data} />
      <RealtimeComments serverComments={comments} />
    </div>
  );
}
