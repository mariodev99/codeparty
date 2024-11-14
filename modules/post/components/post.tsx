import { createClient } from "@/utils/supabase/server";
import { Post } from "../types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import LikeButton from "@/modules/interactions/components/like-button";

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

  const Header = () => (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <div className="h-14 w-14 rounded-full bg-content-secondary relative overflow-hidden ">
          {data?.user.avatar && (
            <Image
              alt="avatar"
              src={data?.user.avatar}
              fill
              objectFit="cover"
            />
          )}
        </div>
        <div>
          <p className="text-xl font-medium">{data?.user.username}</p>
          <p className="text-lg">{data?.user.position}</p>
        </div>
      </div>
      <div className="">
        <Link
          className="bg-primary rounded-full px-4 py-2 font-medium"
          href={`/profiles/${data?.user_id}`}
        >
          View profile
        </Link>
      </div>
    </div>
  );

  return (
    <div className="py-5">
      <Header />
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

      <div className="mt-3">
        <LikeButton initialLikes={data.likes} idUser={idUser} idPost={idPost} />
      </div>
    </div>
  );
}