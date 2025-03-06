import { createClient } from "@/utils/supabase/server";
import { Post } from "../types";
import Image from "next/image";
import LikeButton from "@/modules/interactions/likes/like-button";
import SaveButton from "@/modules/interactions/saves/save-button";
import Header from "./header-post";

export default async function SinglePost({
  idPost,
  idUser,
}: {
  idPost: string;
  idUser: string;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", idPost)
    .single<Post>();

  if (error) {
    return (
      <div className="text-xl text-center w-full text-content-secondary">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-xl text-center w-full text-content-secondary">
        Post not found
      </div>
    );
  }

  return (
    <>
      <div className="p-4 bg-content-primary border border-border rounded-3xl">
        <Header userId={data?.user_id} />
        <p className="text-lg mt-2 font-medium">{data?.content}</p>
        {data?.image && (
          <div className="mt-2 h-56 w-full relative overflow-hidden">
            <Image
              alt="avatar"
              src={data.image}
              fill
              style={{ borderRadius: "16px", objectFit: "cover" }}
            />
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          <div className="">
            <LikeButton
              initialLikes={data.likes}
              idUser={idUser}
              idPost={idPost}
            />
          </div>
          <SaveButton
            initialSaves={data.saves}
            idUser={idUser}
            idPost={idPost}
          />
        </div>
      </div>
    </>
  );
}
