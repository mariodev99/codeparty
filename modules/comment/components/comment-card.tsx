import Image from "next/image";
import { Comment } from "../types";

export default function CommentCard({ user, content }: Comment) {
  return (
    <div className="flex gap-2 w-full p-2 bg-content-primary border border-border rounded-3xl">
      <div className="h-10 w-10 aspect-square rounded-full bg-content-primary  relative overflow-hidden">
        {user && (
          <Image
            alt="profile picture"
            src={user.avatar}
            fill
            objectFit="cover"
          />
        )}
      </div>
      <div>
        <p className="font-medium">{user.username}</p>
        <p className="font-regular">{content}</p>
      </div>
    </div>
  );
}
