"use client";

import supabaseClient from "@/utils/supabase/client";
import { Bookmark, Star } from "lucide-react";
import { useState } from "react";

export default function SaveButton({
  initialSaves,
  idPost,
  idUser,
}: {
  initialSaves: string[];
  idPost: string;
  idUser: string;
}) {
  const [isSave, setIsSave] = useState(initialSaves.includes(idUser));

  const saveOrUnsavePost = async () => {
    const { data, error } = isSave
      ? await supabaseClient.rpc("array_remove_saves", {
          save_user_id: idUser,
          post_id: idPost,
        })
      : await supabaseClient.rpc("array_add_saves", {
          save_user_id: idUser,
          post_id: idPost,
        });

    if (error) {
      console.error("Error saving post:", error.message);
    } else {
      console.log(data);

      setIsSave(!isSave);
    }
  };

  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        saveOrUnsavePost();
      }}
      className="cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <Bookmark
          className={` ${isSave ? "fill-foreground stroke-foreground" : "fill-none stroke-content-secondary"} hover:fill-foreground`}
        />
      </div>
    </div>
  );
}
