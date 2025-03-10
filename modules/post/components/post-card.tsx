"use client";

import Image from "next/image";
import { Post } from "../types";
import useTimeAgo from "@/hooks/useTimeago";
import Link from "next/link";
import LikeButton from "@/modules/interactions/likes/like-button";
import SaveButton from "@/modules/interactions/saves/save-button";
import { useRouter } from "next/navigation";
import CommentButton from "@/modules/comment/components/comment-button";
import { useEffect, useState } from "react";
import supabaseClient from "@/utils/supabase/client";

function PostCard({
  user,
  content,
  saves,
  likes,
  image,
  created_at,
  id,
  userId,
  user_id,
}: Post & { userId: string }) {
  const createAtDate = new Date(created_at);
  const dateago = useTimeAgo(createAtDate);

  const ProfileCard = () => {
    const router = useRouter();
    const [profileData, setProfileData] = useState<any | null>(null);

    const handleGoToProfile = () => {
      router.push(`/profiles/${user_id}`);
    };

    useEffect(() => {
      const getData = async () => {
        const { data, error } = await supabaseClient
          .from("profiles")
          .select("username, avatar, position")
          .eq("id", user_id)
          .single();

        if (data) {
          setProfileData(data);
        }
      };

      getData();
    }, []);

    return (
      <div
        className="flex gap-2"
        onClick={(event) => {
          event.preventDefault();
          handleGoToProfile();
        }}
      >
        {/* avatar */}
        <div className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-content-secondary relative overflow-hidden ">
          {profileData?.avatar && (
            <Image
              alt="avatar"
              src={profileData.avatar}
              fill
              objectFit="cover"
            />
          )}
        </div>
        {/* username */}
        <div>
          <div className="text-foreground font-medium">{user.username}</div>
          <div className="text-content-secondary text-[10px] md:text-xs leading-4 md:leading-5 font-regular">
            {user.position}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Link href={`/posts/${id}`} className="">
      <div className="w-full border border-border rounded-3xl p-4 bg-content-primary text-sm md:text-base">
        <div className="flex gap-2 justify-between">
          <ProfileCard />
          <p className="text-content-secondary text-sm md:pt-1">{dateago}</p>
        </div>
        {/* content */}
        <div className="mt-2">
          <p>{content}</p>
          {image && (
            <div className="mt-2 h-56 w-full relative overflow-hidden">
              <Image
                alt="avatar"
                src={image}
                fill
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        {/* interactions */}
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-4 text-content-secondary">
            <LikeButton initialLikes={likes} idUser={userId} idPost={id} />
            {/* <CommentDialog
                postId={id}
                currentUserId={userId}
                setOpen={setOpen}
                open={open}
              > */}
            <CommentButton postId={id} />
            {/* </CommentDialog> */}
          </div>
          <SaveButton initialSaves={saves} idUser={userId} idPost={id} />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
