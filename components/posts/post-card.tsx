"use client";

import { Comment, Like, Save } from "@/components/icons";
import Image from "next/image";
import { Post } from "../../modules/post/types";
import useTimeAgo from "@/hooks/useTimeago";

function PostCard({ user, content, saves, likes, image, created_at }: Post) {
  const createAtDate = new Date(created_at);
  const dateago = useTimeAgo(createAtDate);

  const ProfileCard = () => (
    <div className="flex gap-2">
      {/* avatar */}
      <div className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-content-secondary relative overflow-hidden ">
        {user.avatar && (
          <Image alt="avatar" src={user.avatar} fill objectFit="cover" />
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

  return (
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
          <div className="flex items-center gap-1">
            <Like isLiked={true} />
            <p className=" mt-1">8</p>
          </div>

          <div className="flex items-center gap-1">
            <Comment />
            <p className=" mt-1">8</p>
          </div>
        </div>
        <Save isSave={true} />
      </div>
    </div>
  );
}

export default PostCard;
