"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTimeAgo from "@/hooks/useTimeago";
import LikeButton from "@/modules/interactions/likes/like-button";
import SaveButton from "@/modules/interactions/saves/save-button";
import CommentButton from "@/modules/comment/components/comment-button";
import supabaseClient from "@/utils/supabase/client";
import { Post } from "../types";
import ProfileCard from "./profile-card";

function PostCard({
  user_id,
  content,
  saves,
  likes,
  image,
  created_at,
  id,
  userId,
}: Post & { userId: string }) {
  const createAtDate = new Date(created_at);
  const dateago = useTimeAgo(createAtDate);
  const [userProfile, setUserProfile] = useState<
    | {
        username: string;
        avatar?: string;
        position?: string;
      }
    | any //TODO FIX TS: ANY is error or null
  >(null);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      const { data, error } = await supabaseClient
        .from("profiles")
        .select("username, avatar, position")
        .eq("id", user_id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
      }

      if (isMounted && data) {
        setUserProfile(data);
      }
    };

    getData();

    return () => {
      isMounted = false; // Evita actualizaciones en componentes desmontados
    };
  }, [user_id]);

  return (
    <Link href={`/post/${id}`} className="">
      <div className="w-full border border-border rounded-3xl p-4 bg-content-primary text-sm md:text-base">
        <div className="flex gap-2 justify-between">
          {userProfile && <ProfileCard user={userProfile} user_id={user_id} />}
          <p className="text-content-secondary text-sm md:pt-1">{dateago}</p>
        </div>
        <div className="mt-2">
          <p>{content}</p>
          {image && (
            <div className="mt-2 h-56 w-full relative overflow-hidden">
              <Image
                alt="image"
                src={image}
                fill
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-4 text-content-secondary">
            <LikeButton initialLikes={likes} idUser={userId} idPost={id} />
            <CommentButton postId={id} />
          </div>
          <SaveButton initialSaves={saves} idUser={userId} idPost={id} />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
