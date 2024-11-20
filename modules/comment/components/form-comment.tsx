import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/ui/submit-button";
import { SendComment } from "../actions";
import Image from "next/image";

export default function FormComment({
  userProfile,
  postId,
}: {
  userProfile: { avatar: string; username: string; position: string };
  postId: string;
}) {
  const SendCommentWithData = SendComment.bind(null, userProfile, postId);

  return (
    <div className="w-full rounded-full border border-border bg-content-primary mt-2">
      <form
        className="flex items-center p-2 gap-2"
        action={SendCommentWithData}
      >
        <div className="h-10 w-10 aspect-square rounded-full bg-content-primary  relative overflow-hidden">
          {userProfile && (
            <Image
              alt="profile picture"
              src={userProfile.avatar}
              fill
              objectFit="cover"
            />
          )}
        </div>
        <Input
          type="text"
          name="content"
          placeholder="Write a comment"
          className="border-none focus:outline-none placeholder:text-content-secondary sm:placeholder:text-sm flex-1 bg-content-primary"
        />
        <SubmitButton pendingText="Sending">Send</SubmitButton>
      </form>
    </div>
  );
}
