"use client";

import supabaseClient from "@/utils/supabase/client";
import { Star } from "lucide-react";
import { useState } from "react";

export default function LikeButton({
  initialLikes,
  idPost,
  idUser,
}: {
  initialLikes: string[];
  idPost: string;
  idUser: string;
}) {
  const [likesQ, setLikesQ] = useState(initialLikes.length);
  const [isLiked, setIsLiked] = useState(initialLikes.includes(idUser));

  const likeOrUnlikePost = async () => {
    const { error } = isLiked
      ? await supabaseClient.rpc("array_remove_likes", {
          post_id: idPost,
          like_user_id: idUser,
        })
      : await supabaseClient.rpc("array_add_likes", {
          post_id: idPost,
          like_user_id: idUser,
        });

    if (error) {
      console.error("Error adding like:", error.message);
    } else {
      setIsLiked(!isLiked);
      isLiked
        ? setLikesQ((prev) => Math.max(0, prev - 1))
        : setLikesQ((prev) => prev + 1);
    }
  };

  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        likeOrUnlikePost();
      }}
      className="cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <Star
          className={` ${isLiked ? "fill-yellow-400 stroke-yellow-500" : "fill-none stroke-content-secondary"}`}
        />
        <p className="text-content-secondary">{likesQ}</p>
      </div>
    </div>
  );
}
